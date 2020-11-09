import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { IUser } from '../models/user';
import { IAd } from '../models/ad';
import { IMessage } from '../models/message';
import { INegotiation } from '../models/negotiation';
import { IReview } from '../models/review';
import { IVineyard } from '../models/vineyard';
import { IWine } from '../models/wine'
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Address = {
  __typename?: 'Address';
  via: Scalars['String'];
  CAP: Scalars['Int'];
  provincia: Scalars['String'];
  regione: Scalars['String'];
};

export type AddressInput = {
  via: Scalars['String'];
  CAP: Scalars['Int'];
  provincia: Scalars['String'];
  regione: Scalars['String'];
};

export type AdInput = {
  wine?: Maybe<Scalars['ID']>;
  sottoZona?: Maybe<Scalars['String']>;
  menzioneGeograficaAggiuntiva?: Maybe<Scalars['String']>;
  menzione?: Maybe<Menzione>;
  metodoProduttivo?: Maybe<MetodoProduttivo>;
  vineyard?: Maybe<Scalars['ID']>;
  harvest: Scalars['Int'];
  abv?: Maybe<Scalars['Float']>;
  priceFrom: Scalars['Float'];
  priceTo: Scalars['Float'];
  litersFrom?: Maybe<Scalars['Int']>;
  litersTo?: Maybe<Scalars['Int']>;
  kgFrom?: Maybe<Scalars['Int']>;
  kgTo?: Maybe<Scalars['Int']>;
  content: Scalars['String'];
  address: AddressInput;
  type: Type;
  isActive: Scalars['Boolean'];
};

export type Ad = {
  __typename?: 'Ad';
  _id: Scalars['ID'];
  postedBy: User;
  wineName?: Maybe<Scalars['String']>;
  wine?: Maybe<Wine>;
  sottoZona?: Maybe<Scalars['String']>;
  menzioneGeograficaAggiuntiva?: Maybe<Scalars['String']>;
  menzione?: Maybe<Menzione>;
  metodoProduttivo?: Maybe<MetodoProduttivo>;
  vineyardName?: Maybe<Scalars['String']>;
  vineyard?: Maybe<Vineyard>;
  harvest: Scalars['Int'];
  abv?: Maybe<Scalars['Float']>;
  priceFrom: Scalars['Float'];
  priceTo: Scalars['Float'];
  litersFrom?: Maybe<Scalars['Int']>;
  litersTo?: Maybe<Scalars['Int']>;
  kgFrom?: Maybe<Scalars['Int']>;
  kgTo?: Maybe<Scalars['Int']>;
  content: Scalars['String'];
  address: Address;
  /** negotiations: [Negotiation] */
  activeNegotiations?: Maybe<Scalars['Int']>;
  /** viewedBy: [User] */
  numberViews?: Maybe<Scalars['Int']>;
  type: Type;
  isActive: Scalars['Boolean'];
  /** datePosted: Date! */
  dateFormatted?: Maybe<Scalars['Date']>;
};

