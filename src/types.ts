export enum Province {
  AG = 'AG',
  AL = 'AL',
  AN = 'AN',
  AO = 'AO',
  AR = 'AR',
  AP = 'AP',
  AT = 'AT',
  AV = 'AV',
  BA = 'BA',
  BL = 'BL',
  BN = 'BN',
  BG = 'BG',
  BI = 'BI',
  BO = 'BO',
  BZ = 'BZ',
  BS = 'BS',
  BR = 'BR',
  CA = 'CA',
  CL = 'CL',
  CB = 'CB',
  CE = 'CE',
  CT = 'CT',
  CZ = 'CZ',
  CH = 'CH',
  CO = 'CO',
  CS = 'CS',
  CR = 'CR',
  KR = 'KR',
  CN = 'CN',
  EN = 'EN',
  FM = 'FM',
  FE = 'FE',
  FI = 'FI',
  FG = 'FG',
  FO = 'FO',
  FC = 'FC',
  FR = 'FR',
  GE = 'GE',
  GO = 'GO',
  GR = 'GR',
  IM = 'IM',
  IS = 'IS',
  SP = 'SP',
  AQ = 'AQ',
  LT = 'LT',
  LE = 'LE',
  LC = 'LC',
  LI = 'LI',
  LO = 'LO',
  LU = 'LU',
  MC = 'MC',
  MN = 'MN',
  MS = 'MS',
  MT = 'MT',
  ME = 'ME',
  MI = 'MI',
  MO = 'MO',
  MB = 'MB',
  NA = 'NA',
  NO = 'NO',
  NU = 'NU',
  OR = 'OR',
  PD = 'PD',
  PA = 'PA',
  PR = 'PR',
  PV = 'PV',
  PG = 'PG',
  PS = 'PS',
  PU = 'PU',
  PE = 'PE',
  PC = 'PC',
  PI = 'PI',
  PT = 'PT',
  PN = 'PN',
  PZ = 'PZ',
  PO = 'PO',
  RG = 'RG',
  RA = 'RA',
  RC = 'RC',
  RE = 'RE',
  RI = 'RI',
  RN = 'RN',
  RM = 'RM',
  RO = 'RO',
  SA = 'SA',
  SS = 'SS',
  SV = 'SV',
  SI = 'SI',
  SR = 'SR',
  SO = 'SO',
  TA = 'TA',
  TE = 'TE',
  TR = 'TR',
  TO = 'TO',
  TP = 'TP',
  TN = 'TN',
  TV = 'TV',
  TS = 'TS',
  UD = 'UD',
  VA = 'VA',
  VE = 'VE',
  VB = 'VB',
  VC = 'VC',
  VR = 'VR',
  VV = 'VV',
  VI = 'VI',
  VT = 'VT',
}

export enum Regioni {
  ABRUZZO = 'ABRUZZO',
  BASILICATA = 'BASILICATA',
  CALABRIA = 'CALABRIA',
  CAMPANIA = 'CAMPANIA',
  EMILIA = 'EMILIA',
  FRIULI = 'FRIULI',
  LAZIO = 'LAZIO',
  LIGURIA = 'LIGURIA',
  LOMBARDIA = 'LOMBARDIA',
  MARCHE = 'MARCHE',
  MOLISE = 'MOLISE',
  PIEMONTE = 'PIEMONTE',
  PUGLIA = 'PUGLIA',
  SARDEGNA = 'SARDEGNA',
  SICILIA = 'SICILIA',
  TOSCANA = 'TOSCANA',
  BOLZANO = 'BOLZANO',
  TRENTO = 'TRENTO',
  UMBRIA = 'UMBRIA',
  VALDAOSTA = 'VALDAOSTA',
  VENETO = 'VENETO',
}

export interface Address {
  via: string;
  CAP: number;
  comune: string;
  provincia: Province;
  regione: Regioni;
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
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  price_ASC = 'price_ASC',
  price_DESC = 'price_DESC',
}

export interface Errors {
  text: string;
  name: string;
}

export enum Rating {
  POOR = 'POOR',
  AVERAGE = 'AVERAGE',
  OK = 'OK',
  GOOD = 'GOOD',
  PERFECT = 'PERFECT',
}

export enum Colore {
  BIANCA = 'BIANCA',
  ROSSA = 'ROSSA',
}
