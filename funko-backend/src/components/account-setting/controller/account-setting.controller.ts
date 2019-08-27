import { Controller, Post, Body } from '@nestjs/common';

@Controller('account-setting')
export class AccountSettingController {

    @Post('/recover-password')
    async recoverPassword(@Body() email: string) {
        try {
            console.log(email);
            const resultOfRecover = await this.recoverPassword(email);
            return { message: resultOfRecover, success: true };
        } catch (error) {
            return { message: error, success: false };
        }
    }
}
