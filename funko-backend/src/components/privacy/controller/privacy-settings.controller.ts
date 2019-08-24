import { Body, Controller, Post, Put, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/components/auth/get-user.decorator';
import { AuthEntity } from 'src/entities/auth.entity';
import { PrivacySettingDto } from '../dto/privacy-setting.dto';
import { PrivacySettingsService } from '../services/privacy-settings.service';

@Controller('privacy-settings')
@UseGuards(AuthGuard())
export class PrivacySettingsController {
    constructor(private privacySettings: PrivacySettingsService) { }

    @Post('/create-privacy-settings')
    async createPrivacySettings(@Body() privacySettingDto: PrivacySettingDto, @GetUser() user: AuthEntity) {
        try {
            const resultOfCreate = await this.privacySettings.createPrivacy(privacySettingDto, user);
            return { message: resultOfCreate, success: true };
        } catch (error) {
            return { message: error, success: false };
        }
    }

    @Get('/get-privacy-settings')
    async getPrivacySettings(@GetUser() user: AuthEntity) {
        try {
            const resultOfGetPrivacySettings = await this.privacySettings.getAllPrivacySettings(user);
            return { message: resultOfGetPrivacySettings, success: true };
        } catch (error) {
            return { message: error, success: false };
        }
    }
    @Put('/update-privacy-settings')
    async updatePrivacySettings(@Body() privacySettingDto: PrivacySettingDto) {
        try {
            const resultOfUpdate = await this.privacySettings.updatePrivacy(privacySettingDto.id, privacySettingDto);
            return { message: resultOfUpdate, success: true };
        } catch (error) {
            return { message: error, success: false };
        }
    }
}
