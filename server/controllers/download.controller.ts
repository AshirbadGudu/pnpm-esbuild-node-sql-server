import { RequestHandler } from "express";
import { convertExcelFromJSON } from "../utils";

export const downloadController: { excel: RequestHandler } = {
  excel: async (req, res, next) => {
    try {
      const { filename = "data.xlsx", data } = req.body;
      const bufferWorkbook = await convertExcelFromJSON(data);
      res.setHeader("Content-Disposition", `attachment; filename=${filename}`);
      res.setHeader("Content-Type", "application/vnd.openxmlformats");
      res.status(200).end(bufferWorkbook);
    } catch (error) {
      next(error);
    }
  },
};
