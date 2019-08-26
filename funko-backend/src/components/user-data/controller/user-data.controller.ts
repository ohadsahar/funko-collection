import { Controller, Put, Body, UseInterceptors, UploadedFile, UploadedFiles } from '@nestjs/common';
import { RegisterDto } from 'src/components/auth/dto/register.dto';
import { UserDataService } from '../service/user-data.service';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('user-data')
export class UserDataController {
    constructor(private userDataService: UserDataService) { }
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
}
