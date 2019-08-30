import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique, OneToMany, ManyToOne } from 'typeorm';
import { AuthEntity } from './auth.entity';

@Entity()
export class ImagesUserEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn()
    created: Date;

    @Column('simple-array')
    images: string[];

    @Column()
    userId: string;

    @ManyToOne(type => AuthEntity, user => user.images, { eager: false })
    user: AuthEntity;
}
