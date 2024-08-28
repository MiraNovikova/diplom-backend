import { IOrder } from "src/interface/order";


export class OrderDto implements IOrder {
    title: string;
    price: number
    id: string;
    quantity: number;
    userId: any;


    constructor(title, price, id, quantity, userId) {
  
        this.title = title;
         this.price = price;
        this.id = id;
        this.quantity = quantity;
        this.userId = userId;
    }
}