import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('quiz')
export class Quiz extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

}
