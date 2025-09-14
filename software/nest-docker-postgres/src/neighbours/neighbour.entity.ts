// neighbour.entity.ts
import { Entity, PrimaryColumn, OneToOne, JoinColumn, Column } from 'typeorm';
import { User } from '../users/user.entity';

@Entity('neighbours')
export class Neighbour {
    @PrimaryColumn()
    id!: number;

    @Column()
    apartment_id!: number;

    @OneToOne(() => User, (user) => user.neighbour, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id' })
    user!: User;
}
