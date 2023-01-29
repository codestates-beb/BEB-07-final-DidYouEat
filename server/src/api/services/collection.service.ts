import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { getEvents } from 'prisma/scripts/collection/getEvents';
import { collectionUtils } from 'prisma/scripts/collection';
import { collection } from 'src/api/dto/collection.dto';
import { event } from 'src/api/dto/event.dto';
import { uploadIpfs } from 'chainUtils/ipfs';
import { chainUtils } from 'chainUtils/scripts';

import path from 'path';
import dotenv from 'dotenv';

const ROOT_DIR = path.join(__dirname, '../../..');
dotenv.config({ path: `${ROOT_DIR}/.env` });

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

    const CID = await uploadIpfs(newCollection);
    const uri = `${IPFS_BASE_URL}/${CID}`;

    const result = await chainUtils.createCollection(
      collection_id,
      owner_id,
      uri,
    );

    console.log(result);

    if (result === null) {
      return res
        .status(200)
        .send({ status: 'failed', message: `${collection_id} already exist` });
    }
    return res.status(201).send({ status: 'success', message: newCollection });
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
