import mongoose, { Schema, Document } from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';
import { Regioni, EspressioneComunitaria, DenomZona } from '../types';
import { Regioni as MongooseRegioni } from '../utils/enumMongooseHelper';

export interface IWine {
  denominazioneVino: string;
  aka?: string;
  espressioneComunitaria: EspressioneComunitaria;
  denominazioneZona: DenomZona;
  regione: mongoose.Types.Array<Regioni>;
}

export interface WineGraphQl extends IWine {
  _id: mongoose.Types.ObjectId;
}

export interface IWineDoc extends IWine, Document {}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  regione: [
    {
      type: String,
      enum: Object.values(MongooseRegioni),
      required: true,
    },
  ],
};

const wineSchema = new Schema(wineSchemaFields);

wineSchema.index({ denominazioneVino: 1 });

wineSchema.plugin(mongooseUniqueValidator);

export const Wine = mongoose.model<IWineDoc>('Wine', wineSchema);
