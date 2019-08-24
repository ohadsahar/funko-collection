import { AuthEntity } from 'src/entities/auth.entity';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, Unique, ManyToMany } from 'typeorm';

@Entity()
@Unique(['userId'])
export class PrivacySettingEntity {
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

    @Column()
    userId: string;
}
