"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const sync_1 = __importDefault(require("csv-parse/lib/sync"));
const promises_1 = __importDefault(require("fs/promises"));
const wine_1 = require("../models/wine");
const createWineDb = async () => {
    const wineDb = [];
    const wines = await promises_1.default.readFile('./data/vini.csv');
    const data = sync_1.default(wines, { relax_column_count: true });
    for (const wine of data) {
        const regioni = [];
        if (wine[4].includes(' ')) {
            const splitRegioni = wine[4].split(' ');
            splitRegioni.map((regione) => regioni.push(regione));
            wineDb.push({
                denominazioneVino: wine[1],
                espressioneComunitaria: wine[2],
                denominazioneZona: wine[3],
                regione: regioni,
            });
        }
        else {
            wineDb.push({
                denominazioneVino: wine[1],
                espressioneComunitaria: wine[2],
                denominazioneZona: wine[3],
                regione: wine[4],
            });
        }
    }
    for (const wine of wineDb) {
        const wineNew = new wine_1.Wine(wine);
        try {
            await wineNew.save();
        }
        catch (e) {
            console.log(e);
        }
    }
    return wineDb;
};
//createWineDb();
exports.default = createWineDb;
