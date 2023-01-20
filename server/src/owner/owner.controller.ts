import { Controller, Get, Patch } from '@nestjs/common';
import { OwnerService } from './owner.service';

@Controller('/api/owner')
export class OwnerController {
  constructor(private readonly ownerService: OwnerService) {}
  @Get(':ownerId/collections')
  ownerMain(): object {
    return {};
  }

  @Patch('changepw')
  changePW(): object {
    return {};
  }
}
