import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

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
}
