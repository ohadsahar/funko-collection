import { Body, Controller, Post, Put, UploadedFiles, UseInterceptors, UseGuards, Get } from '@nestjs/common';
import { FileFieldsInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { RegisterDto } from 'src/components/auth/dto/register.dto';
import { UserDataService } from '../service/user-data.service';
import { GetUser } from 'src/components/auth/get-user.decorator';
import { AuthEntity } from 'src/entities/auth.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('user-data')
export class UserDataController {

    constructor(private userDataService: UserDataService) { }
    @UseGuards(AuthGuard())
    @Post('/upload-user-collection')
    @UseInterceptors(FilesInterceptor('files[]'))
    async uploadUserCollection(@UploadedFiles() files, @GetUser() user: AuthEntity) {
        try {
            const resultOfUpload = await this.userDataService.uploadUserImages(files, user);
            return { message: resultOfUpload, success: true };
        } catch (error) {
            return { message: error, success: false };
        }
    }

    @Put('/update-user-data')
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'profileImage', maxCount: 1 },
        { name: 'miniImage', maxCount: 1 },
    ]))
    async updateUserData(@Body() userData: RegisterDto, @UploadedFiles() files) {
        try {
            const updateOfUserData = await this.userDataService.updateUserData(userData, files);
            return { message: updateOfUserData, success: true };
        } catch (error) {
            return { message: error, success: false };
        }
    }

    @UseGuards(AuthGuard())
    @Get('/get-user-images')
    async get(@GetUser() user: AuthEntity) {
        try {
            const resultOfImages = await this.userDataService.getImagesForUser(user);
            return { message: resultOfImages, success: true };
        } catch (error) {
            return { message: error, success: false };
        }
    }
}
