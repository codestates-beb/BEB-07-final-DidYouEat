import { Controller, Get, Patch } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get(':walletaddress')
  userMain(): object {
    return {};
  }

  @Get(':walletAddress/tokens')
  getUserTokens(): object {
    return {};
  }

  @Patch('changenick')
  changeNick(): object {
    return {};
  }
}
