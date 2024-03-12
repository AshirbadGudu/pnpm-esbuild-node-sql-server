import path from "path";
import { secrets } from "../secrets";
export const getRouteInfo = (filename: string) => {
  const route = filename.split(".")[0];
  const routePath = path.join(__dirname, `../routes/${filename}`);
  const apiPath = `${secrets.API_VERSION}/${route}`;
  const apiURL = `http://localhost:${secrets.PORT}/${apiPath}`;
  return { routePath, apiPath, apiURL };
};
