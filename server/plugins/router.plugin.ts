import { Express } from "express";
import { readdir } from "fs";
import path from "path";
import { configs } from "../configs";

export const RouterPlugin = {
  plug(app: Express) {
    readdir(path.join(__dirname, "../routes"), (err, files) => {
      if (!files) return;
      files.forEach(async (filename, index) => {
        const route = filename.split(".")[0];
        const routePath = path.join(__dirname, `../routes/${filename}`);
        const { router } = await import(routePath);

        app.use(`/${configs.API_VERSION}/${route}`, router);

        console.log(
          `http://localhost:${configs.PORT}/${configs.API_VERSION}/${route}\n`
        );

        if (files?.length - 1 !== index) return;

        app.use((_req, res) => {
          res.status(404).json({ msg: "Route not found !!!" });
        });
      });
    });
  },
};
