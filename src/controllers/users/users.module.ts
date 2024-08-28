import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/shemas/user';
import { UsersController } from './users.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants } from 'src/static/private/constants';
import { UsersService } from 'src/service/users/users.service';
import { AuthService } from 'src/service/authentication/auth/auth.service';
import { JwtStrategyService } from 'src/service/authentication/jwt-strategy/jwt-strategy.service';


@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
     PassportModule,
     JwtModule.register({
        secret: jwtConstants.secret
    })],
    controllers: [UsersController],
     providers: [UsersService, AuthService, JwtStrategyService],
})
export class UsersModule {}