export enum Province {
  Ag = 'AG',
  Al = 'AL',
  An = 'AN',
  Ao = 'AO',
  Ar = 'AR',
  Ap = 'AP',
  At = 'AT',
  Av = 'AV',
  Ba = 'BA',
  Bl = 'BL',
  Bn = 'BN',
  Bg = 'BG',
  Bi = 'BI',
  Bo = 'BO',
  Bz = 'BZ',
  Bs = 'BS',
  Br = 'BR',
  Ca = 'CA',
  Cl = 'CL',
  Cb = 'CB',
  Ce = 'CE',
  Ct = 'CT',
  Cz = 'CZ',
  Ch = 'CH',
  Co = 'CO',
  Cs = 'CS',
  Cr = 'CR',
  Kr = 'KR',
  Cn = 'CN',
  En = 'EN',
  Fm = 'FM',
  Fe = 'FE',
  Fi = 'FI',
  Fg = 'FG',
  Fo = 'FO',
  Fc = 'FC',
  Fr = 'FR',
  Ge = 'GE',
  Go = 'GO',
  Gr = 'GR',
  Im = 'IM',
  Is = 'IS',
  Sp = 'SP',
  Aq = 'AQ',
  Lt = 'LT',
  Le = 'LE',
  Lc = 'LC',
  Li = 'LI',
  Lo = 'LO',
  Lu = 'LU',
  Mc = 'MC',
  Mn = 'MN',
  Ms = 'MS',
  Mt = 'MT',
  Me = 'ME',
  Mi = 'MI',
  Mo = 'MO',
  Mb = 'MB',
  Na = 'NA',
  No = 'NO',
  Nu = 'NU',
  Or = 'OR',
  Pd = 'PD',
  Pa = 'PA',
  Pr = 'PR',
  Pv = 'PV',
  Pg = 'PG',
  Ps = 'PS',
  Pu = 'PU',
  Pe = 'PE',
  Pc = 'PC',
  Pi = 'PI',
  Pt = 'PT',
  Pn = 'PN',
  Pz = 'PZ',
  Po = 'PO',
  Rg = 'RG',
  Ra = 'RA',
  Rc = 'RC',
  Re = 'RE',
  Ri = 'RI',
  Rn = 'RN',
  Rm = 'RM',
  Ro = 'RO',
  Sa = 'SA',
  Ss = 'SS',
  Sv = 'SV',
  Si = 'SI',
  Sr = 'SR',
  So = 'SO',
  Ta = 'TA',
  Te = 'TE',
  Tr = 'TR',
  To = 'TO',
  Tp = 'TP',
  Tn = 'TN',
  Tv = 'TV',
  Ts = 'TS',
  Ud = 'UD',
  Va = 'VA',
  Ve = 'VE',
  Vb = 'VB',
  Vc = 'VC',
  Vr = 'VR',
  Vv = 'VV',
  Vi = 'VI',
  Vt = 'VT'
}

export enum Regioni {
  Abruzzo = 'ABRUZZO',
  Basilicata = 'BASILICATA',
  Calabria = 'CALABRIA',
  Campania = 'CAMPANIA',
  Emilia = 'EMILIA',
  Friuli = 'FRIULI',
  Lazio = 'LAZIO',
  Liguria = 'LIGURIA',
  Lombardia = 'LOMBARDIA',
  Marche = 'MARCHE',
  Molise = 'MOLISE',
  Piemonte = 'PIEMONTE',
  Puglia = 'PUGLIA',
  Sardegna = 'SARDEGNA',
  Sicilia = 'SICILIA',
  Toscana = 'TOSCANA',
  Bolzano = 'BOLZANO',
  Trento = 'TRENTO',
  Umbria = 'UMBRIA',
  Valdaosta = 'VALDAOSTA',
  Veneto = 'VENETO'
}

export enum Type {
  Sell = 'SELL',
  Buy = 'BUY'
}

export enum Menzione {
  Classico = 'CLASSICO',
  Riserva = 'RISERVA',
  Superiore = 'SUPERIORE',
  Vigna = 'VIGNA'
}

export enum MetodoProduttivo {
  Convenzionale = 'CONVENZIONALE',
  Biologico = 'BIOLOGICO',
  Biodinamico = 'BIODINAMICO',
  Naturale = 'NATURALE',
  Vegano = 'VEGANO'
}

export enum Rating {
  Poor = 'POOR',
  Average = 'AVERAGE',
  Ok = 'OK',
  Good = 'GOOD',
  Perfect = 'PERFECT'
}

export enum Colore {
  Bianca = 'BIANCA',
  Rossa = 'ROSSA'
}

export enum EspressioneComunitaria {
  Dop = 'DOP',
  Igp = 'IGP',
  Nd = 'ND'
}

export enum DenomZona {
  Doc = 'DOC',
  Docg = 'DOCG',
  Igt = 'IGT',
  Varietale = 'VARIETALE',
  Vino = 'VINO'
}

export type MessageInput = {
  content: Scalars['String'];
  sentTo: Scalars['ID'];
};

export type Message = {
  __typename?: 'Message';
  _id: Scalars['ID'];
  content: Scalars['String'];
  sentBy: User;
  sentTo: User;
  /** dateSent: Date! */
  dateFormatted?: Maybe<Scalars['Date']>;
};

export type Token = {
  __typename?: 'Token';
  value: Scalars['String'];
};

export type MutationResponse = {
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
};

export type AdResponse = MutationResponse & {
  __typename?: 'AdResponse';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
  ad?: Maybe<Ad>;
};

export type MessageResponse = MutationResponse & {
  __typename?: 'MessageResponse';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
  messageSent?: Maybe<Message>;
};

export type NegotiationResponse = MutationResponse & {
  __typename?: 'NegotiationResponse';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
  negotiation?: Maybe<Negotiation>;
};

