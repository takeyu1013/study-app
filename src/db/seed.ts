import "dotenv/config";

import { Kysely } from "kysely";
import { PlanetScaleDialect } from "kysely-planetscale";
import { fetch } from "undici";

import { env } from "@/lib/env.mjs";

import { DB } from "./types";

(async () => {
  const db = new Kysely<DB>({
    dialect: new PlanetScaleDialect({
      url: env.DATABASE_URL,
      fetch,
    }),
  });
  const users = await db.selectFrom("User").select("name").execute();
  console.log(users);
})();
