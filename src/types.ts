export interface Address {
  via?: string;
  // CAP?: string;
  comune: string;
  // provincia: Province;
  // regione: Regioni;
}

export enum TypeAd {
  SELL = 'SELL',
  BUY = 'BUY',
}

export enum MetodoProduttivo {
  CONVENZIONALE = 'CONVENZIONALE',
  BIOLOGICO = 'BIOLOGICO',
  BIODINAMICO = 'BIODINAMICO',
  NATURALE = 'NATURALE',
}

export enum TypeProduct {
  ADWINE = 'AdWine',
  ADGRAPE = 'AdGrape',
}

export enum EspressioneComunitaria {
  DOP = 'DOP',
  IGP = 'IGP',
  ND = 'ND',
}

export enum DenomZona {
  DOC = 'DOC',
  DOCG = 'DOCG',
  IGT = 'IGT',
  VARIETALE = 'VARIETALE',
  VINO = 'VINO',
}

export enum Menzione {
  CLASSICO = 'CLASSICO',
  RISERVA = 'RISERVA',
  SUPERIORE = 'SUPERIORE',
  VIGNA = 'VIGNA',
}

export enum QueryOrderBy {
  CreatedAtASC = 'createdAt_ASC',
  CreatedAtDESC = 'createdAt_DESC',
  PriceASC = 'price_ASC',
  priceDESC = 'price_DESC',
}

export interface Errors {
  text: string;
  name: string;
}

export enum Rating {
  'Useless' = 0.5,
  'Useless+' = 1,
  'Poor' = 1.5,
  'Poor+' = 2,
  'Ok' = 2.5,
  'Ok+' = 3,
  'Good' = 3.5,
  'Good+' = 4,
  'Excellent' = 4.5,
  'Excellent+' = 5,
}

export enum Colore {
  BIANCA = 'BIANCA',
  ROSSA = 'ROSSA',
}
