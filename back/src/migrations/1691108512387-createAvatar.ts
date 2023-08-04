import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAvatar1691108512387 implements MigrationInterface {
    name = 'CreateAvatar1691108512387'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "client" ("id" SERIAL NOT NULL, "full_name" character varying NOT NULL, "email" character varying NOT NULL, "phone_number" character varying NOT NULL, "avatar" character varying NOT NULL DEFAULT 'https://cdn-icons-png.flaticon.com/512/3106/3106921.png', "password" character varying NOT NULL, "registration_date" TIMESTAMP NOT NULL, CONSTRAINT "UQ_6436cc6b79593760b9ef921ef12" UNIQUE ("email"), CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contact" ("id" SERIAL NOT NULL, "full_name" character varying NOT NULL, "email" character varying NOT NULL, "phone_number" character varying NOT NULL, "avatar" character varying NOT NULL DEFAULT 'https://cdn-icons-png.flaticon.com/512/3106/3106921.png', "registration_date" TIMESTAMP NOT NULL, "clientId" integer, CONSTRAINT "UQ_eff09bb429f175523787f46003b" UNIQUE ("email"), CONSTRAINT "PK_2cbbe00f59ab6b3bb5b8d19f989" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "FK_e99f8e5bcbccaec7b0b7ed65526" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "FK_e99f8e5bcbccaec7b0b7ed65526"`);
        await queryRunner.query(`DROP TABLE "contact"`);
        await queryRunner.query(`DROP TABLE "client"`);
    }

}
