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
exports.Wine = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const mongoose_unique_validator_1 = __importDefault(require("mongoose-unique-validator"));
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const wineSchema = new mongoose_1.Schema({
    _id: { type: mongoose_1.Schema.Types.ObjectId },
    denominazioneVino: {
        type: String,
        required: true,
        minlength: 2,
        unique: true,
    },
    tipoVino: String,
    espressioneComunitaria: {
        type: String,
        enum: ['DOP', 'IGP', 'ND'],
    },
    denominazioneZona: {
        type: String,
        enum: ['DOC', 'DOCG', 'IGT', 'Vino varietale', 'Vino generico'],
    },
    vitigni: [
        {
            type: String,
        },
    ],
});
wineSchema.index({ denominazioneVino: 1 });
// @ts-ignore
wineSchema.plugin(mongoose_unique_validator_1.default);
exports.Wine = mongoose_1.default.model('Wine', wineSchema);
