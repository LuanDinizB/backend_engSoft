import type { Knex } from "knex";
import * as dotenv from "dotenv";
dotenv.config();

const config: Knex.Config = {
  client: "pg",
  connection: `postgresql://postgres.gofvwaitpllshzdajgek:${process.env.DATABASE_PASSWORD}@aws-0-sa-east-1.pooler.supabase.com:6543/postgres`,
  migrations: {
    tableName: "knex_migrations",
    directory: "./src/database",
    
  }
};

export default config;
