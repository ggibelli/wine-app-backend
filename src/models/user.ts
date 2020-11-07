/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import mongoose, { Schema, Document } from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';
import { Address } from '../types';
import { Province, Regioni } from '../utils/enumMongooseHelper';
import { IAd } from './ad';
import { INegotiation } from './negotiation';
import { IWine } from './wine';
import { IReview } from './review';
import { IVineyard } from './vineyard';
import { MetodoProduttivo } from '../types';
import { METODOPRODUTTIVO } from '../utils/enumMongooseHelper';

interface ProducedWines {
  wine: IWine['_id'] | IWine;
  bottlesProduced: number;
  metodoProduttivo: MetodoProduttivo;
}

interface OwnedVineyards {
  vineyard: IVineyard['_id'] | IVineyard;
  tonsProduced: number;
  metodoProduttivo: MetodoProduttivo;
}

export interface IUser extends Document {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  passwordHash: string;
  pIva: string;
  phoneNumber: string;
  address: Address;
  verified: boolean;
  premium?: boolean;
  ads?: Array<IAd['_id'] | IAd>; // annunci postati dall'utente
  negotiations?: Array<INegotiation['_id'] | INegotiation>; // trattative dell'utente, attive e non, concluse e non
  reviews?: Array<IReview['_id'] | IReview>; // recensioni fatte e ricevute dall'utente
  adsRemaining?: number;
  dateCreated: Date;
  producedWines?: Array<ProducedWines>;
  ownedVineyards?: Array<OwnedVineyards>;
}

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    minlength: 3,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    minlength: 3,
    required: true,
  },
  phoneNumber: {
    type: String,
    unique: true,
    minlength: 10,
    required: true,
  },
  firstName: String,
  lastName: String,
  passwordHash: String,
  pIva: {
    type: String,
    unique: true,
    minlength: 11,
    required: true,
  },
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
  verified: {
    type: Boolean,
    required: true,
    default: false,
  },
  premium: {
    type: Boolean,
    default: false,
  },
  ads: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Ad',
    },
  ],
  negotiations: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Negotiation',
    },
  ],
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Review',
    },
  ],
  adsRemaining: Number,
  dateCreated: {
    type: Date,
    // `Date.now()` returns the current unix timestamp as a number
    default: Date.now,
  },
  producedWines: [
    {
      wine: {
        type: Schema.Types.ObjectId,
        ref: 'Wine',
      },
      bottlesProduced: Number,
      metodoProduttivo: {
        type: String,
        enum: Object.values(METODOPRODUTTIVO),
      },
    },
  ],
  ownedVineyards: [
    {
      vineyard: {
        type: Schema.Types.ObjectId,
        ref: 'Vineyard',
      },
      tonsProduced: Number,
      metodoProduttivo: {
        type: String,
        enum: Object.values(METODOPRODUTTIVO),
      },
    },
  ],
});

userSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordHash;
  },
});

userSchema.plugin(mongooseUniqueValidator);

export const User = mongoose.model<IUser>('User', userSchema);
