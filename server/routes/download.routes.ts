import { Router } from "express";
import { downloadController } from "../controllers";
import { validate } from "../middlewares";
import { DownloadValidation } from "../validations";

export const router = Router();

// POST route
router.post(
  "/excel",
  DownloadValidation.excel,
  validate,
  // middleware for handling error
  (err, req, res, next) => {
    if (err) {
      return res.status(err.status || 500).json({ message: err.message });
    }
    next();
  },
  downloadController.excel
);
