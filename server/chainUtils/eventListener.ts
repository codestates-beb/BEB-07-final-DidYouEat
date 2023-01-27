import Caver, { AbiItem } from 'caver-js';
import { abi } from './abi/MyToken';

const caver = new Caver('wss://public-node-api.klaytnapi.com/v1/baobab/ws');

const myContract = caver.contract.create(
  abi as AbiItem[],
  process.env.MYTOKEN_CA,
);

const findEvent = async () => {
  try {
    const options = {
      filter: {
        value: [],
      },
      fromBlock: 'latest',
    };

    console.log(myContract.events.Transfer(options));

    myContract.events
      .Transfer(options)
      .on('data', async (event: any) => {
        try {
          console.log('data');
          console.log(event);
        } catch (err) {
          console.error(err);
          return err;
        }
      })
      .on('changed', (changed: any) => console.log(changed))
      .on('error', (err: any) => console.log(err))
      .on('connected', (str: any) => console.log(str));
  } catch (err) {
    console.log(err);
    return err;
  }
};

export { findEvent };
