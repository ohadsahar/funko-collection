import { RegisterDto } from './../dto/register.dto';
import { AuthService } from './../service/auth.service';
import { Controller, Post, Body } from '@nestjs/common';
import { LoginDto } from '../dto/login.dto';

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
            return { message: resultOfLogin, success: true };
        } catch (error) {
            return { message: error, success: false };
        }
    }
}
