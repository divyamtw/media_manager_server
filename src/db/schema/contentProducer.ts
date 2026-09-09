import { pgTable, primaryKey, uuid } from "drizzle-orm/pg-core";
import { content } from "./content.js";
import { producer } from "./producer.js";
import { relations } from "drizzle-orm/_relations";

export const contentProducer = pgTable(
  "content_producer",
  {
    contentId: uuid("content_id")
      .notNull()
      .references(() => content.id),
    producerId: uuid("producer_id")
      .notNull()
      .references(() => producer.id),
  },
  (table) => [
    primaryKey({
      columns: [table.contentId, table.producerId],
    }),
  ],
);

export const contentProducerRelations = relations(
  contentProducer,
  ({ one }) => ({
    content: one(content, {
      fields: [contentProducer.contentId],
      references: [content.id],
    }),
    producer: one(producer, {
      fields: [contentProducer.producerId],
      references: [producer.id],
    }),
  }),
);
