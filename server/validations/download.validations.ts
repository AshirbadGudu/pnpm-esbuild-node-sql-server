import { body } from "express-validator";

export const DownloadValidation = {
  excel: [
    body("filename")
      .optional({ nullable: true, checkFalsy: true })
      .isString()
      .withMessage("Filename must be a string"),
    body("data")
      .isArray()
      .notEmpty()
      .withMessage("Data is required")
      .custom((value: unknown[]) => {
        return value.every((item) => {
          return typeof item === "object" && !Array.isArray(item);
        });
      }),
  ],
};
