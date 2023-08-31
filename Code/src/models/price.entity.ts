import { IsNotEmpty } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Price {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @IsNotEmpty()
  @Column()
  amount: string;

  @IsNotEmpty()
  @Column()
  currency: string;
}
