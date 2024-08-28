import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from 'src/service/order/order.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from 'src/shemas/order';

@Module({
    controllers: [OrderController],
    imports: [MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }])],
     providers: [OrderService]
})
export class OrderModule {}
