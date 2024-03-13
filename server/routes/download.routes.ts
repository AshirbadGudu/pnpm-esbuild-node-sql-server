import { Router } from "express";
import { downloadController } from "../controllers";

export const router = Router();

// POST route
router.post("/excel", downloadController.excel);
