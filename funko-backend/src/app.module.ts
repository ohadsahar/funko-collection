import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountSettingModule } from './components/account-setting/module/account-setting.module';
import { AuthModule } from './components/auth/module/auth.module';
import { PrivacySettingsModule } from './components/privacy/module/privacy-settings.module';
import { UserDataModule } from './components/user-data/module/user-data.module';
import { TypeOrmConfig } from './config/typeorm-config';
import { WallController } from './wall/wall.controller';
import { WallModule } from './wall/wall.module';
import { WallService } from './wall/wall.service';

@Module({
  imports: [PrivacySettingsModule, AuthModule, UserDataModule, AccountSettingModule, UserDataModule, TypeOrmModule.forRoot(TypeOrmConfig), WallModule],
  controllers: [AppController, WallController],
  providers: [AppService, WallService],
})
export class AppModule { }
