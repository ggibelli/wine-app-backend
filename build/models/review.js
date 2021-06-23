"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Review = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const mongoose_unique_validator_1 = __importDefault(require("mongoose-unique-validator"));
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reviewSchema = new mongoose_1.Schema({
    createdBy: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    negotiation: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Negotiation',
        required: true,
    },
    forUser: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    dateCreated: {
        type: Date,
        // `Date.now()` returns the current unix timestamp as a number
        default: Date.now,
    },
    content: {
        type: String,
        minlength: 5,
        maxlength: 130,
    },
    rating: {
        type: Number,
        enum: [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5],
        required: true,
    },
    type: {
        type: String,
        enum: ['SELL', 'BUY'],
    },
});
reviewSchema.index({ createdBy: 1, negotiation: 1 }, { unique: true });
// @ts-ignore
reviewSchema.plugin(mongoose_unique_validator_1.default);
exports.Review = mongoose_1.default.model('Review', reviewSchema);
