import "dotenv/config";
import express from "express";
import type { Request, Response } from "express";

import tmdbRoutes from "./routes/content.route.js";

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.use("/api/v1/tmdb", tmdbRoutes);

export default app;
