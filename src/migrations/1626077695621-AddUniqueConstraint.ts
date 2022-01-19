import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddUniqueConstraint1626077695621 implements MigrationInterface {
  name = 'AddUniqueConstraint1626077695621'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "rules" ADD CONSTRAINT "UQ_e93df807d2a1953f83b76b8e412" UNIQUE ("discountCode")`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "rules" DROP CONSTRAINT "UQ_e93df807d2a1953f83b76b8e412"`
    )
  }
}
