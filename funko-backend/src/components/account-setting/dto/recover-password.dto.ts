import { IsString, IsNotEmpty, IsEmail } from 'class-validator';
export class RecoverPasswordDto {
    @IsEmail()
    email: string;
}
