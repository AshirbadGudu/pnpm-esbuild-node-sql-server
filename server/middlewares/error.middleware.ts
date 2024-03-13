import { ErrorRequestHandler } from "express";

export const errorMiddleware: ErrorRequestHandler = (err, req, res, next) => {
  if (err) {
    const statusCode: number = err.status || 500;
    const errorMessage: string = err.message;
    console.log(statusCode);
    res.status(statusCode).json({ message: errorMessage });
  } else {
    next();
  }
};
