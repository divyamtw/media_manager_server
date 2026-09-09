import { pgTable, uuid } from "drizzle-orm/pg-core";
import { content } from "./content.js";
import { author } from "./author.js";
import { primaryKey } from "drizzle-orm/cockroach-core";
import { relations } from "drizzle-orm/_relations";

export const contentAuthor = pgTable(
  "content_author",
  {
    contentId: uuid("content_id")
      .notNull()
      .references(() => content.id),
    authorId: uuid("author_id")
      .notNull()
      .references(() => author.id),
  },
  (table) => [
    primaryKey({
      columns: [table.contentId, table.authorId],
    }),
  ],
);

export const contentAuthorRelations = relations(contentAuthor, ({ one }) => ({
  content: one(content, {
    fields: [contentAuthor.contentId],
    references: [content.id],
  }),
  author: one(author, {
    fields: [contentAuthor.authorId],
    references: [author.id],
  }),
}));
