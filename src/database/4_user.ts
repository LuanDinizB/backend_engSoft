import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("user", function (table) {
    table.increments("id").primary();
    table.string("name");
    table.string("email").unique();
    table.string("password");
    table.string("feedbacks");
    table.foreign("feedbacks").references("feedbacks.user");
    table.string("recipes");
    table.foreign("recipes").references("recipes.id");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("user");
}
