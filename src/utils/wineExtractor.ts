/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import csvParse from 'csv-parse/lib/sync';
import fs from 'fs/promises';
import { IWine } from '../models/wine';
import { DenomZona, EspressioneComunitaria, Regioni } from '../types';
import mongoose from 'mongoose';

interface WineDb {
  denominazioneVino: string;
  espressioneComunitaria: EspressioneComunitaria;
  denominazioneZona: DenomZona;
  regione: mongoose.Types.Array<Regioni>;
}

const createWineDb = async (): Promise<IWine[]> => {
  const wineDb: WineDb[] = [];
  const wines = await fs.readFile('./data/vini.csv');
  const data = csvParse(wines, { relax_column_count: true });
  for (const wine of data) {
    const regioni: Regioni[] = [];
    if (wine[4].includes(' ')) {
      const splitRegioni = wine[4].split(' ');
      splitRegioni.map((regione: Regioni) => regioni.push(regione));
      wineDb.push({
        denominazioneVino: wine[1],
        espressioneComunitaria: wine[2],
        denominazioneZona: wine[3],
        regione: regioni as mongoose.Types.Array<Regioni>,
      });
    } else {
      wineDb.push({
        denominazioneVino: wine[1],
        espressioneComunitaria: wine[2],
        denominazioneZona: wine[3],
        regione: wine[4],
      });
    }
  }
  return wineDb;
};
//createWineDb();

export default createWineDb;
