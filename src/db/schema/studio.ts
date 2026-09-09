import { relations } from "drizzle-orm/_relations";
import { pgTable, uuid, varchar, timestamp } from "drizzle-orm/pg-core";
import { contentStudio } from "./contentStudio.js";

export const studio = pgTable("studio", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});

export const studioRelations = relations(studio, ({ many }) => ({
  studio: many(contentStudio),
}));
