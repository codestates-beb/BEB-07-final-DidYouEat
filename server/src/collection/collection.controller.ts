import { Body, Controller, Get, Param, Patch, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { collection } from 'src/dto/collection.dto';
import { event } from 'src/dto/event.dto';
import { CollectionService } from './collection.service';

@Controller('/api/collections')
export class CollectionController {
  constructor(private readonly collectionService: CollectionService) {}
  @Get()
  collectionMain(): string {
    return 'collection';
  }

  @Get(':collection_id')
  getCollection(
    @Param('collection_id') collection_id: string,
    @Res() res: Response,
  ) {
    return this.collectionService.getCollection(collection_id, res);
  }

  @Post('create')
  createCollection(@Body() body: collection, @Res() res: Response): object {
    return this.collectionService.createCollection(body, res);
  }

  @Post('newevent')
  newEvent(@Body() body: event, @Res() res: Response): object {
    return this.collectionService.newEvent(body, res);
  }

  @Patch('delevent')
  delEvent(): object {
    return {};
  }
}
