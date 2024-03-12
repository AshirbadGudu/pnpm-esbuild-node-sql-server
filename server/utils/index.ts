import path from "path";
import { configs } from "../secrets";
export const getRouteInfo = (filename: string) => {
  const route = filename.split(".")[0];
  const routePath = path.join(__dirname, `../routes/${filename}`);
  const apiPath = `${configs.API_VERSION}/${route}`;
  const apiURL = `http://localhost:${configs.PORT}/${apiPath}`;
  return { routePath, apiPath, apiURL };
};
