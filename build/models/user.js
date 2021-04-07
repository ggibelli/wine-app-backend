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
exports.User = void 0;
/* eslint-disable @typescript-eslint/no-unsafe-return */
const mongoose_1 = __importStar(require("mongoose"));
const mongoose_unique_validator_1 = __importDefault(require("mongoose-unique-validator"));
const enumMongooseHelper_1 = require("../utils/enumMongooseHelper");
const enumMongooseHelper_2 = require("../utils/enumMongooseHelper");
const bcrypt_1 = __importDefault(require("bcrypt"));
const HASH_ROUNDS = 10;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const userSchemaFields = {
    email: {
        type: String,
        unique: true,
        minlength: 3,
        required: true,
    },
    phoneNumber: {
        type: String,
        unique: true,
        minlength: 10,
        required: true,
    },
    firstName: String,
    lastName: String,
    password: String,
    pIva: {
        type: String,
        unique: true,
        minlength: 11,
        required: true,
    },
    address: {
        via: {
            type: String,
            required: true,
            minlength: 5,
        },
        CAP: {
            type: String,
            required: true,
            minlength: 5,
        },
        comune: { type: String, required: true, minlength: 5 },
        provincia: {
            type: String,
            enum: Object.values(enumMongooseHelper_1.Province),
            required: true,
        },
        regione: {
            type: String,
            enum: Object.values(enumMongooseHelper_1.Regioni),
            required: true,
        },
    },
    isVerified: {
        type: Boolean,
        required: true,
        default: false,
    },
    isPremium: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    hideContact: {
        type: Boolean,
        default: true,
    },
    ads: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Ad',
        },
    ],
    savedAds: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Ad',
        },
    ],
    messages: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Message',
        },
    ],
    negotiations: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Negotiation',
        },
    ],
    reviews: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Review',
        },
    ],
    adsRemaining: Number,
    dateCreated: {
        type: Date,
        // `Date.now()` returns the current unix timestamp as a number
        default: Date.now,
    },
    producedWines: [
        {
            wine: {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: 'Wine',
            },
            bottlesProduced: Number,
            metodoProduttivo: {
                type: String,
                enum: Object.values(enumMongooseHelper_2.METODOPRODUTTIVO),
            },
        },
    ],
    ownedVineyards: [
        {
            vineyard: {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: 'Vineyard',
            },
            tonsProduced: Number,
            metodoProduttivo: {
                type: String,
                enum: Object.values(enumMongooseHelper_2.METODOPRODUTTIVO),
            },
        },
    ],
};
const userSchema = new mongoose_1.Schema(userSchemaFields);
userSchema.pre('save', async function (next) {
    // here we need to retype 'this' because by default it is
    // of type Document from which the 'IUser' interface is inheriting
    // but the Document does not know about our password property
    const thisObj = this;
    if (!this.isModified('password')) {
        return next();
    }
    try {
        const salt = await bcrypt_1.default.genSalt(HASH_ROUNDS);
        thisObj.password = await bcrypt_1.default.hash(thisObj.password, salt);
        return next();
    }
    catch (e) {
        return next(e);
    }
});
userSchema.methods.validatePassword = async function (pass) {
    return bcrypt_1.default.compare(pass, this.password);
};
userSchema.plugin(mongoose_unique_validator_1.default);
exports.User = mongoose_1.default.model('User', userSchema);
