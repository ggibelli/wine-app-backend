import csvParse from 'csv-parse/lib/sync';

import fs from 'fs/promises';
import { DenomZona, EspressioneComunitaria, Regioni } from './src/types';

interface WineDb {
  wineName: string;
  espressioneComunitaria: EspressioneComunitaria;
  denominazioneZona: DenomZona;
  regione: Regioni[];
}

const wineDb: WineDb[] = [];

const createWineDb = async () => {
  const wines = await fs.readFile('./data/vini.csv');
  const data = csvParse(wines, { relax_column_count: true });
  for (let wine of data) {
    const regioni: Regioni[] = [];
    if (wine[4].includes(' ')) {
      const splitRegioni = wine[4].split(' ');
      splitRegioni.map((regione: Regioni) => regioni.push(regione));
      wineDb.push({
        wineName: wine[1],
        espressioneComunitaria: wine[2],
        denominazioneZona: wine[3],
        regione: regioni,
      });
    } else {
      wineDb.push({
        wineName: wine[1],
        espressioneComunitaria: wine[2],
        denominazioneZona: wine[3],
        regione: wine[4],
      });
    }
  }
};
createWineDb();

export default wineDb;

//console.log(wineDb);
