import { pgEnum, pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { review } from "./review.js";
import { relations } from "drizzle-orm/_relations";

const roleEnum = pgEnum("role", ["user", "admin", "moderator"]);

export const user = pgTable("user", {
  id: uuid("id").primaryKey().defaultRandom(),
  username: varchar("username", { length: 255 }).notNull(),
  displayName: varchar("display_name", { length: 255 }).notNull(),
  email: varchar("email", { length: 50 }).notNull(),
  clerkId: varchar("clerk_id", { length: 255 }).notNull(),
  role: roleEnum("role").default("user").notNull(),
  bio: varchar("bio", { length: 255 }),
  avatarUrl: varchar("avatar_url", { length: 255 }).default(
    "https://imgs.search.brave.com/BMjS8afh0gllwewBwB7m-V2nsbzb2SAqGkEF2TGd2XI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi91bmtu/b3duLXVzZXItYXZh/dGFyLXF1ZXN0aW9u/LW1hcmstYW5vbnlt/b3VzLXByb2ZpbGUt/aWRlbnRpdHktZmxh/dC1ncmF5LXNpbGhv/dWV0dGUtb3Zlcmxh/aWQtbGFyZ2UtY29u/Y2VwdC1hY2NvdW50/LTM5OTE2NDU2Ny5q/cGc",
  ),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});

export const userRelations = relations(user, ({ many }) => ({
  reviews: many(review),
}));
