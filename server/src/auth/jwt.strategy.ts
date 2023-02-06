import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { prisma } from '../../prisma/prisma';
import { key } from './secretKey';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      secretOrKey: key,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: any) {
    const { userId } = payload;
    if (userId) {
      const owner = await prisma.owner.findUnique({
        where: { owner_id: userId },
      });
      if (owner) return true;
    }

    const { walletAddress } = payload;
    if (walletAddress) return true;
    throw new UnauthorizedException();
  }
}
