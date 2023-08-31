import { IsNotEmpty } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Item } from './item.entity';
import { Order } from './order.entity';

@Entity()
export class OrderDetail {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @IsNotEmpty()
  @Column('int')
  quantity: number;

  @ManyToOne(() => Item, (item) => item.id)
  item: Item;

  @ManyToOne(() => Order, (order) => order.id)
  order: Order[];
}
