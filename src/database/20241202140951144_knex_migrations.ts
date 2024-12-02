import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("feedback", function (table) {
    table.increments("id").primary();
    table.text("commentary");
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
    table.text("recipe");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("feedback");
}
