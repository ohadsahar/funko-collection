import { PrivacySettingEntity } from 'src/entities/privacy-setting.entity';
import { PrivacySettingDto } from '../components/privacy/dto/privacy-setting.dto';
import { AuthEntity } from '../entities/auth.entity';

export function createPrivacyObject(userSettings: PrivacySettingEntity, privacySettingDto: PrivacySettingDto, user: AuthEntity) {
    userSettings.showCollection = privacySettingDto.showCollection;
    userSettings.showPersonalData = privacySettingDto.showPersonalData;
    userSettings.canSendMessage = privacySettingDto.canSendMessage;
    userSettings.friendShowCollection = privacySettingDto.friendShowCollection;
    userSettings.friendShowPersonalData = privacySettingDto.friendShowPersonalData;
    userSettings.friendCanSendMessage = privacySettingDto.friendCanSendMessage;
    userSettings.userId = user.id;
    return userSettings;
}
