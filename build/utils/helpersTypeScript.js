"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assertNever = (value) => {
    throw new Error(`Unhandled discriminated union member: ${JSON.stringify(value)}`);
};
exports.default = assertNever;
