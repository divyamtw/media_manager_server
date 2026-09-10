import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

export const db = drizzle({ client: sql });

export async function connectDB() {
  try {
    await sql`SELECT 1`;
    console.log("Database connected!!");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
}
