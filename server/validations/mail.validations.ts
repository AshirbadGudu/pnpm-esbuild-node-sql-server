import { body } from "express-validator";
import { validateEmail } from "../utils";

export const MailValidation = {
  send: [
    body("to")
      .isArray({ min: 1 })
      .withMessage("At least one recipient email is required")
      .custom((value: string[]) => value.every(validateEmail)),
    body("subject").notEmpty().withMessage("Email subject is required"),
    body("html")
      .notEmpty()
      .withMessage("Email message body is required")
      .isString(),
    body("cc")
      .optional({ nullable: true, checkFalsy: true })
      .isArray()
      .custom((value: string[]) => value.every(validateEmail)),
    body("bcc")
      .optional({ nullable: true, checkFalsy: true })
      .isArray()
      .custom((value: string[]) => value.every(validateEmail)),
  ],
};
