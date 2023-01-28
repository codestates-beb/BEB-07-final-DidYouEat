import Caver, { AbiItem } from 'caver-js';
import { abi } from '../abi/MyToken';
import path from 'path';
import dotenv from 'dotenv';

//env path setting
const ROOT_DIR = path.join(__dirname, '../..');
dotenv.config({ path: `${ROOT_DIR}/.env` });

const {
  SERVER_ADDR = '',
  SERVER_PRIVATE_KEY = '',
  MYTOKEN_CA = '',
} = process.env;

const caver = new Caver('https://api.baobab.klaytn.net:8651');

// console.log(SERVER_ADDR);
// console.log(SERVER_PRIVATE_KEY);

async function generateKeyring() {
  const keyring = caver.wallet.keyring.createWithSingleKey(
    SERVER_ADDR,
    SERVER_PRIVATE_KEY,
  );

  return keyring;
}

async function setKeyring() {
  const keyring = await generateKeyring();
  caver.wallet.add(keyring);
}

setKeyring();

const myContract = caver.contract.create(abi as AbiItem[], MYTOKEN_CA);

export { caver, myContract };
