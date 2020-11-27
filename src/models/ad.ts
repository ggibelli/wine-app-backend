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

export interface IAd {
  postedBy: IUserDoc['_id'];
  wineName?: string;
  wine?: IWineDoc['_id'];
  sottoZona?: string;
  menzione?: Menzione;
  metodoProduttivo?: MetodoProduttivo;
  vineyardName?: string;
  vineyard?: IVineyardDoc['_id'];
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
  negotiations?: Array<INegotiationDoc['_id']>; // trattative dell'annuncio, solo attive, solo graphql??
  viewedBy?: Array<IUserDoc['_id']>;
  typeAd: TypeAd;
  typeProduct: TypeProduct;
  isActive: boolean;
  datePosted: Date;
}

export interface AdGraphQl extends IAd {
  _id: string;
}

const adSchemaFields: Record<keyof IAd, any> = {
  postedBy: {
    type: Schema.Types.ObjectId,
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
    required() {
      return this.typeProduct === TypeProduct.ADWINE;
    },
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
    required() {
      return this.typeProduct === TypeProduct.ADGRAPE;
    },
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
    required() {
      return this.typeProduct === TypeProduct.ADWINE;
    },
  },
  litersTo: {
    type: Number,
    required() {
      return this.typeProduct === TypeProduct.ADWINE;
    },
  },
  kgFrom: {
    type: Number,
    required() {
      return this.typeProduct === TypeProduct.ADGRAPE;
    },
  },
  kgTo: {
    type: Number,
    required() {
      return this.typeProduct === TypeProduct.ADGRAPE;
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
      required: true,
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
  isActive: {
    type: Boolean,
    default: true,
  },
  datePosted: {
    type: Date,
    // `Date.now()` returns the current unix timestamp as a number
    default: Date.now,
  },
};

export interface IAdDoc extends IAd, Document {}

const adSchema = new Schema(adSchemaFields);

//adSchema.index({ 'createdBy': 1, 'typeAd': 1 }, { 'unique': true })

export const Ad = mongoose.model<IAdDoc>('Ad', adSchema);
