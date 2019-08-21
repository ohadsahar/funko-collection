import { AuthEntity } from './../../entities/auth.entity';
import { JwtPayload } from './interface/jwt-payload.interface';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as config from 'config';
const jwtConfig = config.get('jwt');

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(@InjectRepository(AuthEntity)
    private authRepository: Repository<AuthEntity>) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'secretTop51',
        });
    }

    async validate(payload: JwtPayload) {
        const { email } = payload;
        const user = await this.authRepository.findOne({ email });
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}