export type ReviewResponse = MutationResponse & {
  __typename?: 'ReviewResponse';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
  review?: Maybe<Review>;
};

export type UserResponse = MutationResponse & {
  __typename?: 'UserResponse';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
  user?: Maybe<User>;
};

export type LoginResponse = MutationResponse & {
  __typename?: 'LoginResponse';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
  token?: Maybe<Token>;
};

export type VineyardResponse = MutationResponse & {
  __typename?: 'VineyardResponse';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
  vineyard?: Maybe<Vineyard>;
};

export type WineResponse = MutationResponse & {
  __typename?: 'WineResponse';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
  wine?: Maybe<Wine>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAd?: Maybe<AdResponse>;
  updateAd?: Maybe<AdResponse>;
  createMessage?: Maybe<MessageResponse>;
  createNegotiation?: Maybe<NegotiationResponse>;
  updateNegotiation?: Maybe<NegotiationResponse>;
  createReview?: Maybe<ReviewResponse>;
  updateReview?: Maybe<ReviewResponse>;
  createUser?: Maybe<UserResponse>;
  updateUser?: Maybe<UserResponse>;
  login?: Maybe<LoginResponse>;
  createVineyard?: Maybe<VineyardResponse>;
  updateVineyard?: Maybe<VineyardResponse>;
  createWine?: Maybe<WineResponse>;
  updateWine?: Maybe<WineResponse>;
};


export type MutationCreateAdArgs = {
  ad?: Maybe<AdInput>;
};


export type MutationUpdateAdArgs = {
  ad?: Maybe<AdInput>;
  id: Scalars['ID'];
};


export type MutationCreateMessageArgs = {
  message?: Maybe<MessageInput>;
};


export type MutationCreateNegotiationArgs = {
  negotiation?: Maybe<NegotiationInput>;
};


export type MutationUpdateNegotiationArgs = {
  negotiation?: Maybe<NegotiationInput>;
  id: Scalars['ID'];
};


export type MutationCreateReviewArgs = {
  review?: Maybe<ReviewInput>;
};


export type MutationUpdateReviewArgs = {
  review?: Maybe<ReviewInput>;
  id: Scalars['ID'];
};


export type MutationCreateUserArgs = {
  user?: Maybe<UserInput>;
};


export type MutationUpdateUserArgs = {
  user?: Maybe<UserInput>;
  id: Scalars['ID'];
};


