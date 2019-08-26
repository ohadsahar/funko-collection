import { Module } from '@nestjs/common';
import { UserDataController } from '../controller/user-data.controller';
import { UserDataService } from '../service/user-data.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthEntity } from '../../../entities/auth.entity';
import { AuthModule } from '../../auth/module/auth.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
    imports: [TypeOrmModule.forFeature([AuthEntity]), AuthModule, MulterModule.register({ dest: './upload' })],
    controllers: [UserDataController],
    providers: [UserDataService],
})
export class UserDataModule { }
