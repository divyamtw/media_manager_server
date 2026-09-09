import { pgTable, uuid, timestamp } from "drizzle-orm/pg-core";
import { user } from "./user.js";
import { content } from "./content.js";
import { relations } from "drizzle-orm/_relations";

export const review = pgTable("review", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .notNull()
    .references(() => user.id),
  contentId: uuid("content_id")
    .notNull()
    .references(() => content.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});

export const reviewRelations = relations(review, ({ one }) => ({
  user: one(user, {
    fields: [review.userId],
    references: [user.id],
  }),

  content: one(content, {
    fields: [review.contentId],
    references: [content.id],
  }),
}));
