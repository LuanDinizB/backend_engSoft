import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("favorite", function (table) {
    table.increments("id").primary();
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
      .onDelete("CASCADE"); // Add recipe_id foreign key
    table.string("date");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("favorite");
}
