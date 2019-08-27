import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthEntity } from '../../../entities/auth.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AccountSettingService {
    constructor(@InjectRepository(AuthEntity)
    private accountSettingRepository: Repository<AuthEntity>) { }
    async recoverPassword(email: string) {
        await this.accountSettingRepository.findOne({ email });
    }
}
