import Caver, { AbiItem } from 'caver-js';
import { abi } from './abi/MyToken';

import path = require('path');
import dotenv = require('dotenv');
dotenv.config({ path: `${path.dirname(__filename)}/../.env` });

const caver = new Caver('https://api.baobab.klaytn.net:8651');

// console.log(process.env.ACC_ADDR);
// console.log(process.env.ACC_PRIVATE_KEY);

async function generateKeyring() {
  const keyring = caver.wallet.keyring.createWithSingleKey(
    process.env.ACC_ADDR,
    process.env.ACC_PRIVATE_KEY,
  );

  return keyring;
}

async function setKeyring() {
  const keyring = await generateKeyring();
  caver.wallet.add(keyring);
}

setKeyring();

const myContract = caver.contract.create(
  abi as AbiItem[],
  process.env.MYTOKEN_CA,
);

export { caver, myContract };
