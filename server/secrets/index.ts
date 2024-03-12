import { config } from "dotenv";

config();

export const secrets = {
  PORT: process.env.PORT,
  JWT_SECRET: `${process.env.JWT_SECRET}`,
  API_VERSION: `api/v1`,
  // write all the mail configurations here
  MAIL_FROM: process.env.MAIL_FROM,
  MAIL_USER: process.env.MAIL_USER,
  MAIL_PASSWORD: process.env.MAIL_PASSWORD,
  MAIL_SERVICE: process.env.MAIL_SERVICE,
  MAIL_HOST: process.env.MAIL_HOST,
  MAIL_PORT: process.env.MAIL_PORT,
} as const;

/* 
Why we use "as const"?

The "as const" assertion tells the TypeScript compiler that the object should be treated as a literal object type,
with the values of the properties being the literal types of the values provided. This is useful when the object
is meant to be treated as a configuration object, and not meant to be modified or extended after it is created.

By using "as const", we are telling the TypeScript compiler that the values of the properties of the object should be 
treated as literals, and not modified. This can help catch errors at compile time, and also ensures that the object
is treated as a constant value.

For example, if we were to modify the value of one of the properties in the object, TypeScript would give us an 
error, as the type of the property would no longer match the type declared in the object literal.
*/
