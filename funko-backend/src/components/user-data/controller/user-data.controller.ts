import { Controller, Put, Body } from '@nestjs/common';
import { RegisterDto } from 'src/components/auth/dto/register.dto';
import { UserDataService } from '../service/user-data.service';

@Controller('user-data')
export class UserDataController {
    constructor(private userDataService: UserDataService) { }
    @Put('/update-user-data')
    async updateUserData(@Body() userData: RegisterDto) {
        try {
            const createOfUserData = await this.userDataService.updateUserData(userData);
            return { message: createOfUserData, success: true };
        } catch (error) {
            return { message: error, success: false };
        }
    }
}
