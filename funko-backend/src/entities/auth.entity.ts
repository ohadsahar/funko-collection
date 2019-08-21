import { Entity, Unique, PrimaryGeneratedColumn, CreateDateColumn, Column } from 'typeorm';

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
    favoritePop: string;
}
