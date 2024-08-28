import { HydratedDocument} from "mongoose";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IBook } from "src/interface/books";

 
export type BookDocument = HydratedDocument<Book>;
 
@Schema()
export class Book implements IBook {
    @Prop() name: string;

    @Prop() title: string;
 
    @Prop() description: string;
 
    @Prop() price: number;
 
    @Prop() img: string;

    @Prop() language: string;
 
    @Prop() id: string;

    @Prop() quantity: number;
}
 
export const BookSchema = SchemaFactory.createForClass(Book);