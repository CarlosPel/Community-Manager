// owner.entity.ts
import { Entity, PrimaryColumn, OneToOne, JoinColumn, Column } from 'typeorm';
import { User } from '../users/user.entity';

@Entity('owners')
export class Owner {
    @PrimaryColumn()
    id!: number; // mismo id que el User

    @Column()
    premises_id!: number;

    @OneToOne(() => User, (user) => user.owner, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id' }) // FK hacia Users.id
    user!: User;
}
