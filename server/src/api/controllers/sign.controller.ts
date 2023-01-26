import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { SignServices } from '../services/sign.service';
import { Response } from 'express';
import { ownerSignDto } from 'src/api/dto/ownerSign.dto';

@Controller('/api/auth')
export class AuthController {
  constructor(private readonly authServices: SignServices) {}

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
