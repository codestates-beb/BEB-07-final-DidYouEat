import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { signServices } from './auth.service';
import { Response } from 'express';
import { ownerSignDto } from 'src/dto/ownerSign.dto';

@Controller('/api/auth')
export class AuthController {
  constructor(private readonly authServices: signServices) {}

  @Get()
  authMain(): object {
    return { status: 'success' };
  }

  @Post('owner/signup')
  signUp(@Body() body: ownerSignDto, @Res() res: Response): object {
    return this.authServices.signUp(body, res);
  }

  @Post('owner/signin')
  signIn(@Body() body: ownerSignDto, @Res() res: Response): object {
    return this.authServices.signIn(body, res);
  }
}
