// user.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Owner } from './owner.entity';
import { Neighbour } from './neighbour.entity';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 100 })
    name!: string;

    @Column({ nullable: true })
    phone_number!: string;

    @Column({ nullable: true })
    email!: string;

    @Column({ default: false })
    is_admin!: boolean;

    // Relaciones con subtipos
    @OneToOne(() => Owner, (owner) => owner.user)
    owner: Owner;

    @OneToOne(() => Neighbour, (neighbour) => neighbour.user)
    neighbour: Neighbour;
}
