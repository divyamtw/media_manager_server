import { relations } from "drizzle-orm/_relations";
import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { contentGenres } from "./contentGenres.js";

export const genres = pgTable("genres", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});

export const genreRelations = relations(genres, ({ many }) => ({
  contents: many(contentGenres),
}));
