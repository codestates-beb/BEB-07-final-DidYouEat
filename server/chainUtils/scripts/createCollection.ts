import { poapContract } from './setting';

async function createCollection(
  collectionName: string,
  owner: string,
  metaURI: string,
) {
  // console.log(myContract);

  poapContract.methods
    .createCollection(collectionName, owner, metaURI)
    .send({ from: process.env.ACC_ADDR, gas: 1000000 })
    .then((res: any) => console.log(res));
}

export { createCollection };
