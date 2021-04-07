"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertNever = void 0;
const assertNever = (value) => {
    throw new Error(`Unhandled discriminated union member: ${JSON.stringify(value)}`);
};
exports.assertNever = assertNever;
