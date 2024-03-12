import { RequestHandler } from "express";
import { transporter } from "../configs";
import { secrets } from "../secrets";

export const mailController: {
  send: RequestHandler;
} = {
  send: async (req, res, next) => {
    try {
      const mailOptions = {
        from: secrets.MAIL_FROM,
        ...req.body,
      };
      const info = await transporter()?.sendMail(mailOptions);
      res.json({ success: true, msg: "Mail sent successfully", data: info });
    } catch (error) {
      next(error);
    }
  },
};
