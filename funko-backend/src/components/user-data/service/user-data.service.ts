import { Injectable, UploadedFiles } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthEntity } from '../../../entities/auth.entity';
import { Repository } from 'typeorm';
import { RegisterDto } from '../../auth/dto/register.dto';

@Injectable()
export class UserDataService {
    constructor(@InjectRepository(AuthEntity)
    private userDataRepository: Repository<AuthEntity>) { }

    async updateUserData(userData: RegisterDto, @UploadedFiles() files) {
        const id = userData.id;
        userData.age = Number(userData.age);
        userData.numberOfPops = Number(userData.numberOfPops);
        if (files.profileImage || files.miniImage) {
            if (files.profileImage) {
                const profileImage = `http://localhost:3000/auth/${files.profileImage[0].filename}`;
                userData.profileImage = profileImage;
            }
            if (files.miniImage) {
                const miniProfileImage = `http://localhost:3000/auth/${files.miniImage[0].filename}`;
                userData.miniImage = miniProfileImage;
            }
        }
        await this.userDataRepository.update({ id }, {
            email: userData.email, password: userData.password, firstname: userData.firstname,
            age: userData.age, favoritePop: userData.favoritePop, numberOfPops: userData.numberOfPops,
            yearOfStartCollection: userData.yearOfStartCollection, profileImage: userData.profileImage,
            miniImage: userData.miniImage
        });
        return await this.userDataRepository.findOne({ id });
    }
}
