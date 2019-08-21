import { AuthService } from './../service/auth.service';
import { AuthController } from './../controllers/auth.controller';
import { AuthEntity } from './../../../entities/auth.entity';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [PassportModule.register({
        defaultStrategy: 'jwt'
    }), JwtModule.register({
        secret: 'secretTop51', signOptions: {
            expiresIn: 3600,
        },
    }), TypeOrmModule.forFeature([AuthEntity])],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule { }
