import { join } from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { PROD_ENV } from '../constants';

require('dotenv').config();

const config = {
  host: process.env.SQL_HOST || 'rosie.db.elephantsql.com',
  user: process.env.SQL_USER || 'wztnxqfc',
  port: parseInt(process.env.SQL_PORT || '5432'),
  password: process.env.SQL_PASSWORD || 'lXNnmXr_Vk5BMT0Ycpl1PrZSUML7PXQc',
  database: process.env.SQL_DATABASE || 'wztnxqfc',
};

const connectionOptions: TypeOrmModuleOptions = {
  type: 'postgres',
  host: config.host,
  port: config.port,
  schema: 'public',
  username: config.user,
  password: config.password,
  database: config.database,
  entities: [join(__dirname, '../models/*{.ts,.js}')],
  synchronize: false,
  // Run migrations automatically,
  // you can disable this if you prefer running migration manually.
  migrationsRun: false,
  logging: false,
  logger: 'advanced-console',
  migrations: [join(__dirname, '../migrations/*{.ts,.js}')],
  ssl:
    process.env.NODE_ENV === PROD_ENV
      ? { rejectUnauthorized: false }
      : undefined,
};

export default connectionOptions;
