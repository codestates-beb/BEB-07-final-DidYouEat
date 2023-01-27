import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { prisma } from '../../prisma/prisma';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      secretOrKey: 'secret1234',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload) {
    console.log(payload);
    const { userId } = payload;
    const owner = await prisma.owner.findUnique({
      where: { owner_id: userId },
    });
    if (!owner) throw new UnauthorizedException();
    return true;
  }
}
