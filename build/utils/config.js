"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GEOAPI = exports.NEGOTIATION_ADM = exports.ADMINISTRATOR_ID = exports.BASE_URL = exports.MAIL_USER = exports.MAIL_PASSWORD = exports.SECRET = exports.MONGODB_URI = exports.PORT = void 0;
/* eslint-disable import/no-mutable-exports */
const dotenv_1 = require("dotenv");
dotenv_1.config();
exports.PORT = process.env.PORT;
exports.MONGODB_URI = process.env.MONGODB_URI;
exports.SECRET = process.env.SECRET;
exports.MAIL_PASSWORD = process.env.MAIL_PASSWORD_DEV;
exports.MAIL_USER = process.env.MAIL_USER_DEV;
exports.BASE_URL = process.env.BASE_URL_DEV;
exports.ADMINISTRATOR_ID = process.env.ADMINISTRATOR_ID;
exports.NEGOTIATION_ADM = process.env.NEGOTIATION_ADM;
if (process.env.NODE_ENV === 'test') {
    exports.MONGODB_URI = process.env.TEST_MONGODB_URI;
}
if (process.env.NODE_ENV === 'production') {
    exports.MAIL_PASSWORD = process.env.MAIL_PASSWORD_PROD;
    exports.MAIL_USER = process.env.MAIL_USER_PROD;
    exports.BASE_URL = process.env.BASE_URL_PROD;
}
exports.GEOAPI = process.env.GEO_API;
