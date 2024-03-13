import { Express } from "express";
import { readdir } from "fs/promises";
import path from "path";
import { notFoundMiddleware } from "../middlewares";
import { getRouteInfo } from "../utils";

export const RouterPlugin = {
  async plug(app: Express) {
    const files = await readdir(path.join(__dirname, "../routes"));
    if (!files) return;
    files.forEach(async (filename, index) => {
      const { apiPath, apiURL, routePath } = getRouteInfo(filename);

      const { router } = await import(routePath);
      app.use(`/${apiPath}`, router);
      console.log(`${index + 1}. ${apiURL} 🔥\n`);

      if (files?.length - 1 !== index) return;
      app.use(notFoundMiddleware);
    });
  },
};
