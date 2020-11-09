/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import mongoose, { Schema, Document } from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';
import { Regioni } from '../types';
import { Regioni as MongooseRegioni } from '../utils/enumMongooseHelper';

enum EspressioneComunitaria {
  DOP = 'DOP',
  IGP = 'IGP',
  ND = 'ND',
}

enum DenomZona {
  DOC = 'DOC',
  DOCG = 'DOCG',
  IGT = 'IGT',
  VARIETALE = 'Vino varietale',
  VINO = 'Vino generico',
}

export interface IWine {
  denominazioneVino: string;
  aka?: string;
  espressioneComunitaria: EspressioneComunitaria;
  denominazioneZona: DenomZona;
  regione: Regioni;
}

export interface IWineDoc extends Document {}

const wineSchemaFields: Record<keyof IWine, any> = {
  denominazioneVino: {
    type: String,
    required: true,
    minlength: 5,
    unique: true,
  },
  aka: String,
  espressioneComunitaria: {
    type: String,
    enum: ['DOP', 'IGP', 'ND'],
  },
  denominazioneZona: {
    type: String,
    enum: ['DOC', 'DOCG', 'IGT', 'Vino varietale', 'Vino generico'],
  },
  regione: {
    type: String,
    enum: Object.values(MongooseRegioni),
    required: true,
  },
};

const wineSchema = new Schema(wineSchemaFields);

wineSchema.plugin(mongooseUniqueValidator);

export const Wine = mongoose.model<IWineDoc>('Wine', wineSchema);
