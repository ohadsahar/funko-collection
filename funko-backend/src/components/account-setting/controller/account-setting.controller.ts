import { Body, Controller, Post, Put, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/components/auth/get-user.decorator';
import { AuthEntity } from 'src/entities/auth.entity';
import { RecoverPasswordDto } from '../dto/recover-password.dto';
import { AccountSettingService } from './../service/account-setting.service';
import { ChangePasswordDto } from '../dto/update-password.dto';
import { AuthGuard } from '@nestjs/passport';

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
    @UseGuards(AuthGuard())
    @Put('/change-password')
    async changePassword(@Body() userPassword: ChangePasswordDto, @GetUser() user: AuthEntity) {
        try {
            const resultUpdatePassword = await this.accountSettingService.changeAccountPassword(userPassword.password, user);
            return { message: resultUpdatePassword, success: true };
        } catch (error) {
            return { message: error, success: false };
        }
    }

    @UseGuards(AuthGuard())
    @Put('/recover-account')
    async recoverAccount() {
        return 'HI';
    }
}
