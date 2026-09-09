import { pgTable, primaryKey, uuid } from "drizzle-orm/pg-core";
import { content } from "./content.js";
import { genres } from "./genres.js";
import { relations } from "drizzle-orm/_relations";

export const contentGenres = pgTable(
  "content_genres",
  {
    contentId: uuid("content_id")
      .notNull()
      .references(() => content.id),
    genreId: uuid("genre_id")
      .notNull()
      .references(() => genres.id),
  },
  (table) => [
    primaryKey({
      columns: [table.contentId, table.genreId],
    }),
  ],
);

export const contentGenresRelations = relations(contentGenres, ({ one }) => ({
  content: one(content, {
    fields: [contentGenres.contentId],
    references: [content.id],
  }),
  genre: one(genres, {
    fields: [contentGenres.genreId],
    references: [genres.id],
  }),
}));
