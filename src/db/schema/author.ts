import { relations } from "drizzle-orm/_relations";
import { pgTable, uuid, varchar, timestamp } from "drizzle-orm/pg-core";
import { contentAuthor } from "./contentAuthor.js";

export const author = pgTable("author", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});

export const authorRelations = relations(author, ({ many }) => ({
  author: many(contentAuthor),
}));
