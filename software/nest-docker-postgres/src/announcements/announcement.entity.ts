import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('announcements')
export class Announcement {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  title?: string;

  @Column()
  content?: string;

  @Column()
  date?: string;
}
