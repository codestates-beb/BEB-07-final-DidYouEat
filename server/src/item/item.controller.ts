import { Controller, Get, Post } from '@nestjs/common';
import { ItemService } from './item.service';

@Controller('api/item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get()
  getAll(): object {
    return {};
  }

  @Get(':tokenId')
  getItem(): object {
    return {};
  }

  @Post('mint')
  mint(): object {
    return {};
  }
}