export type MutationLoginArgs = {
  mail: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCreateVineyardArgs = {
  vineyard?: Maybe<VineyardInput>;
};


export type MutationUpdateVineyardArgs = {
  vineyard?: Maybe<VineyardInput>;
  id: Scalars['ID'];
};


export type MutationCreateWineArgs = {
  wine?: Maybe<WineInput>;
};


export type MutationUpdateWineArgs = {
  wine?: Maybe<WineInput>;
  id: Scalars['ID'];
};

export type NegotiationInput = {
  ad: Scalars['ID'];
  forUserAd: Scalars['ID'];
  messages?: Maybe<Array<Scalars['ID']>>;
  isConcluded: Scalars['Boolean'];
};

export type Negotiation = {
  __typename?: 'Negotiation';
  _id: Scalars['ID'];
  createdBy: User;
  ad: Ad;
  forUserAd: User;
  messages?: Maybe<Array<Message>>;
  isConcluded: Scalars['Boolean'];
  /** dateCreated: Date! */
  dateFormatted?: Maybe<Scalars['Date']>;
};

export type Query = {
  __typename?: 'Query';
  ads?: Maybe<Array<Ad>>;
  reviews?: Maybe<Array<Review>>;
  negotiations?: Maybe<Array<Negotiation>>;
  users: Array<User>;
  user?: Maybe<User>;
  wines?: Maybe<Array<Wine>>;
  wine?: Maybe<Wine>;
  vineyards?: Maybe<Array<Vineyard>>;
  vineyard?: Maybe<Vineyard>;
  me?: Maybe<User>;
};


export type QueryAdsArgs = {
  _id: Scalars['ID'];
};


export type QueryReviewsArgs = {
  _id: Scalars['ID'];
};


export type QueryNegotiationsArgs = {
  _id: Scalars['ID'];
};


export type QueryUserArgs = {
  _id: Scalars['String'];
};


export type QueryWinesArgs = {
  name?: Maybe<Scalars['String']>;
  espressioneComunitaria?: Maybe<Scalars['String']>;
  denomZona?: Maybe<Scalars['String']>;
  regione?: Maybe<Scalars['String']>;
};


export type QueryWineArgs = {
  _id: Scalars['ID'];
};


export type QueryVineyardsArgs = {
  name?: Maybe<Scalars['String']>;
  colore?: Maybe<Scalars['String']>;
};


export type QueryVineyardArgs = {
  _id: Scalars['ID'];
};

export type ReviewInput = {
  negotiation: Scalars['ID'];
  forUserAd: Scalars['ID'];
  rating: Scalars['ID'];
  content: Scalars['String'];
  type: Type;
};

export type Review = {
  __typename?: 'Review';
  _id: Scalars['ID'];
  createdBy: User;
  negotiation: Negotiation;
  forUserAd: User;
  rating: Rating;
  /** dateCreated: Date! */
  dateFormatted?: Maybe<Scalars['Date']>;
  content: Scalars['String'];
  type: Type;
};


export type Subscription = {
  __typename?: 'Subscription';
  messageSent: Message;
  adPosted: Ad;
};

export type ProducedWines = {
  __typename?: 'ProducedWines';
  wine: Wine;
  bottlesProduced?: Maybe<Scalars['Int']>;
  metodoProduttivo?: Maybe<MetodoProduttivo>;
};

export type OwnedVineyards = {
  __typename?: 'OwnedVineyards';
  vineyard: Vineyard;
  tonsProduced?: Maybe<Scalars['Int']>;
  metodoProduttivo?: Maybe<MetodoProduttivo>;
};

export type ProducedWinesInput = {
  wine: Scalars['ID'];
  bottlesProduced?: Maybe<Scalars['Int']>;
  metodoProduttivo?: Maybe<MetodoProduttivo>;
};

export type OwnedVineyardsInput = {
  vineyard: Scalars['ID'];
  tonsProduced?: Maybe<Scalars['Int']>;
  metodoProduttivo?: Maybe<MetodoProduttivo>;
};

export type UserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  pIva: Scalars['String'];
  phoneNumber: Scalars['String'];
  address: AddressInput;
  verified?: Maybe<Scalars['Boolean']>;
  premium?: Maybe<Scalars['Boolean']>;
  ads?: Maybe<Array<Scalars['ID']>>;
  negotiations?: Maybe<Array<Scalars['ID']>>;
  reviews?: Maybe<Array<Scalars['ID']>>;
  adsRemaining?: Maybe<Scalars['Int']>;
  producedWines?: Maybe<ProducedWinesInput>;
  ownedVineyards?: Maybe<OwnedVineyardsInput>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  pIva: Scalars['String'];
  phoneNumber: Scalars['String'];
  address: Address;
  verified: Scalars['Boolean'];
  premium: Scalars['Boolean'];
  ads?: Maybe<Array<Ad>>;
  negotiations?: Maybe<Array<Negotiation>>;
  reviews?: Maybe<Array<Review>>;
  adsRemaining?: Maybe<Scalars['Int']>;
  dateCreated: Scalars['Date'];
  dateFormatted?: Maybe<Scalars['Date']>;
  producedWines?: Maybe<ProducedWines>;
  ownedVineyards?: Maybe<OwnedVineyards>;
};

export type VineyardInput = {
  name: Scalars['String'];
  colore: Colore;
};

export type Vineyard = {
  __typename?: 'Vineyard';
  _id: Scalars['ID'];
  name: Scalars['String'];
  colore: Colore;
};

export type WineInput = {
  denominazioneVino: Scalars['String'];
  aka?: Maybe<Scalars['String']>;
  espressioneComunitaria: EspressioneComunitaria;
  denominazioneZona: DenomZona;
  regione: Regioni;
};

