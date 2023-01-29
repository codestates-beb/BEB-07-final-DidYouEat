import { Injectable } from '@nestjs/common';
import { ownerSignUp } from '../../prisma/scripts/auth/ownerSignUp';
import { getOwner } from '../../prisma/scripts/auth/getOwner';
import { Response } from 'express';
import { ownerSignDto } from 'src/dto/ownerSign.dto';

@Injectable()
export class signServices {
  async signUp(body: ownerSignDto, res: Response): Promise<Response> {
    if (Object.keys(body).length !== 2)
      return res.status(400).send({ status: 'failed', message: 'Bad Request' });
    const ownerCreateRes = await ownerSignUp(body.id, body.password);

    if (ownerCreateRes === null)
      return res.status(200).send({ status: 'failed', message: 'exist id' });
    if (ownerCreateRes)
      return res.status(201).send({
        status: 'success',
        message: `${ownerCreateRes.owner_id} created`,
      });
  }

  async signIn(body: ownerSignDto, res: Response): Promise<Response> {
    if (Object.keys(body).length !== 2)
      return res.status(400).send({ status: 'failed', message: 'Bad Request' });
    const ownerData = await getOwner(body.id);
    if (ownerData === null)
      return res
        .status(200)
        .send({ status: 'failed', message: 'No matching owner' });
    if (ownerData.owner_pw === body.password)
      return res.status(200).send({ status: 'success', message: 'success' });
    else
      return res
        .status(200)
        .send({ status: 'failed', message: 'signIn failed' });
  }
}
