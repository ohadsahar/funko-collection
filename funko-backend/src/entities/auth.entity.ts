import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, Unique, ManyToMany } from 'typeorm';
import { PrivacySettingEntity } from './privacy-setting.entity';
@Entity()
@Unique(['email'])
export class AuthEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn()
    created: Date;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    salt: string;

    @Column()
    age: number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    favoritePop: string;

    @Column()
    numberOfPops: number;

    @Column()
    yearOfStartCollection: string;
}
