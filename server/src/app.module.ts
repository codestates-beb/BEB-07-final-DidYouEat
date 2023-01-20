import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { OwnerModule } from './owner/owner.module';
import { CollectionModule } from './collection/collection.module';
import { ItemModule } from './item/item.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [UserModule, AuthModule, OwnerModule, CollectionModule, ItemModule],
})
export class AppModule {}
