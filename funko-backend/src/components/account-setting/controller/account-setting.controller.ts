import { AccountSettingService } from './../service/account-setting.service';
import { Controller, Post, Body } from '@nestjs/common';
import { RecoverPasswordDto } from '../dto/recover-password.dto';

@Controller('account-setting')
export class AccountSettingController {

    constructor(private accountSettingService: AccountSettingService) {}
    @Post('/recover-password')
    async recoverPassword(@Body() userData: RecoverPasswordDto) {
        try {
            const resultOfRecover = await this.accountSettingService.recoverLostAccountPassword(userData.email);
            return { message: resultOfRecover, success: true };
        } catch (error) {
            return { message: error, success: false };
        }
    }
}
