import nodemailer from "nodemailer";
import { secrets } from "../secrets";

export const transporter = () => {
  if (secrets?.MAIL_SERVICE === "gmail") {
    return nodemailer.createTransport({
      service: secrets.MAIL_SERVICE,
      auth: {
        user: secrets.MAIL_USER,
        pass: secrets.MAIL_PASSWORD,
      },
    });
  }

  if (secrets?.MAIL_HOST?.includes("zeptomail")) {
    return nodemailer.createTransport({
      host: secrets.MAIL_HOST,
      port: +secrets?.MAIL_PORT!,
      auth: {
        user: secrets.MAIL_USER,
        pass: secrets.MAIL_PASSWORD,
      },
    });
  }
};
