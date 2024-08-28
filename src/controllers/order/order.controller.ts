import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrderDto } from 'src/dto/order-dto';
import { IOrder } from 'src/interface/order';
import { OrderService } from 'src/service/order/order.service';

@Controller('order')

export class OrderController {
    constructor( private orderService: OrderService) {}


    @Post()
    initOrders(@Body() data: {items: OrderDto[], user: any}): void {

      if (Array.isArray(data.items)) {
        data.items.forEach(async (el) => {
          const orderData = new OrderDto(el.title, el.price, el.id, el.quantity, data.user);
          await this.orderService.sendOrder(orderData);
        });
      }

    }
    
    @Get()
    getAllOrders(): Promise<IOrder[]>{
        return this.orderService.getAllOrders()
    }

    @Get() getOrderByUserId(userId : any): Promise<any>{
      return this.orderService.getOrderByUserId(userId);
  }

  @Get(':userId')
  getOrders(@Param('userId') userId) : Promise<OrderDto[]> {
    return this.orderService.getOrders(userId)
  }


}
