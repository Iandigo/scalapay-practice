import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUserTable1614444784341 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE public.users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL
    );`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE user`);
  }
}
