import * as bcrypt from 'bcryptjs';
import { RegisterDto } from '../components/auth/dto/register.dto';
import { AuthEntity } from '../entities/auth.entity';

export async function hashPassword(password: string, salt: string) {
    return bcrypt.hash(password, salt);
}
export async function validatePassword(password: string, salt: string, hashedPassword: string) {
    const hash = await bcrypt.hash(password, salt);
    return hash === hashedPassword;
}
export async function createRegisterObject(user: AuthEntity, registerData: RegisterDto) {
    const salt = await bcrypt.genSalt();
    user.email = registerData.email;
    user.firstname = registerData.firstname;
    user.lastname = registerData.lastname;
    user.numberOfPops = registerData.numberOfPops;
    user.age = registerData.age;
    user.favoritePop = registerData.favoritePop;
    user.yearOfStartCollection = registerData.yearOfStartCollection;
    user.salt = salt;
    user.profileImage = registerData.profileImage;
    user.miniImage = registerData.miniImage;
    return user;
}
