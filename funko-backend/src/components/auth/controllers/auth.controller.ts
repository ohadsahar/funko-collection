import { RegisterDto } from './../dto/register.dto';
import { AuthService } from './../service/auth.service';
import { Controller, Post, Body, Get, UseGuards, Logger } from '@nestjs/common';
import { LoginDto } from '../dto/login.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../get-user.decorator';
import { AuthEntity } from '../../../entities/auth.entity';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }
    @Post('/signup')
    async signUp(@Body() registerData: RegisterDto) {
        try {
            const resultOfCreate = await this.authService.register(registerData);
            return { message: resultOfCreate, success: true };
        } catch (error) {
            return { message: error, success: false };
        }
    }
    @Post('/login')
    async login(@Body() loginData: LoginDto) {
        try {
            const resultOfLogin = await this.authService.login(loginData);
            console.log(resultOfLogin);
            return { message: resultOfLogin, success: true };
        } catch (error) {
            return { message: error, success: false };
        }
    }
    @Get('/user')
    @UseGuards(AuthGuard())
    getUser(@GetUser() user: AuthEntity) {
        try {
            return { message: user, success: true };
        } catch (error) {
            return { message: error, success: false };
        }
    }
}
