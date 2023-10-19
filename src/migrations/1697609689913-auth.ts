import { MigrationInterface, QueryRunner } from "typeorm";

export class Auth1697609689913 implements MigrationInterface {
    name = 'Auth1697609689913'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`auth_confirmation\` (\`id\` int NOT NULL AUTO_INCREMENT, \`url_confirmation\` varchar(255) NOT NULL, \`jwt\` varchar(255) NOT NULL, \`user_id\` int NOT NULL, \`verified\` tinyint NOT NULL DEFAULT 0, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_522a1399ac8e13c36de042332a\` (\`jwt\`), UNIQUE INDEX \`IDX_9f52bcb6ddcf74eb77d1ffa7c2\` (\`user_id\`), UNIQUE INDEX \`REL_9f52bcb6ddcf74eb77d1ffa7c2\` (\`user_id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`auth_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD UNIQUE INDEX \`IDX_56d00ec31dc3eed1c3f6bff4f5\` (\`auth_id\`)`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`created_at\` \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP()`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`updated_at\` \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_56d00ec31dc3eed1c3f6bff4f5\` ON \`user\` (\`auth_id\`)`);
        await queryRunner.query(`ALTER TABLE \`auth_confirmation\` ADD CONSTRAINT \`FK_9f52bcb6ddcf74eb77d1ffa7c2e\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD CONSTRAINT \`FK_56d00ec31dc3eed1c3f6bff4f58\` FOREIGN KEY (\`auth_id\`) REFERENCES \`auth_confirmation\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_56d00ec31dc3eed1c3f6bff4f58\``);
        await queryRunner.query(`ALTER TABLE \`auth_confirmation\` DROP FOREIGN KEY \`FK_9f52bcb6ddcf74eb77d1ffa7c2e\``);
        await queryRunner.query(`DROP INDEX \`REL_56d00ec31dc3eed1c3f6bff4f5\` ON \`user\``);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`updated_at\` \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`created_at\` \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP INDEX \`IDX_56d00ec31dc3eed1c3f6bff4f5\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`auth_id\``);
        await queryRunner.query(`DROP INDEX \`REL_9f52bcb6ddcf74eb77d1ffa7c2\` ON \`auth_confirmation\``);
        await queryRunner.query(`DROP INDEX \`IDX_9f52bcb6ddcf74eb77d1ffa7c2\` ON \`auth_confirmation\``);
        await queryRunner.query(`DROP INDEX \`IDX_522a1399ac8e13c36de042332a\` ON \`auth_confirmation\``);
        await queryRunner.query(`DROP TABLE \`auth_confirmation\``);
    }

}
