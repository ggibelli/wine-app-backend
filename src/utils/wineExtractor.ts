/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import fs from 'fs/promises';
import { Wine } from '../models/wine';
import { DenomZona, EspressioneComunitaria } from '../types';
// import {
//   DenomZona,
//   EspressioneComunitaria,
// } from '../generated/graphql';
// import mongoose from 'mongoose';

// interface WineDb {
//   denominazioneVino: string;
//   tipoVino: string;
//   espressioneComunitaria: EspressioneComunitaria;
//   denominazioneZona: DenomZona;
//   vitigni?: mongoose.Types.Array<string>;
// }

interface Wine {
  Tipologia: string;
  Categoria: string;
  TipoVino: string;
  Vitigni: [string];
}

const createWineDb = async (): Promise<void> => {
  const wines = await fs.readFile('./data/viniFinale.json');
  const data: Wine[] = JSON.parse(wines.toString());
  for (const wine of data) {
    const newWine = new Wine({
      denominazioneVino: wine.Tipologia,
      tipoVino: wine.TipoVino,
      vitigni: wine.Vitigni,
      espressioneComunitaria: EspressioneComunitaria.DOP,
      denominazioneZona: wine.Tipologia.includes('DOCG')
        ? DenomZona.DOCG
        : DenomZona.DOC,
    });
    try {
      await newWine.save();
    } catch (e) {
      console.log(e);
    }
  }
};

export default createWineDb;