export type Wine = {
  __typename?: 'Wine';
  _id: Scalars['ID'];
  denominazioneVino: Scalars['String'];
  aka?: Maybe<Scalars['String']>;
  espressioneComunitaria: EspressioneComunitaria;
  denominazioneZona: DenomZona;
  regione: Regioni;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Address: ResolverTypeWrapper<Partial<Address>>;
  String: ResolverTypeWrapper<Partial<Scalars['String']>>;
  Int: ResolverTypeWrapper<Partial<Scalars['Int']>>;
  AddressInput: ResolverTypeWrapper<Partial<AddressInput>>;
  AdInput: ResolverTypeWrapper<Partial<AdInput>>;
  ID: ResolverTypeWrapper<Partial<Scalars['ID']>>;
  Float: ResolverTypeWrapper<Partial<Scalars['Float']>>;
  Boolean: ResolverTypeWrapper<Partial<Scalars['Boolean']>>;
  Ad: ResolverTypeWrapper<IAd>;
  Province: ResolverTypeWrapper<Partial<Province>>;
  Regioni: ResolverTypeWrapper<Partial<Regioni>>;
  Type: ResolverTypeWrapper<Partial<Type>>;
  Menzione: ResolverTypeWrapper<Partial<Menzione>>;
  MetodoProduttivo: ResolverTypeWrapper<Partial<MetodoProduttivo>>;
  Rating: ResolverTypeWrapper<Partial<Rating>>;
  Colore: ResolverTypeWrapper<Partial<Colore>>;
  EspressioneComunitaria: ResolverTypeWrapper<Partial<EspressioneComunitaria>>;
  DenomZona: ResolverTypeWrapper<Partial<DenomZona>>;
  MessageInput: ResolverTypeWrapper<Partial<MessageInput>>;
  Message: ResolverTypeWrapper<IMessage>;
  Token: ResolverTypeWrapper<Partial<Token>>;
  MutationResponse: ResolversTypes['AdResponse'] | ResolversTypes['MessageResponse'] | ResolversTypes['NegotiationResponse'] | ResolversTypes['ReviewResponse'] | ResolversTypes['UserResponse'] | ResolversTypes['LoginResponse'] | ResolversTypes['VineyardResponse'] | ResolversTypes['WineResponse'];
  AdResponse: ResolverTypeWrapper<Partial<Omit<AdResponse, 'ad'> & { ad?: Maybe<ResolversTypes['Ad']> }>>;
  MessageResponse: ResolverTypeWrapper<Partial<Omit<MessageResponse, 'messageSent'> & { messageSent?: Maybe<ResolversTypes['Message']> }>>;
  NegotiationResponse: ResolverTypeWrapper<Partial<Omit<NegotiationResponse, 'negotiation'> & { negotiation?: Maybe<ResolversTypes['Negotiation']> }>>;
  ReviewResponse: ResolverTypeWrapper<Partial<Omit<ReviewResponse, 'review'> & { review?: Maybe<ResolversTypes['Review']> }>>;
  UserResponse: ResolverTypeWrapper<Partial<Omit<UserResponse, 'user'> & { user?: Maybe<ResolversTypes['User']> }>>;
  LoginResponse: ResolverTypeWrapper<Partial<LoginResponse>>;
  VineyardResponse: ResolverTypeWrapper<Partial<Omit<VineyardResponse, 'vineyard'> & { vineyard?: Maybe<ResolversTypes['Vineyard']> }>>;
  WineResponse: ResolverTypeWrapper<Partial<Omit<WineResponse, 'wine'> & { wine?: Maybe<ResolversTypes['Wine']> }>>;
  Mutation: ResolverTypeWrapper<{}>;
  NegotiationInput: ResolverTypeWrapper<Partial<NegotiationInput>>;
  Negotiation: ResolverTypeWrapper<INegotiation>;
  Query: ResolverTypeWrapper<{}>;
  ReviewInput: ResolverTypeWrapper<Partial<ReviewInput>>;
  Review: ResolverTypeWrapper<IReview>;
  Date: ResolverTypeWrapper<Partial<Scalars['Date']>>;
  Subscription: ResolverTypeWrapper<{}>;
  ProducedWines: ResolverTypeWrapper<Partial<Omit<ProducedWines, 'wine'> & { wine: ResolversTypes['Wine'] }>>;
  OwnedVineyards: ResolverTypeWrapper<Partial<Omit<OwnedVineyards, 'vineyard'> & { vineyard: ResolversTypes['Vineyard'] }>>;
  ProducedWinesInput: ResolverTypeWrapper<Partial<ProducedWinesInput>>;
  OwnedVineyardsInput: ResolverTypeWrapper<Partial<OwnedVineyardsInput>>;
  UserInput: ResolverTypeWrapper<Partial<UserInput>>;
  User: ResolverTypeWrapper<IUser>;
  VineyardInput: ResolverTypeWrapper<Partial<VineyardInput>>;
  Vineyard: ResolverTypeWrapper<IVineyard>;
  WineInput: ResolverTypeWrapper<Partial<WineInput>>;
  Wine: ResolverTypeWrapper<IWine>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Address: Partial<Address>;
  String: Partial<Scalars['String']>;
  Int: Partial<Scalars['Int']>;
  AddressInput: Partial<AddressInput>;
  AdInput: Partial<AdInput>;
  ID: Partial<Scalars['ID']>;
  Float: Partial<Scalars['Float']>;
  Boolean: Partial<Scalars['Boolean']>;
  Ad: IAd;
  MessageInput: Partial<MessageInput>;
  Message: IMessage;
  Token: Partial<Token>;
  MutationResponse: ResolversParentTypes['AdResponse'] | ResolversParentTypes['MessageResponse'] | ResolversParentTypes['NegotiationResponse'] | ResolversParentTypes['ReviewResponse'] | ResolversParentTypes['UserResponse'] | ResolversParentTypes['LoginResponse'] | ResolversParentTypes['VineyardResponse'] | ResolversParentTypes['WineResponse'];
  AdResponse: Partial<Omit<AdResponse, 'ad'> & { ad?: Maybe<ResolversParentTypes['Ad']> }>;
  MessageResponse: Partial<Omit<MessageResponse, 'messageSent'> & { messageSent?: Maybe<ResolversParentTypes['Message']> }>;
  NegotiationResponse: Partial<Omit<NegotiationResponse, 'negotiation'> & { negotiation?: Maybe<ResolversParentTypes['Negotiation']> }>;
  ReviewResponse: Partial<Omit<ReviewResponse, 'review'> & { review?: Maybe<ResolversParentTypes['Review']> }>;
  UserResponse: Partial<Omit<UserResponse, 'user'> & { user?: Maybe<ResolversParentTypes['User']> }>;
  LoginResponse: Partial<LoginResponse>;
  VineyardResponse: Partial<Omit<VineyardResponse, 'vineyard'> & { vineyard?: Maybe<ResolversParentTypes['Vineyard']> }>;
  WineResponse: Partial<Omit<WineResponse, 'wine'> & { wine?: Maybe<ResolversParentTypes['Wine']> }>;
  Mutation: {};
  NegotiationInput: Partial<NegotiationInput>;
  Negotiation: INegotiation;
  Query: {};
  ReviewInput: Partial<ReviewInput>;
  Review: IReview;
  Date: Partial<Scalars['Date']>;
  Subscription: {};
  ProducedWines: Partial<Omit<ProducedWines, 'wine'> & { wine: ResolversParentTypes['Wine'] }>;
  OwnedVineyards: Partial<Omit<OwnedVineyards, 'vineyard'> & { vineyard: ResolversParentTypes['Vineyard'] }>;
  ProducedWinesInput: Partial<ProducedWinesInput>;
  OwnedVineyardsInput: Partial<OwnedVineyardsInput>;
  UserInput: Partial<UserInput>;
  User: IUser;
  VineyardInput: Partial<VineyardInput>;
  Vineyard: IVineyard;
  WineInput: Partial<WineInput>;
  Wine: IWine;
}>;

