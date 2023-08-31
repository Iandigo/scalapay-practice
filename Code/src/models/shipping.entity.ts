import { IsNotEmpty } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Customer } from './customer.entity';

@Entity()
export class Shipping {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    nullable: true,
  })
  phoneNumber: string;

  @IsNotEmpty()
  @Column()
  countryCode: string;

  @IsNotEmpty()
  @Column()
  name: string;

  @IsNotEmpty()
  @Column()
  postcode: string;

  @IsNotEmpty()
  @Column()
  line1: string;

  @Column({
    nullable: true,
  })
  suburb: string;

  @ManyToOne(() => Customer, (customer) => customer.shippings)
  customer: Customer;
}
