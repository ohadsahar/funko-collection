import { Injectable, UploadedFiles } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginatorDto } from 'src/components/privacy/dto/paginator.dto';
import { Repository } from 'typeorm';
import { AuthEntity } from '../../../entities/auth.entity';
import { ImagesUserEntity } from '../../../entities/user-images.entity';
import * as authUtil from '../../../utils/auth.util';
import { RegisterDto } from '../../auth/dto/register.dto';

@Injectable()
export class UserDataService {

    public imagesAdded: string[] = [];
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
        files.forEach(async (file) => {
            await this.saveImage(file, user);
        });
        return this.imagesAdded;
    }
    async saveImage(file, user: AuthEntity) {
        const imageUsers = new ImagesUserEntity();
        imageUsers.user = user;
        file = `http://localhost:3000/auth/${file.filename}`;
        this.imagesAdded.push(file);
        imageUsers.images = file;
        await this.userImageRepository.save(imageUsers);
    }
    async getImagesForUser(user: AuthEntity, paginator: PaginatorDto) {
        const id = user.id;
        const counter = await this.userImageRepository.count({ userId: id });
        const query = this.userImageRepository.createQueryBuilder('image');
        query.where('image.userId = :userId', { userId: user.id }).limit(paginator.limit).skip(paginator.skip);
        const allUserImages = await query.getMany();
        const resultMappedImages = allUserImages.map(element => {
            return { images: element.images };
        });
        return { images: resultMappedImages, count: counter };
    }
}