export type AddressResolvers<ContextType = any, ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address']> = ResolversObject<{
  via?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  CAP?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  provincia?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  regione?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AdResolvers<ContextType = any, ParentType extends ResolversParentTypes['Ad'] = ResolversParentTypes['Ad']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  postedBy?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  wineName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wine?: Resolver<Maybe<ResolversTypes['Wine']>, ParentType, ContextType>;
  sottoZona?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  menzioneGeograficaAggiuntiva?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  menzione?: Resolver<Maybe<ResolversTypes['Menzione']>, ParentType, ContextType>;
  metodoProduttivo?: Resolver<Maybe<ResolversTypes['MetodoProduttivo']>, ParentType, ContextType>;
  vineyardName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vineyard?: Resolver<Maybe<ResolversTypes['Vineyard']>, ParentType, ContextType>;
  harvest?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  abv?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  priceFrom?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  priceTo?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  litersFrom?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  litersTo?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  kgFrom?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  kgTo?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  activeNegotiations?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  numberViews?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['Type'], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  dateFormatted?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MessageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Message'] = ResolversParentTypes['Message']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sentBy?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  sentTo?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  dateFormatted?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['Token'] = ResolversParentTypes['Token']> = ResolversObject<{
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['MutationResponse'] = ResolversParentTypes['MutationResponse']> = ResolversObject<{
  __resolveType: TypeResolveFn<'AdResponse' | 'MessageResponse' | 'NegotiationResponse' | 'ReviewResponse' | 'UserResponse' | 'LoginResponse' | 'VineyardResponse' | 'WineResponse', ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}>;

