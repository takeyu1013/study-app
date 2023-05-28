import { DB } from "@/db/types";
import { Kysely } from "kysely";
import { PlanetScaleDialect } from "kysely-planetscale";

import { env } from "@/lib/env.mjs";

export async function action(data: FormData) {
  "use server";
  const name = data.get("name")?.toString() || "name";
  console.log(data);
  const db = new Kysely<DB>({
    dialect: new PlanetScaleDialect({
      url: env.DATABASE_URL,
      fetch,
    }),
  });
  await db.insertInto("Recipe").values({ name }).executeTakeFirst();
}

export function RecipeFormExperimental() {
  return (
    <form action={action}>
      <input type="text" name="name" />
      <button type="submit">Submit</button>
    </form>
  );
}
