import { ConflictException, Injectable, InternalServerErrorException, UploadedFiles } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as authUtil from '../../../utils/auth.util';
import { AuthEntity } from './../../../entities/auth.entity';
import { LoginDto } from './../dto/login.dto';
import { RegisterDto } from './../dto/register.dto';

@Injectable()
export class AuthService {
    constructor(@InjectRepository(AuthEntity)
    private authRepository: Repository<AuthEntity>,
                private jwtService: JwtService) { }

    async register(registerData: RegisterDto, @UploadedFiles() files) {
        try {
            let user = new AuthEntity();
            user = await authUtil.createRegisterObject(user, registerData, files);
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
            return await authUtil.validateLogin(loginData, finduser, this.jwtService);
        } catch (error) {
            throw new Error('User not found');
        }
    }
}
