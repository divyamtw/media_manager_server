import { primaryKey, uuid } from "drizzle-orm/cockroach-core";
import { pgTable } from "drizzle-orm/pg-core";
import { content } from "./content.js";
import { studio } from "./studio.js";
import { relations } from "drizzle-orm/_relations";

export const contentStudio = pgTable(
  "content_studio",
  {
    contentId: uuid("content_id")
      .notNull()
      .references(() => content.id),
    studioId: uuid("studio_id")
      .notNull()
      .references(() => studio.id),
  },
  (table) => [
    primaryKey({
      columns: [table.contentId, table.studioId],
    }),
  ],
);

export const contentStudioRelations = relations(contentStudio, ({ one }) => ({
  content: one(content, {
    fields: [contentStudio.contentId],
    references: [content.id],
  }),
  studio: one(studio, {
    fields: [contentStudio.studioId],
    references: [studio.id],
  }),
}));
