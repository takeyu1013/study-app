import { type Config } from "drizzle-kit";

export default {
  out: "./migrations",
  schema: "./src/lib/schema.ts",
  breakpoints: true,
} satisfies Config;
