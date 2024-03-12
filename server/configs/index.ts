import { config } from "dotenv";

config();

const configs = {
  PORT: process.env.PORT,
  JWT_SECRET: `${process.env.JWT_SECRET}`,
  API_VERSION: `api/v1`,
  // write all the mail configurations here
  MAIL_FROM: process.env.MAIL_FROM,
  MAIL_USER: process.env.MAIL_USER,
  MAIL_PASSWORD: process.env.MAIL_PASSWORD,
  MAIL_SERVICE: process.env.MAIL_SERVICE,
};

export { configs };
