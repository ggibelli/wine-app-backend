import { IAd } from '../models/ad';
import { IUser } from '../models/user';
import { TypeAd, TypeProduct, Province, Regioni } from '../types';
import { ObjectId } from 'mongodb';

export type AdTest = Omit<IAd, 'postedBy'>;

export interface UserTests extends IUser {
  _id: string;
}

const indirizzo = {
  via: 'asd asddasd',
  CAP: 12345,
  comune: 'aaaa',
  provincia: Province.AG,
  regione: Regioni.ABRUZZO,
};

export function ads(): AdTest[] {
  return [
    {
      //_id: '1234',
      //postedBy: '123',
      wineName: 'Vino',
      wine: new ObjectId(),
      sottoZona: 'Sotto',

      harvest: 2020,
      abv: 12.0,
      priceFrom: 1.0,
      priceTo: 1.5,
      litersFrom: 500,
      litersTo: 600,
      content: 'wow',
      address: indirizzo,
      typeAd: TypeAd.BUY,
      typeProduct: TypeProduct.ADWINE,
      datePosted: new Date('December 17, 1995 03:24:00'),
      isActive: true,
    },
    {
      //_id: '1234',
      //postedBy: '333',
      wineName: 'Vino vendo',
      wine: new ObjectId(),
      sottoZona: 'Sotto',

      harvest: 2020,
      abv: 12.0,
      priceFrom: 1.0,
      priceTo: 1.5,
      litersFrom: 500,
      litersTo: 600,
      content: 'waaow',
      address: indirizzo,
      typeAd: TypeAd.SELL,
      typeProduct: TypeProduct.ADWINE,
      datePosted: new Date('December 17, 1995 03:24:20'),
      isActive: true,
    },
    {
      //_id: '1234',
      //postedBy: '344',
      vineyardName: 'Uva compro',
      vineyard: new ObjectId(),

      harvest: 2010,
      abv: 12.5,
      priceFrom: 1.0,
      priceTo: 1.5,
      kgFrom: 500,
      kgTo: 600,
      content: 'ostia',
      address: indirizzo,
      typeAd: TypeAd.BUY,
      typeProduct: TypeProduct.ADGRAPE,
      datePosted: new Date('December 17, 1995 02:24:00'),
      isActive: true,
    },
    {
      //_id: '1234',
      //postedBy: '555',
      vineyardName: 'Uva vendita',
      vineyard: new ObjectId(),
      harvest: 2020,
      abv: 12.0,
      priceFrom: 1.0,
      priceTo: 1.5,
      kgFrom: 500,
      kgTo: 600,
      content: 'lol',
      address: indirizzo,
      typeAd: TypeAd.SELL,
      typeProduct: TypeProduct.ADGRAPE,
      datePosted: new Date('December 27, 1995 03:24:00'),
      isActive: true,
    },
  ];
}

export function users(): IUser[] {
  return [
    {
      //_id: '123',
      email: 'gio@prova.it',
      firstName: 'Giovanni',

      lastName: 'Gibelli',
      password: 'giovanni',
      pIva: '12345678901',
      phoneNumber: '1234567890',
      address: indirizzo,
      isVerified: true,
      isPremium: true,
      isAdmin: true,
      //ads: ads(),
      adsRemaining: 0,
      dateCreated: new Date('December 27, 1995 03:24:00'),
    },
  ];
}
