import { config } from "dotenv";

config();

const configs = {
  PORT: process.env.PORT,
  JWT_SECRET: `${process.env.JWT_SECRET}`,
  API_VERSION: `api/v1`,
};

export { configs };
