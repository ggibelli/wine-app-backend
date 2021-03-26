import { config } from 'dotenv';

config();

export const PORT = process.env.PORT as string;
export let MONGODB_URI = process.env.MONGODB_URI as string;
export const SECRET = process.env.SECRET as string;
export let MAIL_PASSWORD = process.env.MAIL_PASSWORD_DEV as string;
export let MAIL_USER = process.env.MAIL_USER_DEV as string;
export let BASE_URL = process.env.BASE_URL_DEV as string;
export const ADMINISTRATOR_ID = process.env.ADMINISTRATOR_ID as string;
export const NEGOTIATION_ADM = process.env.NEGOTIATION_ADM as string;
if (process.env.NODE_ENV === 'test') {
  MONGODB_URI = process.env.TEST_MONGODB_URI as string;
}

if (process.env.NODE_ENV === 'production') {
  MAIL_PASSWORD = process.env.MAIL_PASSWORD_PROD as string;
  MAIL_USER = process.env.MAIL_USER_PROD as string;
  BASE_URL = process.env.BASE_URL_PROD as string;
}
