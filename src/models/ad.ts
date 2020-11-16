/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import mongoose, { Schema, Document } from 'mongoose';
import { Address } from '../types';
import {
  Province,
  Regioni,
  METODOPRODUTTIVO,
} from '../utils/enumMongooseHelper';
import { IUserDoc } from './user';
import { INegotiationDoc } from './negotiation';
import { IWineDoc } from './wine';
import { TypeAd, TypeProduct, Menzione } from '../types';
import { IVineyardDoc } from './vineyard';
import { MetodoProduttivo } from '../types';
import { truncate } from 'lodash';

export interface IAd {
  postedBy: IUserDoc['_id'];
  wineName?: string;
  wine?: IWineDoc['_id'] | IWineDoc;
  sottoZona?: string;
  menzione?: Menzione;
  metodoProduttivo?: MetodoProduttivo;
  vineyardName?: string;
  vineyard?: IVineyardDoc['_id'] | IVineyardDoc;
  harvest: number;
  abv?: number;
  priceFrom: number; //se vendita priceFrom e priceTo settati a stesso numero
  priceTo: number;
  litersFrom?: number; //se vendite litersFrom e litersTo settati a stesso numero
  litersTo?: number;
  kgFrom?: number;
  kgTo?: number;
  content?: string;
  address: Address;
  negotiations?: Array<INegotiationDoc['_id'] | INegotiationDoc>; // trattative dell'annuncio, solo attive, solo graphql??
  viewedBy?: Array<IUserDoc['_id'] | IUserDoc>;
  typeAd: TypeAd;
  typeProduct: TypeProduct;
  isActive: boolean;
  datePosted: Date;
}

const adSchemaFields: Record<keyof IAd, any> = {
  postedBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  typeAd: {
    type: String,
    enum: ['Sell', 'Buy'],
    required: true,
  },
  typeProduct: {
    type: String,
    enum: ['Wine', 'Grape'],
    required: true,
  },
  wineName: {
    type: String,
    minlength: 3,
    required() {
      return this.typeProduct === 'Wine';
    },
    index: true,
  },
  wine: {
    type: Schema.Types.ObjectId,
    ref: 'Wine',
    required() {
      return this.typeProduct === 'Wine';
    },
  },
  sottoZona: {
    type: String,
    required() {
      return this.typeProduct === 'Wine';
    },
  },
  menzione: {
    type: String,
    enum: ['Classico', 'Riserva', 'Superiore', 'Vigna'],
  },
  metodoProduttivo: {
    type: String,
    enum: Object.values(METODOPRODUTTIVO),
    required: true,
    default: 'Convenzionale',
  },
  vineyardName: {
    type: String,
    minlength: 3,
    required() {
      return this.typeProduct === 'Grape';
    },
    index: true,
  },
  vineyard: {
    type: Schema.Types.ObjectId,
    ref: 'Vineyard',
    required() {
      return this.typeProduct === 'Grape';
    },
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
    required() {
      return this.typeProduct === 'Wine';
    },
  },
  litersTo: {
    type: Number,
    required() {
      return this.typeProduct === 'Wine';
    },
  },
  kgFrom: {
    type: Number,
    required() {
      return this.typeProduct === 'Grape';
    },
  },
  kgTo: {
    type: Number,
    required() {
      return this.typeProduct === 'Grape';
    },
  },
  address: {
    via: {
      type: String,
      required: true,
      minlength: 5,
    },
    CAP: {
      type: Number,
      required: true,
      minlength: 5,
    },
    comune: {
      type: String,
      required: true
    },
    provincia: {
      type: String,
      enum: Object.values(Province),
      required: true,
    },
    regione: {
      type: String,
      enum: Object.values(Regioni),
      required: true,
    },
  },
  negotiations: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Negotiation',
    },
  ],
  viewedBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  content: {
    type: String,
    required: true,
  },
  isActive: Boolean,
  datePosted: {
    type: Date,
    // `Date.now()` returns the current unix timestamp as a number
    default: Date.now,
  },
};

export interface IAdDoc extends Document, IAd {}

const adSchema = new Schema(adSchemaFields);

//adSchema.index({ 'createdBy': 1, 'typeAd': 1 }, { 'unique': true })

export const Ad = mongoose.model<IAdDoc>('Ad', adSchema);
