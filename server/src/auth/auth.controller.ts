import { Body, Controller, Get, Post } from '@nestjs/common';
import { signServices } from './auth.service';

@Controller('/api/auth')
export class AuthController {
  constructor(private readonly authServices: signServices) {}

  @Get()
  authMain(): object {
    return {};
  }

  @Post('owner/signup')
  signUp(@Body() body: object): object {
    return this.authServices.authMain(body);
  }

  @Post('owner/signin')
  signIn(): object {
    return {};
  }
}
