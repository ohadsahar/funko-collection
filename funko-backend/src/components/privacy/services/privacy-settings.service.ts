import { Injectable } from '@nestjs/common';
import { PrivacySettingDto } from '../dto/privacy-setting.dto';

@Injectable()
export class PrivacySettingsService {

    async updatePrivacy(privacySettingDto: PrivacySettingDto) {
        return privacySettingDto;
    }
}
