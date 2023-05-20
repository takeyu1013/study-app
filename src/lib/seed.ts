import { drizzle } from "drizzle-orm/better-sqlite3";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import Database from "better-sqlite3";
import { unlink } from "fs";
import { users } from "./schema";

unlink("local.db", (error) => {
  if (error) console.error(error);
});
const sqlite = new Database("local.db");
const db = drizzle(sqlite);
migrate(db, {
  migrationsFolder: "drizzle",
});

db.insert(users).values({ name: "Andrew" }).run();
const allUsers = db.select().from(users).all();
console.log("allUsers", allUsers);
