import "dotenv/config";

import { Kysely } from "kysely";
import { PlanetScaleDialect } from "kysely-planetscale";
import { fetch } from "undici";

import { DB } from "./types";
import { DATABASE_URL } from "@/lib/env";

(async () => {
  const db = new Kysely<DB>({
    dialect: new PlanetScaleDialect({
      url: DATABASE_URL,
      fetch,
    }),
  });
  const users = await db.selectFrom("User").select("name").execute();
  console.log(users);
})();
