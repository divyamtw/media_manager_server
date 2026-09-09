import {
  integer,
  pgEnum,
  pgTable,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";
import { contentTypes } from "./contentTypes.js";
import { relations } from "drizzle-orm/_relations";
import { review } from "./review.js";
import { contentGenres } from "./contentGenres.js";
import { contentProducer } from "./contentProducer.js";
import { contentStudio } from "./contentStudio.js";
import { contentAuthor } from "./contentAuthor.js";

const statusEnum = pgEnum("status", [
  "unknown",
  "not-started-yet",
  "on-going",
  "completed",
]);

export const content = pgTable("content", {
  id: uuid("id").primaryKey().defaultRandom(),
  contentTypeId: uuid("content_type_id")
    .notNull()
    .references(() => contentTypes.id),
  title: varchar("title", { length: 255 }).notNull(),
  description: varchar("description", { length: 255 }),
  coverImgUrl: varchar("cover_img_url", { length: 255 }),
  language: varchar("language", { length: 255 }),
  status: statusEnum("status").default("unknown").notNull(),
  totalSeason: integer("total_season"),
  totalEpisode: integer("total_episode"),
  totalDurationMin: integer("total_duration_min"),
  totalBooks: integer("total_books"),
  totalVolumes: integer("total_volumes"),
  totalPages: integer("total_pages"),
  isbn: varchar("isbn", { length: 50 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});

export const contentRelations = relations(content, ({ many }) => ({
  review: many(review),
  genre: many(contentGenres),
  producer: many(contentProducer),
  studio: many(contentStudio),
  author: many(contentAuthor),
}));
