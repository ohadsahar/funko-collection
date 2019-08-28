import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthEntity } from '../../../entities/auth.entity';
import * as emailUtil from '../../../utils/email.util';
import * as bcrypt from 'bcryptjs';
import * as authUtil from '../../../utils/auth.util';

@Injectable()
export class AccountSettingService {
    constructor(@InjectRepository(AuthEntity)
    private accountSettingRepository: Repository<AuthEntity>) { }
    async recoverLostAccountPassword(email: string) {
        const result = await this.accountSettingRepository.findOne({ email });
        if (result) {
            const id = result.id;
            await this.accountSettingRepository.update({ id }, { password: result.id });
            const updatedData = await this.accountSettingRepository.findOne({ id });
            const mailData = emailUtil.createObjectForMail(updatedData);
            const mailResult = await emailUtil.sendMail(mailData);
            if (mailResult) {
                return 'המייל נשלח בהצלחה';
            }
        }
        return 'משתמש לא קיים';
    }
    async changeAccountPassword(password: string, user: AuthEntity) {
        const id = user.id;
        const salt = await bcrypt.genSalt();
        const newPassword = await authUtil.hashPassword(password, salt);
        await this.accountSettingRepository.update({ id }, { password: newPassword, salt });
        return 'הסיסמא שונתה בהצלחה';
    }
    async freezeAccount(user: AuthEntity) {
        const id = user.id;
        await this.accountSettingRepository.update({ id }, { freeze: true });
        return await this.accountSettingRepository.findOne({ id });
    }
    async unFreezeUserAccount(user: AuthEntity) {
        console.log(user);
        const id = user.id;
        await this.accountSettingRepository.update({ id }, { freeze: false });
        return await this.accountSettingRepository.findOne({ id });
    }
}
