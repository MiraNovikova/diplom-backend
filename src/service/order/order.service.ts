import { Injectable, Param } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OrderDto } from 'src/dto/order-dto';

import { IOrder } from 'src/interface/order';
import { Order, OrderDocument } from 'src/shemas/order';


@Injectable()
export class OrderService {

    constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>) { }

    async getAllOrders(): Promise<IOrder[]> {
        return this.orderModel.find()
    }

    async sendOrder(data: OrderDto): Promise<Order> {
        const orderData = new this.orderModel(data);
        return orderData.save();
    }

    async getOrderByUserId(userId : any): Promise<any>{
        return this.orderModel.findById(userId);
    }

    async getOrders(userId : string) : Promise<OrderDto[]> {
        return this.orderModel.find({userId : userId})
       }
}
