/* eslint-disable @typescript-eslint/no-unsafe-return */
import mongoose, { Schema, Document, HookNextFunction } from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';
import { Address } from '../types';
import { Province, Regioni } from '../utils/enumMongooseHelper';
import { IAdDoc } from './ad';
import { IWineDoc } from './wine';
import { IReviewDoc } from './review';
import { IVineyardDoc } from './vineyard';
import { MetodoProduttivo } from '../types';
import { METODOPRODUTTIVO } from '../utils/enumMongooseHelper';
import bcrypt from 'bcrypt';
import { IMessageDoc } from './message';
import { Negotiation } from '../generated/graphql';

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

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface IUser {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  pIva: string;
  phoneNumber: string;
  address: Address;
  coordinates?: Coordinates;
  isVerified: boolean;
  isPremium?: boolean;
  isAdmin: boolean;
  hideContact: boolean;
  ads?: mongoose.Types.Array<IAdDoc['_id'] | IAdDoc>; // annunci postati dall'utente
  savedAds?: mongoose.Types.Array<IAdDoc['_id'] | IAdDoc>; // annunci postati dall'utente
  messages?: mongoose.Types.Array<IMessageDoc['_id'] | IMessageDoc>;
  negotiations?: mongoose.Types.Array<Negotiation>; // trattative dell'utente, attive e non, concluse e non
  reviews?: mongoose.Types.Array<IReviewDoc['_id'] | IReviewDoc>; // recensioni fatte e ricevute dall'utente
  adsRemaining?: number;
  dateCreated: Date;
  producedWines?: mongoose.Types.Array<ProducedWines>;
  ownedVineyards?: mongoose.Types.Array<OwnedVineyards>;
}

export interface IUserDoc extends IUser, Document {
  validatePassword(password: string): Promise<boolean>;
}

export interface UserGraphQl extends IUser {
  validatePassword(password: string): Promise<boolean>;
  _id: mongoose.Types.ObjectId;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  password: String,
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
    comune: { type: String, required: true, minlength: 5 },
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
  coordinates: {
    latitude: Number,
    longitude: Number,
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
  hideContact: {
    type: Boolean,
    default: true,
  },
  ads: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Ad',
    },
  ],
  savedAds: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Ad',
    },
  ],
  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Message',
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
    thisObj.password = await bcrypt.hash(thisObj.password, salt);
    return next();
  } catch (e) {
    return next(e);
  }
});

userSchema.methods.validatePassword = async function (pass: string) {
  return bcrypt.compare(pass, this.password);
};

userSchema.plugin(mongooseUniqueValidator);

export const User = mongoose.model<IUserDoc>('User', userSchema);
