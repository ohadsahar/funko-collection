import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from '../../../entities/post.entity';
import { Repository } from 'typeorm';
import { PostDto } from '../dto/post.dto';
import { AuthEntity } from '../../../entities/auth.entity';

@Injectable()
export class WallService {
    constructor(@InjectRepository(PostEntity)
    private postRepository: Repository<PostEntity>) { }

    async createPostDb(postData: PostDto, user: AuthEntity) {
        const postEntity = new PostEntity();
        postEntity.user = user;
        postEntity.firstname = postData.firstname;
        postEntity.lastname = postData.lastname;
        postEntity.miniImage = postData.miniImage;
        postEntity.email = postData.email;
        postEntity.textPost = postData.textPost;
        postEntity.yearOfStartCollection = postData.yearOfStartCollection;
        await this.postRepository.save(postEntity);
        return postEntity;
    }

    async getAllPosts(user: AuthEntity) {
        const id = user.id;
        const query = this.postRepository.createQueryBuilder('post');
        query.where('post.userId = :userId', {userId: user.id});
        const allPosts = await query.getMany();
        return allPosts;
    }
}
