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
  // console.log(myContract);

  poapContract.methods
    .createCollection(collectionName, owner, metaURI)
    .send({ from: process.env.SERVER_ADDR, gas: 1000000 })
    .then((res: any) => console.log(res));
}

export { createCollection };
