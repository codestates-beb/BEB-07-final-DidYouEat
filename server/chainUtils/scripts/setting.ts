import Caver, { ABI, AbiItem } from 'caver-js';
import { tokenAbi } from 'chainUtils/abi/MyTokenAbi';
import { poapAbi } from 'chainUtils/abi/PoapAbi';
import path from 'path';
import dotenv from 'dotenv';

//env path setting
const ROOT_DIR = path.join(__dirname, '../..');
dotenv.config({ path: `${ROOT_DIR}/.env` });

const {
  SERVER_ADDR = '',
  SERVER_PRIVATE_KEY = '',
  MYTOKEN_CA = '',
  POAP_CA = '',
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

const testContract = caver.contract.create(tokenAbi as AbiItem[], MYTOKEN_CA);
const poapContract = caver.contract.create(poapAbi as AbiItem[], POAP_CA);

export { caver, testContract, poapContract };
