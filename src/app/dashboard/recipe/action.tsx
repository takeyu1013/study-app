import { DB } from "@/db/types";
import { Kysely } from "kysely";
import { PlanetScaleDialect } from "kysely-planetscale";
import { z, ZodError } from "zod";

import { env } from "@/lib/env.mjs";

const schema = z.object({
  name: z.string().min(2).max(50),
});

export function RecipeFormExperimental() {
  return (
    <form
      action={async (data) => {
        "use server";
        const value = data.get("name");
        if (value === null) return;
        const string = value.toString();
        try {
          const { name } = await schema.parseAsync({ name: string });
          const db = new Kysely<DB>({
            dialect: new PlanetScaleDialect({
              url: env.DATABASE_URL,
              fetch,
            }),
          });
          await db.insertInto("Recipe").values({ name }).executeTakeFirst();
        } catch (error) {
          if (!((error: any): error is ZodError => error.message !== undefined)(error)) {
            console.error(error);
            return;
          }
          console.error(error.message);
        }
      }}
    >
      <input type="text" name="name" />
      <button type="submit">Submit</button>
    </form>
  );
}
