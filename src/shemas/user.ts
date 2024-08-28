import { HydratedDocument} from "mongoose";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IUser } from "src/interface/user";
import * as bcrypt from 'bcrypt';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User implements IUser {

    @Prop() psw: string;

    @Prop() login: string

    @Prop() email: string

    @Prop() id: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

 
