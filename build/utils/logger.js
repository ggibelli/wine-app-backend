"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerError = exports.loggerInfo = void 0;
const loggerInfo = (...params) => {
    if (process.env.NODE_ENV !== 'test') {
        console.log(...params);
    }
};
exports.loggerInfo = loggerInfo;
const loggerError = (...params) => {
    console.log(...params);
};
exports.loggerError = loggerError;
