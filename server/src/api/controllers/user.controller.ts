import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';
import { user } from '../dto/user.dto';
import { UserService } from '../services/user.service';

@Controller('/api/users')
@UseGuards(AuthGuard())
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Patch('changenick')
  changeNick(@Body() body: user, @Res() res: Response): object {
    return this.userService.changeUserNick(body, res);
  }

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
}
