import { parseEnv } from "znv";
import { z } from "zod";

export const { DATABASE_URL, DATABASE_AUTH_TOKEN, GITHUB_ID, GITHUB_SECRET } = parseEnv(process.env, {
  DATABASE_URL: z.string().min(1),
  DATABASE_AUTH_TOKEN: z.string().min(1).optional(),
  GITHUB_ID: z.string().min(1),
  GITHUB_SECRET: z.string().min(1),
});
