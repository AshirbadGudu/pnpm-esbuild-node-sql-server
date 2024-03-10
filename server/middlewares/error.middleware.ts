import { RequestHandler } from "express";

export const errorMiddleware: RequestHandler = (_req, res) => {
  res
    .status(404)
    .json({ msg: "🔥🔥🔥🔥🔥🔥🔥🔥 Route not found 🔥🔥🔥🔥🔥🔥🔥🔥" });
};
