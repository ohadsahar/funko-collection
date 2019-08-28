import { AuthEntity } from 'src/entities/auth.entity';
import { AccountSettingService } from './../service/account-setting.service';
import { Controller, Post, Body } from '@nestjs/common';
import { RecoverPasswordDto } from '../dto/recover-password.dto';
import { GetUser } from 'src/components/auth/get-user.decorator';

@Controller('account-setting')
export class AccountSettingController {

    constructor(private accountSettingService: AccountSettingService) { }
    @Post('/recover-password')
    async recoverPassword(@Body() userData: RecoverPasswordDto) {
        try {
            const resultOfRecover = await this.accountSettingService.recoverLostAccountPassword(userData.email);
            return { message: resultOfRecover, success: true };
        } catch (error) {
            return { message: error, success: false };
        }
    }
    @Post('/change-password')
    async changePassword(@Body() password: string, @GetUser() user: AuthEntity) {
        try {
            const resultUpdatePassword = await this.accountSettingService.changeAccountPassword(password, user);
            return { message: resultUpdatePassword, success: true };
        } catch (error) {
            return { message: error, success: false };
        }
    }
}
