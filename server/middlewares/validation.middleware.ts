import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { UnprocessableEntity } from "http-errors";
/**
 * Middleware function to validate incoming requests.
 */
export function validate(req: Request, res: Response, next: NextFunction) {
  try {
    // Extract errors from the incoming request using express-validator.
    const errors = validationResult(req);
    // Check if there are any errors. If so, throw a 422 error with the first error message.
    if (!errors.isEmpty()) {
      throw new UnprocessableEntity(errors.array()[0].msg);
    }
    // If there are no errors, proceed to the next middleware function.
    next();
  } catch (error) {
    // If an error occurs, pass it to the error handling middleware.
    next(error);
  }
}
