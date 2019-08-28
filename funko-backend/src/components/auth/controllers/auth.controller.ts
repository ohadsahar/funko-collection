import { Body, Controller, Get, Param, Post, Res, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { AuthEntity } from '../../../entities/auth.entity';
import { LoginDto } from '../dto/login.dto';
import { GetUser } from '../get-user.decorator';
import { RegisterDto } from './../dto/register.dto';
import { AuthService } from './../service/auth.service';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }
    @Post('/signup')
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'image', maxCount: 1 },
        { name: 'miniImage', maxCount: 1 },
      ]))
    async signUp(@Body() registerData: RegisterDto, @UploadedFiles() files) {
        try {
            const resultOfCreate = await this.authService.register(registerData, files);
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
    @Get('/user')
    @UseGuards(AuthGuard())
    getUser(@GetUser() user: AuthEntity) {
        try {
            return { message: user, success: true };
        } catch (error) {
            return { message: error, success: false };
        }
    }
    @Get(':imgpath')
    seeUploadedFile(@Param('imgpath') image, @Res() res) {
        return res.sendFile(image, { root: 'upload' });
    }
}
