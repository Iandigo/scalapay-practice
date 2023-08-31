import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from '../models/customer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  private logger: Logger = new Logger(AuthService.name);

  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  async checkAddCustomer(
    email: string,
    family_name: string,
    given_name: string,
  ): Promise<Customer> {
    const user = await this.customerRepository.findOneBy({ email });
    // TODO: Should migrate and use a more sophisticated verification logic
    if (user) {
      this.logger.debug(`${user.email} old customer`);
      return user;
    } else {
      const customer = new Customer();
      customer.email = email;
      customer.givenName = given_name;
      customer.surname = family_name;
      await this.customerRepository.save(customer);
      this.logger.debug(`${customer.email} new customer`);
      return customer;
    }
  }
}
