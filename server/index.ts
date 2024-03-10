import cors from "cors";
import express from "express";
import helmet from "helmet";

const app = express();

app
  .use(cors())
  .use(helmet())
  .use(express.json())
  .use(express.urlencoded({ extended: true }));
