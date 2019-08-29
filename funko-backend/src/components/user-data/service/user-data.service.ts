import { Injectable, UploadedFiles } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthEntity } from '../../../entities/auth.entity';
import * as authUtil from '../../../utils/auth.util';
import { RegisterDto } from '../../auth/dto/register.dto';

@Injectable()
export class UserDataService {
    constructor(@InjectRepository(AuthEntity)
    private userDataRepository: Repository<AuthEntity>) { }

    async updateUserData(userData: RegisterDto, @UploadedFiles() files) {
        const id = userData.id;
        userData = await authUtil.updateAccountData(userData, files);
        await this.userDataRepository.update({ id }, {
            email: userData.email, password: userData.password, firstname: userData.firstname,
            age: Number(userData.age), favoritePop: userData.favoritePop, numberOfPops: Number(userData.numberOfPops),
            yearOfStartCollection: userData.yearOfStartCollection, profileImage: userData.profileImage,
            miniImage: userData.miniImage,
        });
        return await this.userDataRepository.findOne({ id });
    }
}
