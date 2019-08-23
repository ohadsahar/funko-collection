import { Controller, Put, Body } from '@nestjs/common';
import { PrivacySettingDto } from '../dto/privacy-setting.dto';
import { PrivacySettingsService } from '../services/privacy-settings.service';

@Controller('privacy-settings')
export class PrivacySettingsController {

    constructor(private privacySettings: PrivacySettingsService) { }
    @Put('/user-privacy-setting')
    async updatePrivacySettings(@Body() privacySettingDto: PrivacySettingDto) {
        try {
            const resultOfUpdate = await this.privacySettings.updatePrivacy(privacySettingDto);
            return { message: resultOfUpdate, success: true };
        } catch (error) {
            return { message: error, success: false };
        }

    }
}
