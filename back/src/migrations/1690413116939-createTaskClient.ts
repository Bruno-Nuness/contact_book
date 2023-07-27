import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTaskClient1690413116939 implements MigrationInterface {
    name = 'CreateTaskClient1690413116939'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" ADD "phone" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "full_name"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "full_name" character varying(80) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "full_name"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "full_name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "phone"`);
    }

}
