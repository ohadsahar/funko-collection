import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique, ManyToMany, OneToMany } from 'typeorm';
import { ImagesUserEntity } from './user-images.entity';

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

    @Column()
    profileImage: string;

    @Column()
    miniImage: string;

    @Column()
    freeze: boolean;

    @OneToMany(type => ImagesUserEntity, userImages => userImages.user , { eager: true })
    images: ImagesUserEntity[];
}
