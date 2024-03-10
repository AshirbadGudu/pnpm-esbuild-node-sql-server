import { Express } from "express";
import { readdir } from "fs/promises";
import path from "path";
import { configs } from "../configs";
import { errorMiddleware } from "../middlewares";

export const RouterPlugin = {
  async plug(app: Express) {
    const files = await readdir(path.join(__dirname, "../routes"));
    if (!files) return;
    files.forEach(async (filename, index) => {
      const route = filename.split(".")[0];
      const routePath = path.join(__dirname, `../routes/${filename}`);
      const apiPath = `${configs.API_VERSION}/${route} 🔥\n`;

      const { router } = await import(routePath);
      app.use(`/${apiPath}`, router);
      console.log(`🔥 http://localhost:${configs.PORT}/${apiPath}`);

      if (files?.length - 1 !== index) return;
      app.use(errorMiddleware);
    });
  },
};
