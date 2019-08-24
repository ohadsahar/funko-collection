import { Module } from '@nestjs/common';
import { UserDataController } from '../controller/user-data.controller';
import { UserDataService } from '../service/user-data.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthEntity } from '../../../entities/auth.entity';
import { AuthModule } from '../../auth/module/auth.module';

@Module({
    imports: [TypeOrmModule.forFeature([AuthEntity]), AuthModule],
    controllers: [UserDataController],
    providers: [UserDataService],
})
export class UserDataModule { }
