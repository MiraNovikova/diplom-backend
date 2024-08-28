import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsService } from 'src/service/items/items.service';
import { Items, ItemsSchema } from 'src/shemas/items';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
    controllers: [ItemsController],
    imports: [MongooseModule.forFeature([{ name: Items.name, schema: ItemsSchema }])],
    providers: [ItemsService]
})
export class ItemsModule {}
