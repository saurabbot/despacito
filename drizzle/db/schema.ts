import {
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  uniqueIndex,
  varchar,
} from "drizzle-orm/pg-core";

// export const users = pgTable("users", {
//   id: serial("id").primaryKey().notNull(),
//   firstName: text("first_name").notNull(),
//   last_name: text("last_name").notNull(),
//   phone: varchar("phone", { length: 256 }).notNull(),
//   email: text("email").notNull(),
// });
export const leads = pgTable("leads", {
  id: serial("id").primaryKey().notNull(),
  email: text("email").notNull(),
});
