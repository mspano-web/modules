import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TablaC {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fieldA: string;

  @Column()
  fieldB: string;
}
