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
import { IUser } from './user';
import { INegotiation } from './negotiation';
import { IWine } from './wine';
import { TypeAd } from '../types';
import { IVineyard } from './vineyard';
import { MetodoProduttivo } from '../types';

enum Menzione {
  CLASSICO = 'Classico',
  RISERVA = 'Riserva',
  SUPERIORE = 'Superiore',
  VIGNA = 'Vigna',
}

export interface IAd extends Document {
  postedBy: IUser['_id'] | IUser;
  wineName?: string;
  wine?: IWine['_id'] | IWine;
  sottoZona?: string;
  menzioneGeograficaAggiuntiva?: string;
  menzione?: Menzione;
  metodoProduttivo?: MetodoProduttivo;
  vineyardName?: string;
  vineyard?: IVineyard['_id'] | IVineyard;
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
  negotiations?: Array<INegotiation['_id'] | INegotiation>; // trattative dell'annuncio, solo attive, solo graphql??
  viewedBy?: Array<IUser['_id'] | IUser>;
  type: TypeAd;
  isActive: boolean;
  datePosted: Date;
}

const adSchema = new Schema({
  postedBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  wineName: {
    type: String,
    minlength: 3,
  },
  wine: {
    type: Schema.Types.ObjectId,
    ref: 'Wine',
  },
  sottoZona: {
    type: String,
    required: true,
  },
  menzioneGeograficaAggiuntiva: {
    type: String,
  },
  menzione: {
    type: String,
    enum: ['Classico', 'Riserva', 'Superiore', 'Vigna'],
  },
  metodoProduttivo: {
    type: String,
    enum: Object.values(METODOPRODUTTIVO),
  },
  vineyardName: {
    type: String,
    minlength: 3,
  },
  vineyard: {
    type: Schema.Types.ObjectId,
    ref: 'Vineyard',
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
  litersFrom: Number,
  litersTo: Number,
  kgFrom: Number,
  kgTo: Number,
  address: {
    via: {
      type: String,
      required: true,
      minlength: 5,
    },
    CAP: {
      type: String,
      required: true,
      minlength: 5,
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
  type: {
    type: String,
    enum: ['Sell', 'Buy'],
    required: true,
  },
  isActive: Boolean,
  datePosted: {
    type: Date,
    // `Date.now()` returns the current unix timestamp as a number
    default: Date.now,
  },
});

adSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

export const Ad = mongoose.model<IAd>('Ad', adSchema);
