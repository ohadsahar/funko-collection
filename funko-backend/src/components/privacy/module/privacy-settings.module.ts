import { Module } from '@nestjs/common';
import { PrivacySettingsController } from '../controller/privacy-settings.controller';
import { PrivacySettingsService } from '../services/privacy-settings.service';

@Module({
    controllers: [PrivacySettingsController],
    providers: [PrivacySettingsService],
})
export class PrivacySettingsModule {}
