"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = void 0;
const format_1 = __importDefault(require("date-fns/format"));
const formatDate = (stamp, format) => format_1.default(stamp, format);
exports.formatDate = formatDate;
