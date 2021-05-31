"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const promises_1 = __importDefault(require("fs/promises"));
const wine_1 = require("../models/wine");
const types_1 = require("../types");
const createWineDb = async () => {
    const wines = await promises_1.default.readFile('./data/viniFinale.json');
    const data = JSON.parse(wines.toString());
    for (const wine of data) {
        const newWine = new wine_1.Wine({
            denominazioneVino: wine.Tipologia,
            tipoVino: wine.TipoVino,
            vitigni: wine.Vitigni,
            espressioneComunitaria: types_1.EspressioneComunitaria.DOP,
            denominazioneZona: wine.Tipologia.includes('DOCG')
                ? types_1.DenomZona.DOCG
                : types_1.DenomZona.DOC,
        });
        try {
            await newWine.save();
        }
        catch (e) {
            console.log(e);
        }
    }
};
exports.default = createWineDb;
