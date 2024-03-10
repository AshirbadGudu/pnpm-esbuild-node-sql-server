import cors from "cors";
import express, { Express } from "express";
import helmet from "helmet";
export const MiddlewarePlugin = {
  plug(app: Express) {
    app
      .use(cors())
      .use(helmet())
      .use(express.json())
      .use(express.urlencoded({ extended: true }));
  },
};
