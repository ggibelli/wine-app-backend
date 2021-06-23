"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const config_1 = require("./config");
const logger_1 = require("./logger");
const getCoordinatesFromAddress = async (address) => {
    const params = {
        access_key: config_1.GEOAPI,
        query: `${address.comune}, Italy`,
    };
    try {
        const { data } = await axios_1.default.get('http://api.positionstack.com/v1/forward', {
            params,
        });
        if (data.data?.length) {
            return {
                latitude: data.data[0].latitude,
                longitude: data.data[0].longitude,
            };
        }
    }
    catch (e) {
        logger_1.loggerError(e);
    }
    return null;
};
exports.default = getCoordinatesFromAddress;
