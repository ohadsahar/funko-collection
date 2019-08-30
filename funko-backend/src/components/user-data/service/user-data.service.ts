import { Injectable, UploadedFiles } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthEntity } from '../../../entities/auth.entity';
import * as authUtil from '../../../utils/auth.util';
import { RegisterDto } from '../../auth/dto/register.dto';
import { ImagesUserEntity } from '../../../entities/user-images.entity';

@Injectable()
export class UserDataService {
    constructor(@InjectRepository(AuthEntity)
    private userDataRepository: Repository<AuthEntity>,
        @InjectRepository(ImagesUserEntity)
        private userImageRepository: Repository<ImagesUserEntity>) { }

    async updateUserData(userData: RegisterDto, @UploadedFiles() files) {
        const id = userData.id;
        userData = await authUtil.updateAccountData(userData, files);
        await this.userDataRepository.update({ id }, {
            email: userData.email, password: userData.password, firstname: userData.firstname,
            lastname: userData.lastname, age: Number(userData.age), favoritePop: userData.favoritePop,
            numberOfPops: Number(userData.numberOfPops), yearOfStartCollection: userData.yearOfStartCollection, profileImage: userData.profileImage,
            miniImage: userData.miniImage,
        });
        return await this.userDataRepository.findOne({ id });
    }

    async uploadUserImages(@UploadedFiles() files, user: AuthEntity) {
        const imageUsers = new ImagesUserEntity();
        imageUsers.user = user;
        const arrayImages = [];
        files.forEach((file) => {
            file = `http://localhost:3000/auth/${file.filename}`;
            arrayImages.push(file);
        });
        imageUsers.images = arrayImages;
        await this.userImageRepository.save(imageUsers);
        return 'done';
    }

    async getImagesForUser(user: AuthEntity) {
        const query = this.userImageRepository.createQueryBuilder('image');
        query.where('image.userId = :userId', { userId: user.id });
        const allUserImages = await query.getMany();
        return allUserImages.map(element => {
            return element.images;
        });
    }
}
