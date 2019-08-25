import { MulterModule } from '@nestjs/platform-express';
import { AuthService } from './../service/auth.service';
import { AuthController } from './../controllers/auth.controller';
import { AuthEntity } from './../../../entities/auth.entity';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtStrategy } from '../jwt.strategy';

@Module({
    imports: [PassportModule.register({
        defaultStrategy: 'jwt'
    }), JwtModule.register({
        secret: 'secretTop51', signOptions: {
            expiresIn: 3600,
        },
    }), TypeOrmModule.forFeature([AuthEntity]),
    MulterModule.register({ dest: './upload' })],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
    exports: [JwtStrategy, PassportModule],
})
export class AuthModule { }
