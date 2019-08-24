import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './components/auth/module/auth.module';
import { TypeOrmConfig } from './config/typeorm-config';
import { PrivacySettingsModule } from './components/privacy/module/privacy-settings.module';
import { UserDataModule } from './components/user-data/module/user-data.module';

@Module({
  imports: [PrivacySettingsModule, AuthModule, UserDataModule, TypeOrmModule.forRoot(TypeOrmConfig), UserDataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
