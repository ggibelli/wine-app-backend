export enum Province {
  AG = 'AG',
  AL = 'AL',
  AN = 'AN',
  AO = 'AO',
  AP = 'AP',
  AQ = 'AQ',
  AR = 'AR',
  AT = 'AT',
  AV = 'AV',
  BA = 'BA',
  BG = 'BG',
  BI = 'BI',
  BL = 'BL',
  BN = 'BN',
  BO = 'BO',
  BR = 'BR',
  BS = 'BS',
  BT = 'BT',
  BZ = 'BZ',
  CA = 'CA',
  CB = 'CB',
  CE = 'CE',
  CH = 'CH',
  CL = 'CL',
  CN = 'CN',
  CO = 'CO',
  CR = 'CR',
  CS = 'CS',
  CT = 'CT',
  CZ = 'CZ',
  EN = 'EN',
  FC = 'FC',
  FE = 'FE',
  FG = 'FG',
  FI = 'FI',
  FM = 'FM',
  FR = 'FR',
  GE = 'GE',
  GO = 'GO',
  GR = 'GR',
  IM = 'IM',
  IS = 'IS',
  KR = 'KR',
  LC = 'LC',
  LE = 'LE',
  LI = 'LI',
  LO = 'LO',
  LT = 'LT',
  LU = 'LU',
  MB = 'MB',
  MC = 'MC',
  ME = 'ME',
  MI = 'MI',
  MN = 'MN',
  MO = 'MO',
  MS = 'MS',
  MT = 'MT',
  NA = 'NA',
  NO = 'NO',
  NU = 'NU',
  OR = 'OR',
  PA = 'PA',
  PC = 'PC',
  PD = 'PD',
  PE = 'PE',
  PG = 'PG',
  PI = 'PI',
  PN = 'PN',
  PO = 'PO',
  PR = 'PR',
  PT = 'PT',
  PU = 'PU',
  PV = 'PV',
  PZ = 'PZ',
  RA = 'RA',
  RC = 'RC',
  RE = 'RE',
  RG = 'RG',
  RI = 'RI',
  RM = 'RM',
  RN = 'RN',
  RO = 'RO',
  SA = 'SA',
  SI = 'SI',
  SO = 'SO',
  SP = 'SP',
  SR = 'SR',
  SS = 'SS',
  SU = 'SU',
  SV = 'SV',
  TA = 'TA',
  TE = 'TE',
  TN = 'TN',
  TO = 'TO',
  TP = 'TP',
  TR = 'TR',
  TS = 'TS',
  TV = 'TV',
  UD = 'UD',
  VA = 'VA',
  VB = 'VB',
  VC = 'VC',
  VE = 'VE',
  VI = 'VI',
  VR = 'VR',
  VT = 'VT',
  VV = 'VV',
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
  TRENTINO = 'TRENTINO',
  TRENTO = 'TRENTO',
  UMBRIA = 'UMBRIA',
  VALDAOSTA = 'VALDAOSTA',
  VENETO = 'VENETO',
}

export interface Address {
  via: string;
  CAP: string;
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
