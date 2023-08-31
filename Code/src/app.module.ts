import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import ormconfig from './database/ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { JwtStrategy } from './auth/jwt.strategy';
import { AuthService } from './auth/auth.service';
import { Customer } from './models/customer.entity';
import { Item } from './models/item.entity';
import { Price } from './models/price.entity';
import { Order } from './models/order.entity';
import { OrderDetail } from './models/orderDetail.enity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(ormconfig),
    TypeOrmModule.forFeature([Customer, Item, Price, Order, OrderDetail]),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AuthService, AppService, JwtStrategy],
})
export class AppModule {}
