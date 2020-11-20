/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import mongoose, { Schema, Document, HookNextFunction } from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';
import { Address } from '../types';
import { Province, Regioni } from '../utils/enumMongooseHelper';
import { IAdDoc } from './ad';
import { INegotiationDoc } from './negotiation';
import { IWineDoc } from './wine';
import { IReviewDoc } from './review';
import { IVineyardDoc } from './vineyard';
import { MetodoProduttivo } from '../types';
import { METODOPRODUTTIVO } from '../utils/enumMongooseHelper';

import bcrypt from 'bcryptjs';

const HASH_ROUNDS = 10;

interface ProducedWines {
  wine: IWineDoc['_id'] | IWineDoc;
  bottlesProduced: number;
  metodoProduttivo: MetodoProduttivo;
}

interface OwnedVineyards {
  vineyard: IVineyardDoc['_id'] | IVineyardDoc;
  tonsProduced: number;
  metodoProduttivo: MetodoProduttivo;
}

export interface IUser {
  email: string;
  firstName: string;
  lastName: string;
  passwordHash: string;
  pIva: string;
  phoneNumber: string;
  address: Address;
  isVerified: boolean;
  isPremium?: boolean;
  isAdmin: boolean;
  ads?: Array<IAdDoc['_id'] | IAdDoc>; // annunci postati dall'utente
  negotiations?: Array<INegotiationDoc['_id'] | INegotiationDoc>; // trattative dell'utente, attive e non, concluse e non
  reviews?: Array<IReviewDoc['_id'] | IReviewDoc>; // recensioni fatte e ricevute dall'utente
  adsRemaining?: number;
  dateCreated: Date;
  producedWines?: Array<ProducedWines>;
  ownedVineyards?: Array<OwnedVineyards>;
}

export interface IUserDoc extends IUser, Document {
  validatePassword(password: string): boolean;
}

const userSchemaFields: Record<keyof IUser, any> = {
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
  isVerified: {
    type: Boolean,
    required: true,
    default: false,
  },
  isPremium: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
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
};

const userSchema = new Schema(userSchemaFields);

userSchema.pre('save', async function (next: HookNextFunction) {
  // here we need to retype 'this' because by default it is
  // of type Document from which the 'IUser' interface is inheriting
  // but the Document does not know about our password property
  const thisObj = this as IUserDoc;

  if (!this.isModified('password')) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(HASH_ROUNDS);
    thisObj.passwordHash = await bcrypt.hash(thisObj.passwordHash, salt);
    return next();
  } catch (e) {
    return next(e);
  }
});

userSchema.plugin(mongooseUniqueValidator);

export const User = mongoose.model<IUserDoc>('User', userSchema);
