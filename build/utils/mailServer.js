"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = exports.MailGenerator = exports.transporter = void 0;
/* eslint-disable @typescript-eslint/restrict-template-expressions */
const nodemailer_1 = __importDefault(require("nodemailer"));
const mailgen_1 = __importDefault(require("mailgen"));
const config_1 = require("./config");
exports.transporter = nodemailer_1.default.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: config_1.MAIL_USER,
        pass: config_1.MAIL_PASSWORD,
    },
});
exports.MailGenerator = new mailgen_1.default({
    theme: 'default',
    product: {
        name: 'Wine APP',
        link: config_1.BASE_URL,
    },
});
const sendMail = async (mailBody, recipients) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const mail = exports.MailGenerator.generate(mailBody);
    const message = {
        from: config_1.MAIL_USER,
        to: recipients,
        subject: mailBody.subject,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        html: mail,
    };
    try {
        await exports.transporter.sendMail(message);
    }
    catch (e) {
        throw new Error(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        `MailError: ${e.message}, subj: ${mailBody.subject}, recipients: ${recipients}`);
    }
};
exports.sendMail = sendMail;
