import type { Config } from "drizzle-kit";
 
export default {
  schema: "./drizzle/db/schema.ts",
  out: "./drizzle",
} satisfies Config;