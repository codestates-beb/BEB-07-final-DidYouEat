import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { OwnerAuthController } from './owner-auth/owner-auth.controller';
import { OwnerAuthService } from './owner-auth/owner-auth.service';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'secret1234',
      signOptions: {
        expiresIn: 3600,
      },
    }),
  ],
  providers: [OwnerAuthService, JwtStrategy],
  controllers: [OwnerAuthController],
  exports: [JwtStrategy, PassportModule],
})
export class AuthModule {}
