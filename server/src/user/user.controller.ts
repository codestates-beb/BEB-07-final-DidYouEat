import { Controller, Get, Patch } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get(':wallet_address')
  userMain(): object {
    return {};
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
