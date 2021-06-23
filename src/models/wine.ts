import mongoose, { Schema } from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';
import {
  WineDocument,
  WineModel,
  WineSchema,
} from '../interfaces/mongoose.gen';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const wineSchema: WineSchema = new Schema({
  _id: { type: Schema.Types.ObjectId },
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
});

wineSchema.index({ denominazioneVino: 1 });
// @ts-ignore
wineSchema.plugin(mongooseUniqueValidator);
export const Wine: WineModel = mongoose.model<WineDocument, WineModel>(
  'Wine',
  wineSchema,
);
