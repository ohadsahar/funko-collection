import { IsEmail, IsString, IsNotEmpty, MinLength, MaxLength, IsNumber, IsBoolean } from "class-validator";

export class RegisterDto {
    public id: string;

    @IsEmail()
    @IsString()
    @IsNotEmpty()
    public email: string;

    @IsString()
    @IsNotEmpty()
    public firstname: string;

    @IsString()
    @IsNotEmpty()
    public lastname: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(8)
    public password: string;

    @IsNotEmpty()
    public age: number;

    @IsString()
    @IsNotEmpty()
    public favoritePop: string;

    @IsNotEmpty()
    public numberOfPops: number;

    @IsNotEmpty()
    @IsString()
    public yearOfStartCollection: string;

    @IsNotEmpty()
    @IsString()
    public profileImage: string;

    @IsNotEmpty()
    @IsString()
    public miniImage: string;
}
