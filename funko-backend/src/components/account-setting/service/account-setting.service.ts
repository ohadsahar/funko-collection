import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcryptjs';
import { Repository } from 'typeorm';
import { AuthEntity } from '../../../entities/auth.entity';
import * as authUtil from '../../../utils/auth.util';
import * as emailUtil from '../../../utils/email.util';
import { LoginDto } from '../../auth/dto/login.dto';
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
    async unFreezeUserAccount(loginData: LoginDto) {
        const email = loginData.email;
        const finduser = await this.accountSettingRepository.findOne({ email });
        if (finduser) {
            if (finduser.password && await authUtil.validatePassword(loginData.password, finduser.salt, finduser.password)) {
                if (finduser.freeze === true) {
                    const id = finduser.id;
                    const resultOfUpdate = await this.accountSettingRepository.update({ id }, { freeze: false });
                    if (resultOfUpdate) {
                        return 'חשבונך שוחרר, אתה יכול להתחבר מחדש';
                    }
                } else {
                    return 'חשבונך אינו קפוא, אתה יכול להתחבר';
                }
            }
            return 'שם משתמש או סיסמא לא נכונים';
        }
    }
    async deleteAccount(user: AuthEntity) {
        const id = user.id;
        const deleteResult = this.accountSettingRepository.delete({id});
        if (deleteResult) {
            return 'משתמש נמחק בהצלחה';
        } else {
            return 'ישנה בעיה עם מחיקת המשתמש';
        }
    }
}
