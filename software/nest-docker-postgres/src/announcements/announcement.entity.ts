import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('announcement')
export class Announcement {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 200 })
  title!: string;

  @Column({ type: 'text' })
  content!: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date!: Date;
}
