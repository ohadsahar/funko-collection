import { CreateDateColumn, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { AuthEntity } from './auth.entity';

@Entity()
export class PostEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn()
    date: Date;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    yearOfStartCollection: string;

    @Column()
    miniImage: string;

    @Column()
    email: string;

    @Column()
    textPost: string;

    @Column()
    userId: string;

    @ManyToOne(type => AuthEntity, user => user.posts, { eager: false })
    user: AuthEntity;

}