import { IsNotEmpty } from 'class-validator';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Shipping } from './shipping.entity';
import { OrderDetail } from './orderDetail.enity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @IsNotEmpty()
  @Column()
  currency: string;

  @OneToOne(() => Shipping)
  @JoinColumn()
  shipping: Shipping;

  @OneToMany(() => OrderDetail, (orderDetail) => orderDetail.order)
  orderDetails: OrderDetail[];
}
