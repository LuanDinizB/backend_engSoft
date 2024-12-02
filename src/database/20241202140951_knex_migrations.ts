import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("feedback", function (table) {
        table.increments("id").primary();
        table.text("commentary");
        table.string("user");
        table.text("recipe");
      });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists("feedback");
}

