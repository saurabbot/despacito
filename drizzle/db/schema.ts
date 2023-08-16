import { InferModel } from "drizzle-orm";
import {
  integer,
  pgEnum,
  pgTable,
  boolean,
  serial,
  text,
  uniqueIndex,
  varchar,
} from "drizzle-orm/pg-core";

export const leads = pgTable("leads", {
  id: serial("id").primaryKey().notNull(),
  email: text("email").notNull(),
});

export const users = pgTable("users", {
  id: serial("id").primaryKey().notNull(),
  usernamme: varchar("username", { length: 256 }).notNull(),
  is_candidate: boolean("is_candidate"),
  is_employer: boolean("is_employer"),
  email: varchar("email").notNull().unique(),
  password: varchar("password", {
    length: 300,
  }),
});
export type User = InferModel<typeof users>;
