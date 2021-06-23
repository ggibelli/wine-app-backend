/* eslint-disable @typescript-eslint/restrict-template-expressions */
import nodemailer from 'nodemailer';
import Mailgen from 'mailgen';
import { MAIL_PASSWORD, MAIL_USER, BASE_URL } from './config';

export const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: MAIL_USER,
    pass: MAIL_PASSWORD,
  },
});

export const MailGenerator = new Mailgen({
  theme: 'default',
  product: {
    name: 'Wine APP',
    link: BASE_URL,
  },
});

interface MailBody {
  subject: string;
  body: {
    intro: string;
  };
}

export const sendMail = async (mailBody: MailBody, recipients: string[]) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const mail = MailGenerator.generate(mailBody);
  const message = {
    from: MAIL_USER,
    to: recipients,
    subject: mailBody.subject,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    html: mail,
  };
  try {
    await transporter.sendMail(message);
  } catch (e) {
    throw new Error(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      `MailError: ${e.message}, subj: ${mailBody.subject}, recipients: ${recipients}`,
    );
  }
};
