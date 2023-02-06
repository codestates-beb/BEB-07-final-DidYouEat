import { networkInfo } from './networkInfo';
import Caver from 'caver-js';

// const ws = new Caver.providers.WebsocketProvider(
//   'wss://api.baobab.klaytn.net:8652/',
//   {
//     reconnect: { auto: true },
//   },
// );

const ws = new Caver.providers.HttpProvider(networkInfo.network, {
  keepAlive: true,
});
export const caver = new Caver(networkInfo.network);
// export const caver = new Caver(ws);
// export const caver = new Caver(
//   'wss://public-node-api.klaytnapi.com/v1/baobab/ws',
// );
