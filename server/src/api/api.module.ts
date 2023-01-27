import { Module } from '@nestjs/common';
import { CollectionController } from './controllers/collection.controller';
import { ItemController } from './controllers/item.controller';
import { OwnerController } from './controllers/owner.controller';
import { UserController } from './controllers/user.controller';
import { CollectionService } from './services/collection.service';
import { ItemService } from './services/item.service';
import { OwnerService } from './services/owner.service';
import { UserService } from './services/user.service';

@Module({
  controllers: [
    CollectionController,
    ItemController,
    OwnerController,
    UserController,
  ],
  providers: [CollectionService, ItemService, OwnerService, UserService],
})
export class ApiModule {}
