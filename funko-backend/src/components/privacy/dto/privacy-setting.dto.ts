import { IsBoolean } from "class-validator";

export class PrivacySettingDto {
    public id: string;

    @IsBoolean()
    public showCollection: boolean;
    @IsBoolean()
    public showPersonalData: boolean;
    @IsBoolean()
    public canSendMessage: boolean;
    @IsBoolean()
    public friendShowCollection: boolean;
    @IsBoolean()
    public friendShowPersonalData: boolean;
    @IsBoolean()
    public friendCanSendMessage: boolean;
}
