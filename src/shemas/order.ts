import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";


export type OrderDocument = HydratedDocument<Order>;
 
@Schema()
export class Order implements Order {
    @Prop() title: string; 
    @Prop() price: number;
 
    @Prop() id: string;

    @Prop() quantity: number;
    @Prop() userId: string;
}
 
export const OrderSchema = SchemaFactory.createForClass(Order);