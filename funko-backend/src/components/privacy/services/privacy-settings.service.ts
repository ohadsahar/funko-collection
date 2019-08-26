import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthEntity } from 'src/entities/auth.entity';
import { PrivacySettingEntity } from 'src/entities/privacy-setting.entity';
import { Repository } from 'typeorm';
import { PrivacySettingDto } from '../dto/privacy-setting.dto';
import * as privacySettingUtil from '../../../utils/privacy-setting.util';

@Injectable()
export class PrivacySettingsService {
    constructor(@InjectRepository(PrivacySettingEntity)
    private privacyRepository: Repository<PrivacySettingEntity>) { }

    async getAllPrivacySettings(user: AuthEntity) {
        const query = this.privacyRepository.createQueryBuilder('privacy-settings');
        query.where('privacy-settings.userId = :userId', { userId: user.id });
        const privacySettings = await query.getOne();
        return privacySettings;
    }
    async updatePrivacy(id: string, privacySettingDto: PrivacySettingDto) {
        await this.privacyRepository.update({ id }, privacySettingDto);
        return await this.privacyRepository.findOne({ id });
    }
    async createPrivacy(privacySettingDto: PrivacySettingDto, user: AuthEntity) {
        const userSettings = new PrivacySettingEntity();
        const result = privacySettingUtil.createPrivacyObject(userSettings, privacySettingDto, user);
        await this.privacyRepository.save(result);
        return userSettings;
    }
}
