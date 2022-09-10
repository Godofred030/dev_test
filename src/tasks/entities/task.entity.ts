import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length:30})
  name: string;

  @Column({length:150})
  description: string;
  
  @Column({ default: false })
  completed: boolean;
}