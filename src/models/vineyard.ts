/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import mongoose, { Schema, Document } from 'mongoose';

enum Colore {
  BIANCA = 'Bianca',
  ROSSA = 'Rossa',
}

export interface IVineyard extends Document {
  name: string;
  colore: Colore;
}

const vineyardSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  colore: {
    type: String,
    enum: ['Bianca', 'Rossa'],
  },
});

vineyardSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

export const Vineyard = mongoose.model<IVineyard>('Vineyard', vineyardSchema);
