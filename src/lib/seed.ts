import "dotenv/config";
import { drizzle } from "drizzle-orm/libsql";
import { migrate } from "drizzle-orm/libsql/migrator";

import { DATABASE_AUTH_TOKEN, DATABASE_URL } from "./env";
import { createClient } from "@libsql/client";

const client = createClient({
  url: DATABASE_URL,
  authToken: DATABASE_AUTH_TOKEN,
});
export const db = drizzle(client);

migrate(db, { migrationsFolder: "drizzle" });
