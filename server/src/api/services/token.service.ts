import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { getTokenData } from 'prisma/scripts/token/getTokenData';
import { caver } from 'chainUtils/caver';
import dotenv from 'dotenv';
import { mintToken } from '../dto/mintToken.dto';
import { poapAbi } from 'chainUtils/abi/PoapAbi';
import { AbiItem } from 'caver-js';

dotenv.config();

@Injectable()
export class TokenService {
  async getTokenData(token_id: number, res: Response) {
    const tokenData = await getTokenData(token_id);
    if (tokenData)
      return res.status(200).send({ status: 'success', message: tokenData });
    else
      return res
        .status(200)
        .send({ status: 'failed', message: 'token_id does not exits' });
  }

  async mintToken(body: mintToken, res: Response) {
    if (Object.keys(body).length !== 2 || !body.address || !body.collection_id)
      return res.status(400).send({ status: 'failed', message: 'Bad Request' });
    const { address, collection_id } = body;
    console.log(body);
    const serverWallet = process.env.SERVER_ADDR;
    const serverWalletPKey = process.env.SERVER_PRIVATE_KEY;
    if (!caver.wallet.isExisted(serverWallet))
      caver.wallet.newKeyring(serverWallet, serverWalletPKey);

    console.log(process.env.POAP_CA);
    const contract = new caver.contract(
      poapAbi as AbiItem[],
      process.env.POAP_CA,
    );
    try {
      const mintRes = await contract.methods
        .mintToken(address, collection_id)
        .send({ from: serverWallet, gas: 1000000 });
      console.log(mintRes);
      return res.status(200).send({ status: 'success', message: { address } });
    } catch (e) {
      console.log(e);
      return res
        .status(500)
        .send({ status: 'failed', message: 'internal error' });
    }
  }
}
