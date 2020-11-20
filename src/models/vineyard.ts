/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import mongoose, { Schema, Document } from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';

enum Colore {
  BIANCA = 'Bianca',
  ROSSA = 'Rossa',
}

export interface IVineyard {
  name: string;
  colore: Colore;
}

export interface IVineyardDoc extends IVineyard, Document {}

const vineyardSchemaFields: Record<keyof IVineyard, any> = {
  name: {
    type: String,
    required: true,
  },
  colore: {
    type: String,
    enum: ['Bianca', 'Rossa'],
  },
};

const vineyardSchema = new Schema(vineyardSchemaFields);

vineyardSchema.plugin(mongooseUniqueValidator);

export const Vineyard = mongoose.model<IVineyardDoc>(
  'Vineyard',
  vineyardSchema
);
