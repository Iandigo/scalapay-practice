import { IsOptional } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Shipping } from './shipping.entity';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @IsOptional()
  @Column({
    nullable: true,
  })
  phoneNumber: string;

  @IsOptional()
  @Column({
    nullable: true,
  })
  givenName: string;

  @IsOptional()
  @Column({
    nullable: true,
  })
  surname: string;

  @Column({
    nullable: false,
  })
  email: string;

  @OneToMany(() => Shipping, (shipping) => shipping.customer)
  shippings: Shipping[];
}
