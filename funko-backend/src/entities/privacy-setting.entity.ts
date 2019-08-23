import { Entity, PrimaryGeneratedColumn, CreateDateColumn, Column } from "typeorm";

export class PrivacySettingEntity {
    @Entity()
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn()
    created: Date;

    @Column()
    showCollection: boolean;
    @Column()
    showPersonalData: boolean;
    @Column()
    canSendMessage: boolean;
    @Column()
    friendShowCollection: boolean;
    @Column()
    friendShowPersonalData: boolean;
    @Column()
    friendCanSendMessage: boolean;
}
