import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { getEvents } from 'prisma/scripts/collection/getEvents';
import { collectionUtils } from 'prisma/scripts/collection';
import { collection } from 'src/api/dto/collection.dto';
import { event } from 'src/api/dto/event.dto';
import { uploadIpfs } from 'chainUtils/ipfs';
import { chainUtils } from 'chainUtils/scripts';
import { poapEmitter } from 'chainUtils/eventHandler';

import path from 'path';
import dotenv from 'dotenv';
import EventEmitter from 'events';

const ROOT_DIR = path.join(__dirname, '../../..');
dotenv.config({ path: `${ROOT_DIR}/.env` });

class DbSync {
  private eventName: string;
  private complete: boolean;
  private status: boolean;
  private emitter: EventEmitter;
  private interval: any;

  constructor(eventName, emitter) {
    this.eventName = eventName;
    this.complete = false;
    this.status = false;
    this.emitter = emitter;
  }

  private clear() {
    clearInterval(this.interval);
  }

  private callback(res, rej) {
    return () => {
      // console.log('interval is running');
      if (this.complete) {
        this.clear();
        res(this.status);
      }
    };
  }

  public setEmitter() {
    // console.log('set');
    this.emitter.removeAllListeners(this.eventName);
    this.emitter.once(this.eventName, (status: boolean) => {
      this.fin(status);
    });
  }

  public run() {
    // console.log('run');
    return new Promise((res, rej) => {
      this.interval = setInterval(this.callback(res, rej), 1000);
    });
  }

  private changeStatus(status: boolean) {
    this.status = status;
  }

  public fin(status: boolean) {
    // console.log('fin');
    this.changeStatus(status);
    this.complete = true;
  }
}

@Injectable()
export class CollectionService {
  async getCollection(collection_id: string, res: Response) {
    const collectionData = await collectionUtils.getCollectionData(
      collection_id,
    );
    if (collectionData === null) {
      return res.status(200).send({
        status: 'failed',
        message: 'no matching collection',
      });
    }
    return res.status(200).send({ status: 'success', message: collectionData });
  }

  async createCollection(body: collection, res: Response) {
    const { IPFS_BASE_URL } = process.env;

    // 400 Bad Request
    const {
      collection_id,
      img_url,
      coordinate_x,
      coordinate_y,
      owner_id,
      shop_name,
      event,
    } = body;
    if (
      !collection_id ||
      !img_url ||
      !coordinate_x ||
      !coordinate_y ||
      !owner_id ||
      !shop_name ||
      !(Object.keys(body).length == 6 || Object.keys(body).length == 7)
    ) {
      return res.status(400).send({ status: 'failed', message: 'Bad Request' });
    }

    const newCollection = {
      collection_id,
      img_url,
      coordinate_x,
      coordinate_y,
      owner_id,
      shop_name,
      event,
    };

    //ipfs upload
    const CID = await uploadIpfs(newCollection);
    const uri = `${IPFS_BASE_URL}/${CID}`;

    //sync db listener
    const sync: DbSync = new DbSync('createCollection', poapEmitter);
    sync.setEmitter();

    //make transaction
    const result = await chainUtils.createCollection(
      collection_id,
      owner_id,
      uri,
    );

    //if collection_id is already exist
    if (result === null) {
      return res
        .status(200)
        .send({ status: 'failed', message: `${collection_id} already exist` });
    }

    //sync db
    const status = await sync.run();
    // console.log(status);

    //if db error
    if (!status) {
      return res
        .status(500)
        .send({ status: 'fail', message: 'internal server error' });
    }

    //get collectiondata
    const collectionData = await collectionUtils.getCollectionData(
      collection_id,
    );

    return res.status(201).send({ status: 'success', message: collectionData });
  }

  async newEvent(body: event, res: Response) {
    // 400 Bad Request
    const { collection_id, content } = body;
    if (Object.keys(body).length != 2 || !collection_id || !content)
      return res.status(400).send({ status: 'failed', message: 'Bad Request' });

    const collectionData = await collectionUtils.getCollectionData(
      collection_id,
    );
    if (collectionData === null)
      return res
        .status(200)
        .send({ status: 'failed', message: 'no matching collection' });

    await collectionUtils.createEvent(body);
    const updatedCollectionData = await collectionUtils.getCollectionData(
      collection_id,
    );
    const events = await getEvents(collection_id);
    return res.status(201).send({
      status: 'success',
      message: { collection: updatedCollectionData, events },
    });
  }
}
