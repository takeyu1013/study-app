import Database from "better-sqlite3";
import { Kysely, SqliteDialect } from "kysely";
import { DB } from "./types";

(async () => {
  const db = new Kysely<DB>({
    dialect: new SqliteDialect({
      database: new Database("./prisma/local.db"),
    }),
  });
  const users = await db.selectFrom("User").select("name").execute();
  console.log(users);
})();
