import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'session' }) // entity name is the name of the table
export class SessionEntity {
  @PrimaryGeneratedColumn()
  session_id: string;

  @Column()
  lectureHours: number;

  @Column()
  labHours: number;

  @Column()
  supplementalHours: number;

  @Column()
  canvasHours: number;

  @Column()
  output: string;
}
