import path from 'path';
import dotenv from 'dotenv';
// import Caver, { AbiItem } from 'caver-js';
import ipfsClient from 'ipfs-http-client';

const ROOT_DIR = path.join(__dirname, '..');
dotenv.config({ path: `${ROOT_DIR}/.env` });

// const { KAS_ACCESS_KEY, KAS_SECRET_KEY } = process.env;
const { IPFS_PROJECT_ID, IPFS_SECRET_KEY } = process.env;

// console.log(KAS_ACCESS_KEY, KAS_SECRET_KEY);

const testMeta = {
  collection_id: 'test',
  img_url: 'https://test.url',
  coordinate_x: 36,
  coordinate_y: 48,
  owner_id: 'owner1',
  shop_name: 'fire',
  event: 'good event',
};

// async function upload(meta) {
//   //infura auth option
//   const option = {
//     headers: [
//       {
//         name: 'Authorization',
//         value: `Basic ${Buffer.from(
//           `${KAS_ACCESS_KEY}:${KAS_SECRET_KEY}`,
//         ).toString('base64')}`,
//       },
//       { name: 'x-chain-id', value: '8217' },
//     ],
//   };

//   console.log(option);

//   //set api provider
//   const caver = new Caver(
//     new Caver.providers.HttpProvider(
//       'https://node-api.klaytnapi.com/v1/klaytn',
//       option,
//     ),
//   );

//   //set infura endpoint
//   await caver.ipfs.setIPFSNode('ipfs.infura.io', 5001, true);

//   const cid = await caver.ipfs.add(Buffer.from(JSON.stringify(meta)));

//   //debug cid
//   console.log(`cid: ${cid}`);
// }

async function upload(meta) {
  const auth = `Basic ${Buffer.from(
    `${IPFS_PROJECT_ID}:${IPFS_SECRET_KEY}`,
  ).toString('base64')}`;

  const client = ipfsClient.create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
      authorization: auth,
    },
  });

  client.add(JSON.stringify(meta)).then((res) => {
    console.log(res);
  });
}

upload(testMeta);
