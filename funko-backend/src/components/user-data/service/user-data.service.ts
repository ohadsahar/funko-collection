import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthEntity } from '../../../entities/auth.entity';
import { Repository } from 'typeorm';
import { RegisterDto } from '../../auth/dto/register.dto';

@Injectable()
export class UserDataService {
    constructor(@InjectRepository(AuthEntity)
    private userDataRepository: Repository<AuthEntity>) { }

    async updateUserData(userData: RegisterDto) {
        const id = userData.id;
        await this.userDataRepository.update({ id }, userData);
        return await this.userDataRepository.findOne({ id });
    }
}
