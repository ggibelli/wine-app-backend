import mongoose, { Schema, Document } from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';

import { Colore } from '../types';

export interface IVineyard {
  name: string;
  colore?: Colore;
}

export interface IVineyardDoc extends IVineyard, Document {}

export interface VineyardGraphQl extends IVineyard {
  _id: mongoose.Types.ObjectId;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const vineyardSchemaFields: Record<keyof IVineyard, any> = {
  name: {
    type: String,
    required: true,
  },
  colore: {
    type: String,
    enum: ['BIANCA', 'ROSSA'],
  },
};

const vineyardSchema = new Schema(vineyardSchemaFields);

vineyardSchema.plugin(mongooseUniqueValidator);

export const Vineyard = mongoose.model<IVineyardDoc>(
  'Vineyard',
  vineyardSchema
);
