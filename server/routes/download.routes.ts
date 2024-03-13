import { Router } from "express";
import { downloadController } from "../controllers";
import { errorMiddleware, validate } from "../middlewares";
import { DownloadValidation } from "../validations";

export const router = Router();

// POST route
router.post(
  "/excel",
  DownloadValidation.excel,
  validate,
  errorMiddleware,
  downloadController.excel
);
