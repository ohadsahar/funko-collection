import { Controller, Put, Body, Post } from '@nestjs/common';
import { PrivacySettingDto } from '../dto/privacy-setting.dto';
import { PrivacySettingsService } from '../services/privacy-settings.service';

@Controller('privacy-settings')
export class PrivacySettingsController {

    constructor(private privacySettings: PrivacySettingsService) { }

    @Post('/create-privacy-settings')
    async createPrivacySettings(@Body() privacySettingDto: PrivacySettingDto) {
        try {
            const resultOfCreate = await this.privacySettings.createPrivacy(privacySettingDto);
            return { message: resultOfCreate, success: true };
        } catch (error) {
            return { message: error, success: false }
        }
    }
    @Put('/userSetting')
    async updatePrivacySettings(@Body() privacySettingDto: PrivacySettingDto) {
        try {
            const resultOfUpdate = await this.privacySettings.updatePrivacy(privacySettingDto);
            return { message: resultOfUpdate, success: true };
        } catch (error) {
            return { message: error, success: false };
        }

    }
}
