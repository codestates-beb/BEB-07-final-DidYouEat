import { poapContract } from './setting';

import path from 'path';
import dotenv from 'dotenv';

const ROOT_DIR = path.join(__dirname, '../..');
dotenv.config({ path: `${ROOT_DIR}/.env` });

async function createCollection(
  collectionName: string,
  owner: string,
  metaURI: string,
) {
  // console.log(poapContract);
  try {
    const result = await poapContract.methods
      .createCollection(collectionName, owner, metaURI)
      .send({ from: process.env.SERVER_ADDR, gas: 1000000 });

    return result;
  } catch (e) {
    return null;
  }
}

export { createCollection };
