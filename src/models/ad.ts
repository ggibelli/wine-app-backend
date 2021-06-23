/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import mongoose, { Schema } from 'mongoose';
// import { Address } from '../types';
import METODOPRODUTTIVO from '../utils/enumMongooseHelper';
import { TypeAd, TypeProduct } from '../types';

import { AdModel, AdSchema, AdDocument } from '../interfaces/mongoose.gen';

const schema: AdSchema = new Schema({
  postedBy: {
    type: 'ObjectId',
    ref: 'User',
    required: true,
  },
  typeAd: {
    type: String,
    enum: [TypeAd.SELL, TypeAd.BUY],
    required: true,
  },
  typeProduct: {
    type: String,
    enum: [TypeProduct.ADWINE, TypeProduct.ADGRAPE],
    required: true,
  },
  wineName: {
    type: String,
    minlength: 3,
    
    index: true,
  },
  wine: {
    type: Schema.Types.ObjectId,
    ref: 'Wine',
    // required() {
    //   return this.typeProduct === TypeProduct.ADWINE;
    // },
  },
  sottoZona: {
    type: String,
  },
  menzione: {
    type: String,
    enum: ['CLASSICO', 'RISERVA', 'SUPERIORE', 'VIGNA'],
  },
  metodoProduttivo: {
    type: String,
    enum: Object.values(METODOPRODUTTIVO),
    required: true,
    default: 'CONVENZIONALE',
  },
  vineyardName: {
    type: String,
    minlength: 3,
    
    index: true,
  },
  vineyard: {
    type: Schema.Types.ObjectId,
    ref: 'Vineyard',
    // required() {
    //   return this.typeProduct === TypeProduct.ADGRAPE;
    // },
  },
  abv: Number,
  harvest: {
    type: Number,
    required: true,
  },
  priceFrom: {
    type: Number,
    required: true,
  },
  priceTo: {
    type: Number,
    required: true,
  },
  litersFrom: {
    type: Number,
    
  },
  litersTo: {
    type: Number,
    
  },
  kgFrom: {
    type: Number,
    
  },
  kgTo: {
    type: Number,
    
  },
  // address: {
  //   comune: {
  //     type: String,
  //     required: true,
  //   },
  //   provincia: {
  //     type: String,
  //     enum: Object.values(Province),
  //     required: true,
  //   },
  //   regione: {
  //     type: String,
  //     enum: Object.values(Regioni),
  //     required: true,
  //   },
  // },
  negotiations: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Negotiation',
    },
  ],
  viewedBy: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  savedBy: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  content: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  needsFollowUp: {
    type: Boolean,
    default: true,
  },
  datePosted: {
    type: Date,
    // `Date.now()` returns the current unix timestamp as a number
    default: Date.now,
  },
});

// const adSchema = new Schema(adSchemaFields);
schema.index({ wineName: 1, typeAd: 1 });

export const Ad: AdModel = mongoose.model<AdDocument, AdModel>('Ad', schema);
