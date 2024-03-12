import { Express } from "express";
import http from "http";
import { secrets } from "../secrets";

export const ListenerPlugin = {
  plug(app: Express) {
    const server = http.createServer(app);

    server.listen(secrets.PORT, () => {
      console.log(`\nServer is running on port ${secrets.PORT}\n`);
    });
  },
};
