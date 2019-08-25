import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as authUtil from '../../../utils/auth.util';
import { AuthEntity } from './../../../entities/auth.entity';
import { LoginDto } from './../dto/login.dto';
import { RegisterDto } from './../dto/register.dto';
import { JwtPayload } from './../interface/jwt-payload.interface';

@Injectable()
export class AuthService {
    constructor(@InjectRepository(AuthEntity)
    private authRepository: Repository<AuthEntity>,
        private jwtService: JwtService) { }

    async register(registerData: RegisterDto) {
        try {
            let user = new AuthEntity();
            user = await authUtil.createRegisterObject(user, registerData);
            user.password = await authUtil.hashPassword(registerData.password, user.salt);
            return await this.authRepository.save(user);
        } catch (error) {
            if (error.code === '23505') {
                throw new ConflictException('User already exists');
            }
            throw new InternalServerErrorException();
        }
    }
    async login(loginData: LoginDto) {
        try {
            const email = loginData.email;
            const finduser = await this.authRepository.findOne({ email });
            if (finduser) {
                if (finduser && await authUtil.validatePassword(loginData.password, finduser.salt, finduser.password)) {
                    const payload: JwtPayload = { email };
                    const accessToken = await this.jwtService.sign(payload);
                    return { accessToken };
                }
            }
        } catch (error) {
            throw new Error('User not found');
        }
    }
}
