import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './controllers/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './shemas/user';
import { ItemsModule } from './controllers/items/items.module';
import { OrderModule } from './controllers/order/order.module';





@Module({
  imports: [UsersModule,  ItemsModule, OrderModule, MongooseModule.forRoot('mongodb://127.0.0.1:27017/bookstorage'),
    MongooseModule.forFeature([{ name: 'user', schema: UserSchema}])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
