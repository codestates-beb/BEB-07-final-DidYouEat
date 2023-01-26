import { Controller, Get, Param, Patch, Res } from '@nestjs/common';
import { Response } from 'express';
import { UserService } from '../services/user.service';

@Controller('/api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get(':wallet_address')
  getUser(
    @Param('wallet_address') walletAddres: string,
    @Res() res: Response,
  ): object {
    return this.userService.getUser(walletAddres, res);
  }

  @Get(':wallet_address/tokens')
  getUserTokens(): object {
    return {};
  }

  @Patch('changenick')
  changeNick(): object {
    return {};
  }
}
