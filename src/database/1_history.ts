import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("suggestion", function (table) {
    table.increments("id").primary();
    table.string("date");
    table
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("user")
      .onDelete("CASCADE");
    table
      .integer("recipe_id")
      .notNullable()
      .references("id")
      .inTable("recipes")
      .onDelete("CASCADE"); // Add user_id foreign key
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("history");
}
