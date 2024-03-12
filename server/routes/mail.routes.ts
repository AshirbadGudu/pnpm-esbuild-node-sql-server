import { Router } from "express";
import { mailController } from "../controllers";
import { validate } from "../middlewares";
import { MailValidation } from "../validations";

export const router = Router();

router.post("/", MailValidation.send, validate, mailController.send);
