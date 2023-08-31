import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { PermissionsGuard, RolesGuard } from './guards';
import { AuthService } from './auth.service';
import { Customer } from '../models/customer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [
    // AuthService,
    JwtStrategy,
    // EmailService,
    RolesGuard,
    PermissionsGuard,
    AuthService,
  ],
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    // EmailModule,
    TypeOrmModule.forFeature([Customer]),
  ],
  exports: [
    PassportModule,
    // AuthService,
    RolesGuard,
    PermissionsGuard,
  ],
})
export class AuthModule {}
