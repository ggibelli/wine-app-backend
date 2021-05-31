import mongoose, { Schema, Document } from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';
import { EspressioneComunitaria, DenomZona } from '../types';

export interface IWine {
  denominazioneVino: string;
  tipoVino?: string;
  espressioneComunitaria: EspressioneComunitaria;
  denominazioneZona: DenomZona;
  vitigni: mongoose.Types.Array<string>;
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
    minlength: 2,
    unique: true,
  },
  tipoVino: String,
  espressioneComunitaria: {
    type: String,
    enum: ['DOP', 'IGP', 'ND'],
  },
  denominazioneZona: {
    type: String,
    enum: ['DOC', 'DOCG', 'IGT', 'Vino varietale', 'Vino generico'],
  },
  vitigni: [
    {
      type: String,
    },
  ],
};

const wineSchema = new Schema(wineSchemaFields);

wineSchema.index({ denominazioneVino: 1 });

wineSchema.plugin(mongooseUniqueValidator);

export const Wine = mongoose.model<IWineDoc>('Wine', wineSchema);
