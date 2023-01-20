import { Module } from '@nestjs/common';
import { signServices } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  controllers: [AuthController],
  providers: [signServices],
})
export class AuthModule {}