export type AdResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AdResponse'] = ResolversParentTypes['AdResponse']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ad?: Resolver<Maybe<ResolversTypes['Ad']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MessageResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['MessageResponse'] = ResolversParentTypes['MessageResponse']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  messageSent?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NegotiationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['NegotiationResponse'] = ResolversParentTypes['NegotiationResponse']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  negotiation?: Resolver<Maybe<ResolversTypes['Negotiation']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReviewResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReviewResponse'] = ResolversParentTypes['ReviewResponse']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  review?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserResponse'] = ResolversParentTypes['UserResponse']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LoginResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoginResponse'] = ResolversParentTypes['LoginResponse']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VineyardResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['VineyardResponse'] = ResolversParentTypes['VineyardResponse']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vineyard?: Resolver<Maybe<ResolversTypes['Vineyard']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WineResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['WineResponse'] = ResolversParentTypes['WineResponse']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  wine?: Resolver<Maybe<ResolversTypes['Wine']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createAd?: Resolver<Maybe<ResolversTypes['AdResponse']>, ParentType, ContextType, RequireFields<MutationCreateAdArgs, never>>;
  updateAd?: Resolver<Maybe<ResolversTypes['AdResponse']>, ParentType, ContextType, RequireFields<MutationUpdateAdArgs, 'id'>>;
  createMessage?: Resolver<Maybe<ResolversTypes['MessageResponse']>, ParentType, ContextType, RequireFields<MutationCreateMessageArgs, never>>;
  createNegotiation?: Resolver<Maybe<ResolversTypes['NegotiationResponse']>, ParentType, ContextType, RequireFields<MutationCreateNegotiationArgs, never>>;
  updateNegotiation?: Resolver<Maybe<ResolversTypes['NegotiationResponse']>, ParentType, ContextType, RequireFields<MutationUpdateNegotiationArgs, 'id'>>;
  createReview?: Resolver<Maybe<ResolversTypes['ReviewResponse']>, ParentType, ContextType, RequireFields<MutationCreateReviewArgs, never>>;
  updateReview?: Resolver<Maybe<ResolversTypes['ReviewResponse']>, ParentType, ContextType, RequireFields<MutationUpdateReviewArgs, 'id'>>;
  createUser?: Resolver<Maybe<ResolversTypes['UserResponse']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, never>>;
  updateUser?: Resolver<Maybe<ResolversTypes['UserResponse']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'id'>>;
  login?: Resolver<Maybe<ResolversTypes['LoginResponse']>, ParentType, ContextType, RequireFields<MutationLoginArgs, 'mail' | 'password'>>;
  createVineyard?: Resolver<Maybe<ResolversTypes['VineyardResponse']>, ParentType, ContextType, RequireFields<MutationCreateVineyardArgs, never>>;
  updateVineyard?: Resolver<Maybe<ResolversTypes['VineyardResponse']>, ParentType, ContextType, RequireFields<MutationUpdateVineyardArgs, 'id'>>;
  createWine?: Resolver<Maybe<ResolversTypes['WineResponse']>, ParentType, ContextType, RequireFields<MutationCreateWineArgs, never>>;
  updateWine?: Resolver<Maybe<ResolversTypes['WineResponse']>, ParentType, ContextType, RequireFields<MutationUpdateWineArgs, 'id'>>;
}>;

export type NegotiationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Negotiation'] = ResolversParentTypes['Negotiation']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  ad?: Resolver<ResolversTypes['Ad'], ParentType, ContextType>;
  forUserAd?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  messages?: Resolver<Maybe<Array<ResolversTypes['Message']>>, ParentType, ContextType>;
  isConcluded?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  dateFormatted?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  ads?: Resolver<Maybe<Array<ResolversTypes['Ad']>>, ParentType, ContextType, RequireFields<QueryAdsArgs, '_id'>>;
  reviews?: Resolver<Maybe<Array<ResolversTypes['Review']>>, ParentType, ContextType, RequireFields<QueryReviewsArgs, '_id'>>;
  negotiations?: Resolver<Maybe<Array<ResolversTypes['Negotiation']>>, ParentType, ContextType, RequireFields<QueryNegotiationsArgs, '_id'>>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, '_id'>>;
  wines?: Resolver<Maybe<Array<ResolversTypes['Wine']>>, ParentType, ContextType, RequireFields<QueryWinesArgs, never>>;
  wine?: Resolver<Maybe<ResolversTypes['Wine']>, ParentType, ContextType, RequireFields<QueryWineArgs, '_id'>>;
  vineyards?: Resolver<Maybe<Array<ResolversTypes['Vineyard']>>, ParentType, ContextType, RequireFields<QueryVineyardsArgs, never>>;
  vineyard?: Resolver<Maybe<ResolversTypes['Vineyard']>, ParentType, ContextType, RequireFields<QueryVineyardArgs, '_id'>>;
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
}>;

