import { IAd } from '../models/ad';
import { TypeAd, TypeProduct, Province, Regioni } from '../types';

export interface AdTest extends IAd {
  _id: string;
}

const indirizzo = {
  via: 'asd',
  CAP: 123,
  comune: 'aaaa',
  provincia: Province.AG,
  regione: Regioni.ABRUZZO,
};

export function ads(): AdTest[] {
  return [
    {
      _id: '1234',
      postedBy: 123,
      wineName: 'Vino',
      wine: 321,
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
  ];
}
