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
exports.Ad = void 0;
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
const mongoose_1 = __importStar(require("mongoose"));
// import { Address } from '../types';
const enumMongooseHelper_1 = __importDefault(require("../utils/enumMongooseHelper"));
const types_1 = require("../types");
const schema = new mongoose_1.Schema({
    postedBy: {
        type: 'ObjectId',
        ref: 'User',
        required: true,
    },
    typeAd: {
        type: String,
        enum: [types_1.TypeAd.SELL, types_1.TypeAd.BUY],
        required: true,
    },
    typeProduct: {
        type: String,
        enum: [types_1.TypeProduct.ADWINE, types_1.TypeProduct.ADGRAPE],
        required: true,
    },
    wineName: {
        type: String,
        minlength: 3,
        index: true,
    },
    wine: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Wine',
        // required() {
        //   return this.typeProduct === TypeProduct.ADWINE;
        // },
    },
    sottoZona: {
        type: String,
    },
    menzione: {
        type: String,
        enum: ['CLASSICO', 'RISERVA', 'SUPERIORE', 'VIGNA'],
    },
    metodoProduttivo: {
        type: String,
        enum: Object.values(enumMongooseHelper_1.default),
        required: true,
        default: 'CONVENZIONALE',
    },
    vineyardName: {
        type: String,
        minlength: 3,
        index: true,
    },
    vineyard: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Vineyard',
        // required() {
        //   return this.typeProduct === TypeProduct.ADGRAPE;
        // },
    },
    abv: Number,
    harvest: {
        type: Number,
        required: true,
    },
    priceFrom: {
        type: Number,
        required: true,
    },
    priceTo: {
        type: Number,
        required: true,
    },
    litersFrom: {
        type: Number,
    },
    litersTo: {
        type: Number,
    },
    kgFrom: {
        type: Number,
    },
    kgTo: {
        type: Number,
    },
    // address: {
    //   comune: {
    //     type: String,
    //     required: true,
    //   },
    //   provincia: {
    //     type: String,
    //     enum: Object.values(Province),
    //     required: true,
    //   },
    //   regione: {
    //     type: String,
    //     enum: Object.values(Regioni),
    //     required: true,
    //   },
    // },
    negotiations: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Negotiation',
        },
    ],
    viewedBy: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
    savedBy: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
    content: {
        type: String,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    needsFollowUp: {
        type: Boolean,
        default: true,
    },
    datePosted: {
        type: Date,
        // `Date.now()` returns the current unix timestamp as a number
        default: Date.now,
    },
});
// const adSchema = new Schema(adSchemaFields);
schema.index({ wineName: 1, typeAd: 1 });
exports.Ad = mongoose_1.default.model('Ad', schema);