export type ReviewResolvers<ContextType = any, ParentType extends ResolversParentTypes['Review'] = ResolversParentTypes['Review']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  negotiation?: Resolver<ResolversTypes['Negotiation'], ParentType, ContextType>;
  forUserAd?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  rating?: Resolver<ResolversTypes['Rating'], ParentType, ContextType>;
  dateFormatted?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['Type'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  messageSent?: SubscriptionResolver<ResolversTypes['Message'], "messageSent", ParentType, ContextType>;
  adPosted?: SubscriptionResolver<ResolversTypes['Ad'], "adPosted", ParentType, ContextType>;
}>;

export type ProducedWinesResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProducedWines'] = ResolversParentTypes['ProducedWines']> = ResolversObject<{
  wine?: Resolver<ResolversTypes['Wine'], ParentType, ContextType>;
  bottlesProduced?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  metodoProduttivo?: Resolver<Maybe<ResolversTypes['MetodoProduttivo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OwnedVineyardsResolvers<ContextType = any, ParentType extends ResolversParentTypes['OwnedVineyards'] = ResolversParentTypes['OwnedVineyards']> = ResolversObject<{
  vineyard?: Resolver<ResolversTypes['Vineyard'], ParentType, ContextType>;
  tonsProduced?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  metodoProduttivo?: Resolver<Maybe<ResolversTypes['MetodoProduttivo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pIva?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phoneNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  verified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  premium?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  ads?: Resolver<Maybe<Array<ResolversTypes['Ad']>>, ParentType, ContextType>;
  negotiations?: Resolver<Maybe<Array<ResolversTypes['Negotiation']>>, ParentType, ContextType>;
  reviews?: Resolver<Maybe<Array<ResolversTypes['Review']>>, ParentType, ContextType>;
  adsRemaining?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  dateCreated?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  dateFormatted?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  producedWines?: Resolver<Maybe<ResolversTypes['ProducedWines']>, ParentType, ContextType>;
  ownedVineyards?: Resolver<Maybe<ResolversTypes['OwnedVineyards']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VineyardResolvers<ContextType = any, ParentType extends ResolversParentTypes['Vineyard'] = ResolversParentTypes['Vineyard']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  colore?: Resolver<ResolversTypes['Colore'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WineResolvers<ContextType = any, ParentType extends ResolversParentTypes['Wine'] = ResolversParentTypes['Wine']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  denominazioneVino?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  aka?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  espressioneComunitaria?: Resolver<ResolversTypes['EspressioneComunitaria'], ParentType, ContextType>;
  denominazioneZona?: Resolver<ResolversTypes['DenomZona'], ParentType, ContextType>;
  regione?: Resolver<ResolversTypes['Regioni'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Address?: AddressResolvers<ContextType>;
  Ad?: AdResolvers<ContextType>;
  Message?: MessageResolvers<ContextType>;
  Token?: TokenResolvers<ContextType>;
  MutationResponse?: MutationResponseResolvers<ContextType>;
  AdResponse?: AdResponseResolvers<ContextType>;
  MessageResponse?: MessageResponseResolvers<ContextType>;
  NegotiationResponse?: NegotiationResponseResolvers<ContextType>;
  ReviewResponse?: ReviewResponseResolvers<ContextType>;
  UserResponse?: UserResponseResolvers<ContextType>;
  LoginResponse?: LoginResponseResolvers<ContextType>;
  VineyardResponse?: VineyardResponseResolvers<ContextType>;
  WineResponse?: WineResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Negotiation?: NegotiationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Review?: ReviewResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Subscription?: SubscriptionResolvers<ContextType>;
  ProducedWines?: ProducedWinesResolvers<ContextType>;
  OwnedVineyards?: OwnedVineyardsResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  Vineyard?: VineyardResolvers<ContextType>;
  Wine?: WineResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
