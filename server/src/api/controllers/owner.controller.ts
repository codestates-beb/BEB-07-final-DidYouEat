import { Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { OwnerService } from '../services/owner.service';

@Controller('/api/owners')
@UseGuards(AuthGuard())
export class OwnerController {
  constructor(private readonly ownerService: OwnerService) {}
  @Get('test')
  ownerTest() {
    return 'OwnerTest';
  }

  @Get(':owner_id/collections')
  ownerMain(): object {
    return {};
  }

  @Patch('changepw')
  changePW(): object {
    return {};
  }
}
