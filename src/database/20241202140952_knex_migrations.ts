import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("recipes", function (table) {
        table.increments("id").primary();
        table.text("name");
        table.string("ingredients");
        table.string("prepareTime");
        table.enum("difficulty", ["easy", "medium", "hard"]);
        table.string("prepareMode");
        table.boolean("susenstable");
        table.text("feedbacks");
        table.foreign("feedbacks").references("feedback.id");
        table.string("suggestion");
        table.foreign("suggestion").references("suggestion.id");
      });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists("recipes");
}

