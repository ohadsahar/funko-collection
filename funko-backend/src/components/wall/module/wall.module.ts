import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from '../../../entities/post.entity';
import { AuthModule } from '../../auth/module/auth.module';
import { WallService } from '../service/wall.service';
import { WallController } from '../controller/wall.controller';


@Module({
    imports: [TypeOrmModule.forFeature([PostEntity]), AuthModule],
    controllers: [WallController],
    providers: [WallService],
})
export class WallModule { }
