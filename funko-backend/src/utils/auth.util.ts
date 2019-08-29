import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { LoginDto } from '../components/auth/dto/login.dto';
import { RegisterDto } from '../components/auth/dto/register.dto';
import { JwtPayload } from '../components/auth/interface/jwt-payload.interface';
import { AuthEntity } from '../entities/auth.entity';

export async function hashPassword(password: string, salt: string) {
    return bcrypt.hash(password, salt);
}
export async function validatePassword(password: string, salt: string, hashedPassword: string) {
    const hash = await bcrypt.hash(password, salt);
    return hash === hashedPassword;
}
export async function createRegisterObject(user: AuthEntity, registerData: RegisterDto, files) {
    const salt = await bcrypt.genSalt();
    user.email = registerData.email;
    user.firstname = registerData.firstname;
    user.lastname = registerData.lastname;
    user.numberOfPops = registerData.numberOfPops;
    user.age = registerData.age;
    user.favoritePop = registerData.favoritePop;
    user.yearOfStartCollection = registerData.yearOfStartCollection;
    user.salt = salt;
    user.freeze = false;
    user.profileImage = `http://localhost:3000/auth/${files.image[0].filename}`;
    user.miniImage = `http://localhost:3000/auth/${files.miniImage[0].filename}`;
    user.password = await hashPassword(registerData.password, user.salt);
    return user;
}
export async function validateLogin(loginData: LoginDto, finduser: AuthEntity, jwtService: JwtService) {
    if (finduser) {
        const email = loginData.email;
        if (await validatePassword(loginData.password, finduser.salt, finduser.password)
            && finduser.freeze === true) {
            return 'חשבון זה הוקפא, על מנת לשחרר אותו גש לאפשרויות';
        }

        if ((finduser.password === finduser.id) || (await validatePassword(loginData.password, finduser.salt, finduser.password))) {
            const payload: JwtPayload = { email };
            const accessToken = await jwtService.sign(payload);
            return { accessToken };
        }
    }
    return 'שם משתמש או סיסמא לא נכונים';
}
export async function updateAccountData(userData: RegisterDto, files) {
    if (files.profileImage || files.miniImage) {
        if (files.profileImage) {
            const profileImage = `http://localhost:3000/auth/${files.profileImage[0].filename}`;
            userData.profileImage = profileImage;
        }
        if (files.miniImage) {
            const miniProfileImage = `http://localhost:3000/auth/${files.miniImage[0].filename}`;
            userData.miniImage = miniProfileImage;
        }
    }
    return userData;
}
