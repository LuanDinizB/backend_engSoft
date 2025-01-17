import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("recipes", function (table) {
    table.increments("id").primary();
    table.text("name");
    table.string("ingredients");
    table.string("prepareTime");
    table.enum("difficulty", ["easy", "medium", "hard"]);
    table.string("prepareMode");
    table.text("sustentable");
    table
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("user")
      .onDelete("CASCADE"); // Add user_id foreign key
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("recipes");
}
