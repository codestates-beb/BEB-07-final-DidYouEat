import { Controller, Get, Patch } from '@nestjs/common';
import { OwnerService } from './owner.service';

@Controller('/api/owners')
export class OwnerController {
  constructor(private readonly ownerService: OwnerService) {}
  @Get(':owner_id/collections')
  ownerMain(): object {
    return {};
  }

  @Patch('changepw')
  changePW(): object {
    return {};
  }
}
