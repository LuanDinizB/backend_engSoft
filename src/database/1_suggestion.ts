import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  // await knex.schema.createTable("suggestion", function (table) {
  //   table.increments("id").primary();
  //   table.string("recipes");
  // });
}

export async function down(knex: Knex): Promise<void> {
  // await knex.schema.dropTableIfExists("suggestion");
}
