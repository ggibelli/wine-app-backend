import mongoose, { Schema } from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';
import {
  VineyardDocument,
  VineyardModel,
  VineyardSchema,
} from '../interfaces/mongoose.gen';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const vineyardSchema: VineyardSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  colore: {
    type: String,
    enum: ['BIANCA', 'ROSSA'],
  },
});
// @ts-ignore
vineyardSchema.plugin(mongooseUniqueValidator);

export const Vineyard: VineyardModel = mongoose.model<
VineyardDocument,
VineyardModel
>('Vineyard', vineyardSchema);
