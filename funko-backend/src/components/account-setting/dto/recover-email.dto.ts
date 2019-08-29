import { IsString, IsEmail, IsNotEmpty } from 'class-validator'
export class RecoverMailDto {

    @IsEmail()
    public email: string;

    @IsString()
    @IsNotEmpty()
    public password: string;

    @IsString()
    @IsNotEmpty()
    public firstname: string;

    @IsString()
    @IsNotEmpty()
    public lastname: string;
}
