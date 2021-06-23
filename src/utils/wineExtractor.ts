import fs from 'fs/promises';
import { Wine } from '../models/wine';
import { WineDocument } from '../interfaces/mongoose.gen';
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

interface IWine {
  Tipologia: string;
  Categoria: string;
  TipoVino: string;
  Vitigni: [string];
}

const createWineDb = async (): Promise<void> => {
  const wines = await fs.readFile('./data/viniFinale.json');
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const data: IWine[] = JSON.parse(wines.toString());
  const newWinePromises: WineDocument[] = [];
  data.forEach((wine) => {
    const newWine = new Wine({
      denominazioneVino: wine.Tipologia,
      tipoVino: wine.TipoVino,
      vitigni: wine.Vitigni,
      espressioneComunitaria: EspressioneComunitaria.DOP,
      denominazioneZona: wine.Tipologia.includes('DOCG')
        ? DenomZona.DOCG
        : DenomZona.DOC,
    });
    newWinePromises.push(newWine);
  });
  await Promise.all(newWinePromises.map((wine) => wine.save()));
  // for (const wine of data) {
  //   const newWine = new Wine({
  //     denominazioneVino: wine.Tipologia,
  //     tipoVino: wine.TipoVino,
  //     vitigni: wine.Vitigni,
  //     espressioneComunitaria: EspressioneComunitaria.DOP,
  //     denominazioneZona: wine.Tipologia.includes('DOCG')
  //       ? DenomZona.DOCG
  //       : DenomZona.DOC,
  //   });
  //   try {
  //     await newWine.save();
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }
};

export default createWineDb;
