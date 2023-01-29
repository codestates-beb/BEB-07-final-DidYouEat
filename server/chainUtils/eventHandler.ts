import { collectionUtils } from '../prisma/scripts/collection';
import fetch from 'node-fetch';

const url2json = async (url: string) => {
  try {
    const res = await (await fetch(url)).json();
    // console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
};

const poapEventHandler = {
  createCollection: async (e: any) => {
    const result = await url2json(e.returnValues.metaURI);

    const {
      collection_id,
      img_url,
      coordinate_x,
      coordinate_y,
      owner_id,
      shop_name,
      event,
    } = result;

    const newCollection = await collectionUtils.createCollection({
      collection_id,
      img_url,
      coordinate_x,
      coordinate_y,
      owner_id,
      shop_name,
      event,
    });
  },
};

const eventHandler = {
  poapEventHandler,
};

export { eventHandler };
