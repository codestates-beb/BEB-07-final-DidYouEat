import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { getTokensByWallet, getUser } from 'prisma/scripts/user/getUserData';

@Injectable()
export class UserService {
  async getUser(wallet_address: string, res: Response) {
    if (!wallet_address)
      return res.status(400).send({ status: 'failed', message: 'Bad Request' });
    const userData = await getUser(wallet_address);
    const userTokens = await getTokensByWallet(wallet_address);
    return res
      .status(200)
      .send({ status: 'success', message: { userData, userTokens } });
  }
}
