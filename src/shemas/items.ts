import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { IBook } from "src/interface/books";


export type ItemsDocument = HydratedDocument<Items>;

@Schema()
export class Items implements IBook {

    @Prop() name: string;

    @Prop() title: string;

    @Prop() price: number;

    @Prop() id: string;

    @Prop() description: string;

    @Prop() quantity: number;

    @Prop() img: string;

    @Prop() language: string;
}

export const ItemsSchema = SchemaFactory.createForClass(Items);