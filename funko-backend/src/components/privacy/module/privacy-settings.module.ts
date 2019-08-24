import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrivacySettingEntity } from '../../../entities/privacy-setting.entity';
import { AuthModule } from '../../auth/module/auth.module';
import { PrivacySettingsController } from '../controller/privacy-settings.controller';
import { PrivacySettingsService } from '../services/privacy-settings.service';

@Module({
    imports: [TypeOrmModule.forFeature([PrivacySettingEntity]), AuthModule],
    controllers: [PrivacySettingsController],
    providers: [PrivacySettingsService],
})
export class PrivacySettingsModule { }
