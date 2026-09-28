import {
  pgTable,
  uuid,
  pgEnum,
  timestamp,
  primaryKey,
} from "drizzle-orm/pg-core";
import { user } from "./user.js";
import { content } from "./content.js";
import { relations } from "drizzle-orm/_relations";

const statusEnum = pgEnum("status_enum", [
  "unknown",
  "completed",
  "dropped",
  "planned",
  "watching",
  "on-hold",
]);

export const userWatchlist = pgTable(
  "user_watchlist",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id")
      .notNull()
      .references(() => user.id),
    contentId: uuid("content_id")
      .notNull()
      .references(() => content.id),
    status: statusEnum("status").default("unknown").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (table) => [
    primaryKey({
      columns: [table.userId, table.contentId],
    }),
  ],
);

export const userWatchlistRelations = relations(userWatchlist, ({ one }) => ({
  user: one(user, {
    fields: [userWatchlist.userId],
    references: [user.id],
  }),
  content: one(content, {
    fields: [userWatchlist.contentId],
    references: [content.id],
  }),
}));
