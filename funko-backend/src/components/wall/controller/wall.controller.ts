import { Controller, Post, UseGuards, Body, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PostDto } from '../dto/post.dto';
import { WallService } from '../service/wall.service';
import { GetUser } from 'src/components/auth/get-user.decorator';
import { AuthEntity } from '../../../entities/auth.entity';

@Controller('wall')
export class WallController {

    constructor(private wallService: WallService) { }
    @Post('create-post')
    @UseGuards(AuthGuard())
    async createPost(@Body() postData: PostDto, @GetUser() user: AuthEntity) {
        try {
            console.log(postData);
            const resultOfCreatePost = await this.wallService.createPostDb(postData, user);
            return { message: resultOfCreatePost, success: true };
        } catch (error) {
            return { message: error, success: false };
        }
    }

    @Get('get-posts')
    @UseGuards(AuthGuard())
    async getPosts(@GetUser() user: AuthEntity) {
        try {
            const resultOfPosts = await this.wallService.getAllPosts(user);
            return { message: resultOfPosts, success: true };
        } catch (error) {
            return { message: error, success: false };
        }
    }
}
