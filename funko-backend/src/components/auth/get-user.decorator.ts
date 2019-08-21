import { AuthEntity } from './../../entities/auth.entity';
import { createParamDecorator } from "@nestjs/common";

export const GetUser = createParamDecorator((data, req): AuthEntity => {
    return req.user;
});
