import { RegisterDto } from './../dto/register.dto';
import { AuthService } from './../service/auth.service';
import { Controller, Post, Body, Get, UseGuards, Logger, UseInterceptors, UploadedFile, Put, Param, UploadedFiles, Res } from '@nestjs/common';
import { LoginDto } from '../dto/login.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../get-user.decorator';
import { AuthEntity } from '../../../entities/auth.entity';
import { FilesInterceptor, FileFieldsInterceptor } from '@nestjs/platform-express';

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
