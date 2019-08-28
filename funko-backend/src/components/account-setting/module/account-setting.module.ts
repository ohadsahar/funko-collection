import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthEntity } from 'src/entities/auth.entity';
import { AuthModule } from '../../auth/module/auth.module';
import { AccountSettingController } from '../controller/account-setting.controller';
import { AccountSettingService } from '../service/account-setting.service';

@Module({
    imports: [TypeOrmModule.forFeature([AuthEntity]), AuthModule],
    controllers: [AccountSettingController],
    providers: [AccountSettingService],
})
export class AccountSettingModule { }
