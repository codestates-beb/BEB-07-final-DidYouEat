import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { getEvents } from 'prisma/scripts/collection/getEvents';
import { createEvent } from 'prisma/scripts/collection/newEvent';
import { collection } from 'src/dto/collection.dto';
import { event } from 'src/dto/event.dto';
import { getCollectionData } from '../../prisma/scripts/collection/getCollection';
import { createCollection } from '../../prisma/scripts/collection/newCollection';

@Injectable()
export class CollectionService {
  async getCollection(collection_id: string, res: Response) {
    const collectionData = await getCollectionData(collection_id);
    if (collectionData === null) {
      return res.status(200).send({
        status: 'failed',
        message: 'no matching collection',
      });
    }
    return res.status(200).send({ status: 'success', message: collectionData });
  }

  async createCollection(body: collection, res: Response) {
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

    // create new collection
    const newCollection = await createCollection({
      collection_id,
      img_url,
      coordinate_x,
      coordinate_y,
      owner_id,
      shop_name,
      event,
    });
    if (newCollection === null) {
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

    const collectionData = await getCollectionData(collection_id);
    if (collectionData === null)
      return res
        .status(200)
        .send({ status: 'failed', message: 'no matching collection' });

    await createEvent(body);
    const updatedCollectionData = await getCollectionData(collection_id);
    const events = await getEvents(collection_id);
    return res.status(201).send({
      status: 'success',
      message: { collection: updatedCollectionData, events },
    });
  }
}
