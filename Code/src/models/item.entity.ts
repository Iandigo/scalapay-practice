import { IsNotEmpty } from 'class-validator';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Price } from './price.entity';

@Entity()
export class Item {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    nullable: true,
  })
  gtin: string;

  @IsNotEmpty()
  @Column({
    nullable: false,
  })
  name: string;

  @IsNotEmpty()
  @Column({
    nullable: false,
  })
  category: string;

  @IsNotEmpty()
  @Column({
    nullable: false,
  })
  sku: string;

  @Column({
    nullable: true,
  })
  brand: string;

  @OneToOne(() => Price, (price) => price.id)
  @JoinColumn()
  price: Price;
}
