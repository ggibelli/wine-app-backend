import {
  TypeProduct,
  TypeAd,
  MetodoProduttivo,
  Menzione,
  Province,
  Regioni,
  EspressioneComunitaria,
  DenomZona,
  QueryOrderBy,
} from '../types';
import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql';
import { IUser, IUserDoc } from '../models/user';
import { IAd, IAdDoc } from '../models/ad';
import { IMessageDoc } from '../models/message';
import { INegotiationDoc } from '../models/negotiation';
import { IReviewDoc } from '../models/review';
import { IVineyardDoc } from '../models/vineyard';
import { IWineDoc } from '../models/wine';
export type Maybe<T> = T extends PromiseLike<infer U>
  ? Promise<U | null>
  : T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} &
  { [P in K]-?: NonNullable<T[P]> };
export type EnumResolverSignature<T, AllowedValues = any> = {
  [key in keyof T]?: AllowedValues;
};
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
  comune: Scalars['String'];
  provincia: Province;
  regione: Regioni;
};

export type AddressInput = {
  via: Scalars['String'];
  CAP: Scalars['Int'];
  comune: Scalars['String'];
  provincia: Province;
  regione: Regioni;
};

export type AdInput = {
  typeAd: TypeAd;
  typeProduct: TypeProduct;
  content: Scalars['String'];
  address: AddressInput;
  harvest: Scalars['Int'];
  abv: Scalars['Float'];
  wineName?: Maybe<Scalars['String']>;
  vineyardName?: Maybe<Scalars['String']>;
  sottoZona?: Maybe<Scalars['String']>;
  menzione?: Maybe<Menzione>;
  metodoProduttivo?: Maybe<MetodoProduttivo>;
  priceFrom: Scalars['Float'];
  priceTo: Scalars['Float'];
  litersFrom?: Maybe<Scalars['Int']>;
  litersTo?: Maybe<Scalars['Int']>;
  kgFrom?: Maybe<Scalars['Int']>;
  kgTo?: Maybe<Scalars['Int']>;
};

export type AdInputUpdate = {
  _id: Scalars['ID'];
  wineName?: Scalars['String'];
  vineyardName?: Scalars['String'];
  sottoZona?: Scalars['String'];
  menzione?: Menzione;
  metodoProduttivo?: MetodoProduttivo;
  harvest?: Scalars['Int'];
  abv?: Scalars['Float'];
  priceFrom?: Scalars['Float'];
  priceTo?: Scalars['Float'];
  litersFrom?: Scalars['Int'];
  litersTo?: Scalars['Int'];
  content?: Scalars['String'];
  address?: AddressInput;
};

export type Ad = {
  _id: Scalars['ID'];
  postedBy: User['_id'];
  harvest: Scalars['Int'];
  abv: Scalars['Float'];
  priceFrom: Scalars['Float'];
  priceTo: Scalars['Float'];
  content: Scalars['String'];
  address: Address;
  /** negotiations: [Negotiation] */
  activeNegotiations?: Maybe<Scalars['Int']>;
  /** viewedBy: [User] */
  numberViews?: Maybe<Scalars['Int']>;
  typeAd: TypeAd;
  typeProduct: TypeProduct;
  isActive: Scalars['Boolean'];
  datePosted: Scalars['Date'];
};

export type AdWine = Ad & {
  __typename?: 'AdWine';
  _id: Scalars['ID'];
  postedBy: User['_id'];
  wineName: Scalars['String'];
  wine: Wine;
  sottoZona?: Maybe<Scalars['String']>;
  menzione?: Maybe<Menzione>;
  metodoProduttivo?: Maybe<MetodoProduttivo>;
  harvest: Scalars['Int'];
  abv: Scalars['Float'];
  priceFrom: Scalars['Float'];
  priceTo: Scalars['Float'];
  litersFrom?: Maybe<Scalars['Int']>;
  litersTo?: Maybe<Scalars['Int']>;
  content: Scalars['String'];
  address: Address;
  /** negotiations: [Negotiation] */
  activeNegotiations?: Maybe<Scalars['Int']>;
  /** viewedBy: [User] */
  numberViews?: Maybe<Scalars['Int']>;
  typeAd: TypeAd;
  typeProduct: TypeProduct;
  isActive: Scalars['Boolean'];
  datePosted: Scalars['Date'];
};

export type AdGrape = Ad & {
  __typename?: 'AdGrape';
  _id: Scalars['ID'];
  postedBy: User['_id'];
  vineyardName: Scalars['String'];
  vineyard: Vineyard;
  harvest: Scalars['Int'];
  abv: Scalars['Float'];
  priceFrom: Scalars['Float'];
  priceTo: Scalars['Float'];
  kgFrom: Scalars['Int'];
  kgTo: Scalars['Int'];
  content: Scalars['String'];
  address: Address;
  /** negotiations: [Negotiation] */
  activeNegotiations?: Maybe<Scalars['Int']>;
  /** viewedBy: [User] */
  numberViews?: Maybe<Scalars['Int']>;
  typeAd: TypeAd;
  typeProduct: TypeProduct;
  isActive: Scalars['Boolean'];
  datePosted: Scalars['Date'];
};

export type Query = {
  __typename?: 'Query';
  ad?: Maybe<Ad>;
  ads?: Maybe<Array<Maybe<Ad>>>;
  me?: Maybe<User>;
  negotiation?: Maybe<Negotiation>;
  negotiations?: Maybe<Array<Negotiation>>;
  review?: Maybe<Review>;
  reviews?: Maybe<Array<Review>>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
  vineyard?: Maybe<Vineyard>;
  vineyards?: Maybe<Array<Vineyard>>;
  wine?: Maybe<Wine>;
  wines?: Maybe<Array<Wine>>;
};

export type QueryAdArgs = {
  _id: Scalars['ID'];
};

export type QueryAdsArgs = {
  typeAd: TypeAd;
  typeProduct: TypeProduct;
  wineName?: Maybe<Scalars['String']>;
  vineyardName?: Maybe<Scalars['String']>;
  skip?: Scalars['Int'];
  orderBy?: QueryOrderBy;
  limit?: Scalars['Int'];
};

export type QueryNegotiationArgs = {
  _id: Scalars['ID'];
};

export type QueryReviewArgs = {
  id: Scalars['ID'];
};

export type QueryReviewsArgs = {
  forUser?: Maybe<Scalars['ID']>;
  type?: Maybe<TypeAd>;
};

export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type QueryVineyardArgs = {
  id: Scalars['ID'];
};

export type QueryVineyardsArgs = {
  name?: Maybe<Scalars['String']>;
  colore?: Maybe<Scalars['String']>;
};

export type QueryWineArgs = {
  _id: Scalars['ID'];
};

export type QueryWinesArgs = {
  name?: Maybe<Scalars['String']>;
  espressioneComunitaria?: Maybe<Scalars['String']>;
  denomZona?: Maybe<Scalars['String']>;
  regione?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAd?: Maybe<Ad>;
  createMessage?: Maybe<Message>;
  createNegotiation?: Maybe<Negotiation>;
  createReview?: Maybe<Review>;
  createUser?: Maybe<AuthUser>;
  createVineyard?: Maybe<Vineyard>;
  createWine?: Maybe<Wine>;
  deleteAd?: Maybe<Ad>;
  deleteNegotiation?: Maybe<Negotiation>;
  deleteReview?: Maybe<Review>;
  deleteUser?: Maybe<User>;
  deleteVineyard?: Maybe<Vineyard>;
  deleteWine?: Maybe<Wine>;
  login?: Maybe<AuthUser>;
  updateAd?: Maybe<Ad>;
  updateNegotiation?: Maybe<Negotiation>;
  updateReview?: Maybe<Review>;
  updateUser?: Maybe<User>;
  updateVineyard?: Maybe<Vineyard>;
  updateWine?: Maybe<Wine>;
};

export type MutationCreateAdArgs = {
  input: AdInput;
};

export type MutationCreateMessageArgs = {
  message?: Maybe<MessageInput>;
};

export type MutationCreateNegotiationArgs = {
  negotiation?: Maybe<NegotiationInput>;
};

export type MutationCreateReviewArgs = {
  review?: Maybe<ReviewInput>;
};

export type MutationCreateUserArgs = {
  user?: Maybe<UserInput>;
};

export type MutationCreateVineyardArgs = {
  vineyard?: Maybe<VineyardInput>;
};

export type MutationCreateWineArgs = {
  wine?: Maybe<WineInput>;
};

export type MutationDeleteAdArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteNegotiationArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteReviewArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteVineyardArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteWineArgs = {
  id: Scalars['ID'];
};

export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MutationUpdateAdArgs = {
  input: AdInputUpdate;
};

export type MutationUpdateNegotiationArgs = {
  negotiation?: Maybe<NegotiationInputUpdate>;
  id: Scalars['ID'];
};

export type MutationUpdateReviewArgs = {
  review?: Maybe<ReviewInputUpdate>;
  id: Scalars['ID'];
};

export type MutationUpdateUserArgs = {
  user?: Maybe<UserInputUpdate>;
  id: Scalars['ID'];
};

export type MutationUpdateVineyardArgs = {
  vineyard?: Maybe<VineyardInputUpdate>;
  id: Scalars['ID'];
};

export type MutationUpdateWineArgs = {
  wine?: Maybe<WineInputUpdate>;
  id: Scalars['ID'];
};

export type Subscription = {
  __typename?: 'Subscription';
  adPosted: Ad;
  messageSent: Message;
};

export { Province };

export { Regioni };

export { TypeAd };

export { TypeProduct };

export { Menzione };

export { MetodoProduttivo };

export enum Rating {
  Poor = 'POOR',
  Average = 'AVERAGE',
  Ok = 'OK',
  Good = 'GOOD',
  Perfect = 'PERFECT',
}

export enum Colore {
  Bianca = 'BIANCA',
  Rossa = 'ROSSA',
}

export { EspressioneComunitaria };

export { DenomZona };

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
  dateSent: Scalars['Date'];
};

export type MutationResponse = {
  success: Scalars['Boolean'];
  message: Scalars['String'];
};

export type NegotiationInput = {
  ad: Scalars['ID'];
  forUserAd: Scalars['ID'];
};

export type NegotiationInputUpdate = {
  _id: Scalars['ID'];
  isConcluded?: Scalars['Boolean'];
};

export type Negotiation = {
  __typename?: 'Negotiation';
  _id: Scalars['ID'];
  createdBy: User;
  ad: Ad;
  forUserAd: User;
  messages?: Maybe<Array<Message>>;
  isConcluded: Scalars['Boolean'];
  dateCreated: Scalars['Date'];
  review?: Maybe<Array<Maybe<Review>>>;
};

export type ReviewInput = {
  negotiation: Scalars['ID'];
  forUserAd: Scalars['ID'];
  rating: Scalars['ID'];
  content: Scalars['String'];
  type: TypeAd;
};

export type ReviewInputUpdate = {
  _id: Scalars['ID'];
  rating?: Scalars['ID'];
  content?: Scalars['String'];
};

export type Review = {
  __typename?: 'Review';
  _id: Scalars['ID'];
  createdBy: User;
  negotiation: Negotiation;
  forUserAd: User;
  rating: Rating;
  dateCreated: Scalars['Date'];
  content: Scalars['String'];
  type: TypeAd;
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
  email: Scalars['String'];
  password: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  pIva: Scalars['String'];
  phoneNumber: Scalars['String'];
  address: AddressInput;
  producedWines?: Maybe<ProducedWinesInput>;
  ownedVineyards?: Maybe<OwnedVineyardsInput>;
};

export type UserInputUpdate = {
  _id: Scalars['ID'];
  email?: Scalars['String'];
  firstName?: Scalars['String'];
  lastName?: Scalars['String'];
  pIva?: Scalars['String'];
  phoneNumber?: Scalars['String'];
  address?: AddressInput;
  isVerified?: Scalars['Boolean'];
  isPremium?: Scalars['Boolean'];
  ads?: Array<Scalars['ID']>;
  negotiations?: Array<Scalars['ID']>;
  reviews?: Array<Scalars['ID']>;
  adsRemaining?: Scalars['Int'];
  producedWines?: ProducedWinesInput;
  ownedVineyards?: OwnedVineyardsInput;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  pIva: Scalars['String'];
  phoneNumber: Scalars['String'];
  address: Address;
  isVerified: Scalars['Boolean'];
  isPremium?: Maybe<Scalars['Boolean']>;
  isAdmin: Scalars['Boolean'];
  ads?: Maybe<Array<Ad>>;
  negotiations?: Maybe<Array<Negotiation>>;
  reviews?: Maybe<Array<Review>>;
  adsRemaining?: Maybe<Scalars['Int']>;
  dateCreated: Scalars['Date'];
  producedWines?: Maybe<ProducedWines>;
  ownedVineyards?: Maybe<OwnedVineyards>;
};

export type AuthUser = {
  __typename?: 'AuthUser';
  token: Scalars['String'];
  user: User;
};

export type Vineyard = {
  __typename?: 'Vineyard';
  _id: Scalars['ID'];
  name: Scalars['String'];
  colore: Colore;
};

export type VineyardInput = {
  name: Scalars['String'];
  colore: Colore;
};

export type VineyardInputUpdate = {
  name?: Maybe<Scalars['String']>;
  colore?: Maybe<Colore>;
};

export type WineInput = {
  denominazioneVino: Scalars['String'];
  aka?: Maybe<Scalars['String']>;
  espressioneComunitaria: EspressioneComunitaria;
  denominazioneZona: DenomZona;
  regione: Regioni;
};

export type WineInputUpdate = {
  denominazioneVino?: Maybe<Scalars['String']>;
  aka?: Maybe<Scalars['String']>;
  espressioneComunitaria?: Maybe<EspressioneComunitaria>;
  denominazioneZona?: Maybe<DenomZona>;
  regione?: Maybe<Regioni>;
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
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
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

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
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
  Float: ResolverTypeWrapper<Partial<Scalars['Float']>>;
  AdInputUpdate: ResolverTypeWrapper<Partial<AdInputUpdate>>;
  ID: ResolverTypeWrapper<Partial<Scalars['ID']>>;
  Ad: ResolverTypeWrapper<IAdDoc | IAd>;
  Boolean: ResolverTypeWrapper<Partial<Scalars['Boolean']>>;
  AdWine: ResolverTypeWrapper<
    Partial<
      Omit<AdWine, 'wine'> & {
        wine: ResolversTypes['Wine'];
      }
    >
  >;
  AdGrape: ResolverTypeWrapper<
    Partial<
      Omit<AdGrape, 'vineyard'> & {
        vineyard: ResolversTypes['Vineyard'];
      }
    >
  >;
  Query: ResolverTypeWrapper<{}>;
  Mutation: ResolverTypeWrapper<{}>;
  Subscription: ResolverTypeWrapper<{}>;
  Province: ResolverTypeWrapper<Partial<Province>>;
  Regioni: ResolverTypeWrapper<Partial<Regioni>>;
  TypeAd: ResolverTypeWrapper<Partial<TypeAd>>;
  TypeProduct: ResolverTypeWrapper<Partial<TypeProduct>>;
  Menzione: ResolverTypeWrapper<Partial<Menzione>>;
  MetodoProduttivo: ResolverTypeWrapper<Partial<MetodoProduttivo>>;
  Rating: ResolverTypeWrapper<Partial<Rating>>;
  Colore: ResolverTypeWrapper<Partial<Colore>>;
  EspressioneComunitaria: ResolverTypeWrapper<Partial<EspressioneComunitaria>>;
  DenomZona: ResolverTypeWrapper<Partial<DenomZona>>;
  MessageInput: ResolverTypeWrapper<Partial<MessageInput>>;
  Message: ResolverTypeWrapper<IMessageDoc>;
  MutationResponse: never;
  NegotiationInput: ResolverTypeWrapper<Partial<NegotiationInput>>;
  NegotiationInputUpdate: ResolverTypeWrapper<Partial<NegotiationInputUpdate>>;
  Negotiation: ResolverTypeWrapper<INegotiationDoc>;
  ReviewInput: ResolverTypeWrapper<Partial<ReviewInput>>;
  ReviewInputUpdate: ResolverTypeWrapper<Partial<ReviewInputUpdate>>;
  Review: ResolverTypeWrapper<IReviewDoc>;
  Date: ResolverTypeWrapper<Partial<Scalars['Date']>>;
  ProducedWines: ResolverTypeWrapper<
    Partial<Omit<ProducedWines, 'wine'> & { wine: ResolversTypes['Wine'] }>
  >;
  OwnedVineyards: ResolverTypeWrapper<
    Partial<
      Omit<OwnedVineyards, 'vineyard'> & {
        vineyard: ResolversTypes['Vineyard'];
      }
    >
  >;
  ProducedWinesInput: ResolverTypeWrapper<Partial<ProducedWinesInput>>;
  OwnedVineyardsInput: ResolverTypeWrapper<Partial<OwnedVineyardsInput>>;
  UserInput: ResolverTypeWrapper<Partial<UserInput>>;
  UserInputUpdate: ResolverTypeWrapper<Partial<UserInputUpdate>>;
  User: ResolverTypeWrapper<IUserDoc | IUser>;
  AuthUser: ResolverTypeWrapper<
    Partial<Omit<AuthUser, 'user'> & { user: ResolversTypes['User'] }>
  >;
  Vineyard: ResolverTypeWrapper<IVineyardDoc>;
  VineyardInput: ResolverTypeWrapper<Partial<VineyardInput>>;
  VineyardInputUpdate: ResolverTypeWrapper<Partial<VineyardInputUpdate>>;
  WineInput: ResolverTypeWrapper<Partial<WineInput>>;
  WineInputUpdate: ResolverTypeWrapper<Partial<WineInputUpdate>>;
  Wine: ResolverTypeWrapper<IWineDoc>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Address: Partial<Address>;
  String: Partial<Scalars['String']>;
  Int: Partial<Scalars['Int']>;
  AddressInput: Partial<AddressInput>;
  AdInput: Partial<AdInput>;
  Float: Partial<Scalars['Float']>;
  AdInputUpdate: Partial<AdInputUpdate>;
  ID: Partial<Scalars['ID']>;
  Ad: IAdDoc | IAd;
  Boolean: Partial<Scalars['Boolean']>;
  AdWine: Partial<
    Omit<AdWine, 'wine'> & {
      wine: ResolversParentTypes['Wine'];
    }
  >;
  AdGrape: Partial<
    Omit<AdGrape, 'postedBy' | 'vineyard'> & {
      postedBy?: Maybe<ResolversParentTypes['User']>;
      vineyard: ResolversParentTypes['Vineyard'];
    }
  >;
  Query: {};
  Mutation: {};
  Subscription: {};
  MessageInput: Partial<MessageInput>;
  Message: IMessageDoc;
  MutationResponse: never;
  NegotiationInput: Partial<NegotiationInput>;
  NegotiationInputUpdate: Partial<NegotiationInputUpdate>;
  Negotiation: INegotiationDoc;
  ReviewInput: Partial<ReviewInput>;
  ReviewInputUpdate: Partial<ReviewInputUpdate>;
  Review: IReviewDoc;
  Date: Partial<Scalars['Date']>;
  ProducedWines: Partial<
    Omit<ProducedWines, 'wine'> & { wine: ResolversParentTypes['Wine'] }
  >;
  OwnedVineyards: Partial<
    Omit<OwnedVineyards, 'vineyard'> & {
      vineyard: ResolversParentTypes['Vineyard'];
    }
  >;
  ProducedWinesInput: Partial<ProducedWinesInput>;
  OwnedVineyardsInput: Partial<OwnedVineyardsInput>;
  UserInput: Partial<UserInput>;
  UserInputUpdate: Partial<UserInputUpdate>;
  User: IUserDoc | IUser;
  AuthUser: Partial<
    Omit<AuthUser, 'user'> & { user: ResolversParentTypes['User'] }
  >;
  Vineyard: IVineyardDoc;
  VineyardInput: Partial<VineyardInput>;
  VineyardInputUpdate: Partial<VineyardInputUpdate>;
  WineInput: Partial<WineInput>;
  WineInputUpdate: Partial<WineInputUpdate>;
  Wine: IWineDoc;
}>;

export type DateDirectiveArgs = { defaultFormat?: Maybe<Scalars['String']> };

export type DateDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = DateDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AuthenticatedDirectiveArgs = {};

export type AuthenticatedDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = AuthenticatedDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AuthorizedDirectiveArgs = {};

export type AuthorizedDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = AuthorizedDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AddressResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address']
> = ResolversObject<{
  via?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  CAP?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  comune?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  provincia?: Resolver<ResolversTypes['Province'], ParentType, ContextType>;
  regione?: Resolver<ResolversTypes['Regioni'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AdResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Ad'] = ResolversParentTypes['Ad']
> = ResolversObject<{
  __resolveType: TypeResolveFn<'AdWine' | 'AdGrape', ParentType, ContextType>;
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  postedBy: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  harvest?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  abv?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  priceFrom?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  priceTo?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  activeNegotiations?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  numberViews?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  typeAd?: Resolver<ResolversTypes['TypeAd'], ParentType, ContextType>;
  typeProduct?: Resolver<
    ResolversTypes['TypeProduct'],
    ParentType,
    ContextType
  >;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  datePosted?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
}>;

export type AdWineResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AdWine'] = ResolversParentTypes['AdWine']
> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  postedBy: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  wineName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  wine?: Resolver<ResolversTypes['Wine'], ParentType, ContextType>;
  sottoZona?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  menzione?: Resolver<
    Maybe<ResolversTypes['Menzione']>,
    ParentType,
    ContextType
  >;
  metodoProduttivo?: Resolver<
    Maybe<ResolversTypes['MetodoProduttivo']>,
    ParentType,
    ContextType
  >;
  harvest?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  abv?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  priceFrom?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  priceTo?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  litersFrom?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  litersTo?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  activeNegotiations?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  numberViews?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  typeAd?: Resolver<ResolversTypes['TypeAd'], ParentType, ContextType>;
  typeProduct?: Resolver<
    ResolversTypes['TypeProduct'],
    ParentType,
    ContextType
  >;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  datePosted?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AdGrapeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AdGrape'] = ResolversParentTypes['AdGrape']
> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  postedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  vineyardName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vineyard?: Resolver<ResolversTypes['Vineyard'], ParentType, ContextType>;
  harvest?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  abv?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  priceFrom?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  priceTo?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  kgFrom?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  kgTo?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  activeNegotiations?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  numberViews?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  typeAd?: Resolver<ResolversTypes['TypeAd'], ParentType, ContextType>;
  typeProduct?: Resolver<
    ResolversTypes['TypeProduct'],
    ParentType,
    ContextType
  >;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  datePosted?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = ResolversObject<{
  ad?: Resolver<
    Maybe<ResolversTypes['Ad']>,
    ParentType,
    ContextType,
    RequireFields<QueryAdArgs, '_id'>
  >;
  ads?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Ad']>>>,
    ParentType,
    ContextType,
    RequireFields<QueryAdsArgs, 'typeAd' | 'typeProduct'>
  >;
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  negotiation?: Resolver<
    Maybe<ResolversTypes['Negotiation']>,
    ParentType,
    ContextType,
    RequireFields<QueryNegotiationArgs, '_id'>
  >;
  negotiations?: Resolver<
    Maybe<Array<ResolversTypes['Negotiation']>>,
    ParentType,
    ContextType
  >;
  review?: Resolver<
    Maybe<ResolversTypes['Review']>,
    ParentType,
    ContextType,
    RequireFields<QueryReviewArgs, 'id'>
  >;
  reviews?: Resolver<
    Maybe<Array<ResolversTypes['Review']>>,
    ParentType,
    ContextType,
    RequireFields<QueryReviewsArgs, never>
  >;
  user?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<QueryUserArgs, 'id'>
  >;
  users?: Resolver<
    Maybe<Array<ResolversTypes['User']>>,
    ParentType,
    ContextType
  >;
  vineyard?: Resolver<
    Maybe<ResolversTypes['Vineyard']>,
    ParentType,
    ContextType,
    RequireFields<QueryVineyardArgs, 'id'>
  >;
  vineyards?: Resolver<
    Maybe<Array<ResolversTypes['Vineyard']>>,
    ParentType,
    ContextType,
    RequireFields<QueryVineyardsArgs, never>
  >;
  wine?: Resolver<
    Maybe<ResolversTypes['Wine']>,
    ParentType,
    ContextType,
    RequireFields<QueryWineArgs, '_id'>
  >;
  wines?: Resolver<
    Maybe<Array<ResolversTypes['Wine']>>,
    ParentType,
    ContextType,
    RequireFields<QueryWinesArgs, never>
  >;
}>;

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = ResolversObject<{
  createAd?: Resolver<
    Maybe<ResolversTypes['Ad']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateAdArgs, 'input'>
  >;
  createMessage?: Resolver<
    Maybe<ResolversTypes['Message']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateMessageArgs, never>
  >;
  createNegotiation?: Resolver<
    Maybe<ResolversTypes['Negotiation']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateNegotiationArgs, never>
  >;
  createReview?: Resolver<
    Maybe<ResolversTypes['Review']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateReviewArgs, never>
  >;
  createUser?: Resolver<
    Maybe<ResolversTypes['AuthUser']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateUserArgs, never>
  >;
  createVineyard?: Resolver<
    Maybe<ResolversTypes['Vineyard']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateVineyardArgs, never>
  >;
  createWine?: Resolver<
    Maybe<ResolversTypes['Wine']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateWineArgs, never>
  >;
  deleteAd?: Resolver<
    Maybe<ResolversTypes['Ad']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteAdArgs, 'id'>
  >;
  deleteNegotiation?: Resolver<
    Maybe<ResolversTypes['Negotiation']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteNegotiationArgs, 'id'>
  >;
  deleteReview?: Resolver<
    Maybe<ResolversTypes['Review']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteReviewArgs, 'id'>
  >;
  deleteUser?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteUserArgs, 'id'>
  >;
  deleteVineyard?: Resolver<
    Maybe<ResolversTypes['Vineyard']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteVineyardArgs, 'id'>
  >;
  deleteWine?: Resolver<
    Maybe<ResolversTypes['Wine']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteWineArgs, 'id'>
  >;
  login?: Resolver<
    Maybe<ResolversTypes['AuthUser']>,
    ParentType,
    ContextType,
    RequireFields<MutationLoginArgs, 'email' | 'password'>
  >;
  updateAd?: Resolver<
    Maybe<ResolversTypes['Ad']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateAdArgs, 'input'>
  >;
  updateNegotiation?: Resolver<
    Maybe<ResolversTypes['Negotiation']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateNegotiationArgs, 'id'>
  >;
  updateReview?: Resolver<
    Maybe<ResolversTypes['Review']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateReviewArgs, 'id'>
  >;
  updateUser?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateUserArgs, 'id'>
  >;
  updateVineyard?: Resolver<
    Maybe<ResolversTypes['Vineyard']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateVineyardArgs, 'id'>
  >;
  updateWine?: Resolver<
    Maybe<ResolversTypes['Wine']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateWineArgs, 'id'>
  >;
}>;

export type SubscriptionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']
> = ResolversObject<{
  adPosted?: SubscriptionResolver<
    ResolversTypes['Ad'],
    'adPosted',
    ParentType,
    ContextType
  >;
  messageSent?: SubscriptionResolver<
    ResolversTypes['Message'],
    'messageSent',
    ParentType,
    ContextType
  >;
}>;

export type ProvinceResolvers = EnumResolverSignature<
  {
    AG?: any;
    AL?: any;
    AN?: any;
    AO?: any;
    AR?: any;
    AP?: any;
    AT?: any;
    AV?: any;
    BA?: any;
    BL?: any;
    BN?: any;
    BG?: any;
    BI?: any;
    BO?: any;
    BZ?: any;
    BS?: any;
    BR?: any;
    CA?: any;
    CL?: any;
    CB?: any;
    CE?: any;
    CT?: any;
    CZ?: any;
    CH?: any;
    CO?: any;
    CS?: any;
    CR?: any;
    KR?: any;
    CN?: any;
    EN?: any;
    FM?: any;
    FE?: any;
    FI?: any;
    FG?: any;
    FO?: any;
    FC?: any;
    FR?: any;
    GE?: any;
    GO?: any;
    GR?: any;
    IM?: any;
    IS?: any;
    SP?: any;
    AQ?: any;
    LT?: any;
    LE?: any;
    LC?: any;
    LI?: any;
    LO?: any;
    LU?: any;
    MC?: any;
    MN?: any;
    MS?: any;
    MT?: any;
    ME?: any;
    MI?: any;
    MO?: any;
    MB?: any;
    NA?: any;
    NO?: any;
    NU?: any;
    OR?: any;
    PD?: any;
    PA?: any;
    PR?: any;
    PV?: any;
    PG?: any;
    PS?: any;
    PU?: any;
    PE?: any;
    PC?: any;
    PI?: any;
    PT?: any;
    PN?: any;
    PZ?: any;
    PO?: any;
    RG?: any;
    RA?: any;
    RC?: any;
    RE?: any;
    RI?: any;
    RN?: any;
    RM?: any;
    RO?: any;
    SA?: any;
    SS?: any;
    SV?: any;
    SI?: any;
    SR?: any;
    SO?: any;
    TA?: any;
    TE?: any;
    TR?: any;
    TO?: any;
    TP?: any;
    TN?: any;
    TV?: any;
    TS?: any;
    UD?: any;
    VA?: any;
    VE?: any;
    VB?: any;
    VC?: any;
    VR?: any;
    VV?: any;
    VI?: any;
    VT?: any;
  },
  ResolversTypes['Province']
>;

export type RegioniResolvers = EnumResolverSignature<
  {
    ABRUZZO?: any;
    BASILICATA?: any;
    CALABRIA?: any;
    CAMPANIA?: any;
    EMILIA?: any;
    FRIULI?: any;
    LAZIO?: any;
    LIGURIA?: any;
    LOMBARDIA?: any;
    MARCHE?: any;
    MOLISE?: any;
    PIEMONTE?: any;
    PUGLIA?: any;
    SARDEGNA?: any;
    SICILIA?: any;
    TOSCANA?: any;
    BOLZANO?: any;
    TRENTO?: any;
    UMBRIA?: any;
    VALDAOSTA?: any;
    VENETO?: any;
  },
  ResolversTypes['Regioni']
>;

export type TypeAdResolvers = EnumResolverSignature<
  { SELL?: any; BUY?: any },
  ResolversTypes['TypeAd']
>;

export type TypeProductResolvers = EnumResolverSignature<
  { ADWINE?: any; ADVINEYARD?: any },
  ResolversTypes['TypeProduct']
>;

export type MenzioneResolvers = EnumResolverSignature<
  { CLASSICO?: any; RISERVA?: any; SUPERIORE?: any; VIGNA?: any },
  ResolversTypes['Menzione']
>;

export type MetodoProduttivoResolvers = EnumResolverSignature<
  {
    CONVENZIONALE?: any;
    BIOLOGICO?: any;
    BIODINAMICO?: any;
    NATURALE?: any;
    VEGANO?: any;
  },
  ResolversTypes['MetodoProduttivo']
>;

export type EspressioneComunitariaResolvers = EnumResolverSignature<
  { DOP?: any; IGP?: any; ND?: any },
  ResolversTypes['EspressioneComunitaria']
>;

export type DenomZonaResolvers = EnumResolverSignature<
  { DOC?: any; DOCG?: any; IGT?: any; VARIETALE?: any; VINO?: any },
  ResolversTypes['DenomZona']
>;

export type MessageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Message'] = ResolversParentTypes['Message']
> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sentBy?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  sentTo?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  dateSent?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MutationResponse'] = ResolversParentTypes['MutationResponse']
> = ResolversObject<{
  __resolveType: TypeResolveFn<null, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}>;

export type NegotiationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Negotiation'] = ResolversParentTypes['Negotiation']
> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  ad?: Resolver<ResolversTypes['Ad'], ParentType, ContextType>;
  forUserAd?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  messages?: Resolver<
    Maybe<Array<ResolversTypes['Message']>>,
    ParentType,
    ContextType
  >;
  isConcluded?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  dateCreated?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  review?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Review']>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReviewResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Review'] = ResolversParentTypes['Review']
> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  negotiation?: Resolver<
    ResolversTypes['Negotiation'],
    ParentType,
    ContextType
  >;
  forUserAd?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  rating?: Resolver<ResolversTypes['Rating'], ParentType, ContextType>;
  dateCreated?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['TypeAd'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type ProducedWinesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ProducedWines'] = ResolversParentTypes['ProducedWines']
> = ResolversObject<{
  wine?: Resolver<ResolversTypes['Wine'], ParentType, ContextType>;
  bottlesProduced?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  metodoProduttivo?: Resolver<
    Maybe<ResolversTypes['MetodoProduttivo']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OwnedVineyardsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['OwnedVineyards'] = ResolversParentTypes['OwnedVineyards']
> = ResolversObject<{
  vineyard?: Resolver<ResolversTypes['Vineyard'], ParentType, ContextType>;
  tonsProduced?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  metodoProduttivo?: Resolver<
    Maybe<ResolversTypes['MetodoProduttivo']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pIva?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phoneNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  isVerified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isPremium?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType
  >;
  isAdmin?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  ads?: Resolver<Maybe<Array<ResolversTypes['Ad']>>, ParentType, ContextType>;
  negotiations?: Resolver<
    Maybe<Array<ResolversTypes['Negotiation']>>,
    ParentType,
    ContextType
  >;
  reviews?: Resolver<
    Maybe<Array<ResolversTypes['Review']>>,
    ParentType,
    ContextType
  >;
  adsRemaining?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  dateCreated?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  producedWines?: Resolver<
    Maybe<ResolversTypes['ProducedWines']>,
    ParentType,
    ContextType
  >;
  ownedVineyards?: Resolver<
    Maybe<ResolversTypes['OwnedVineyards']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AuthUserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AuthUser'] = ResolversParentTypes['AuthUser']
> = ResolversObject<{
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VineyardResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Vineyard'] = ResolversParentTypes['Vineyard']
> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  colore?: Resolver<ResolversTypes['Colore'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WineResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Wine'] = ResolversParentTypes['Wine']
> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  denominazioneVino?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  aka?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  espressioneComunitaria?: Resolver<
    ResolversTypes['EspressioneComunitaria'],
    ParentType,
    ContextType
  >;
  denominazioneZona?: Resolver<
    ResolversTypes['DenomZona'],
    ParentType,
    ContextType
  >;
  regione?: Resolver<ResolversTypes['Regioni'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Address?: AddressResolvers<ContextType>;
  Ad?: AdResolvers<ContextType>;
  AdWine?: AdWineResolvers<ContextType>;
  AdGrape?: AdGrapeResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Province?: ProvinceResolvers;
  Regioni?: RegioniResolvers;
  TypeAd?: TypeAdResolvers;
  TypeProduct?: TypeProductResolvers;
  Menzione?: MenzioneResolvers;
  MetodoProduttivo?: MetodoProduttivoResolvers;
  EspressioneComunitaria?: EspressioneComunitariaResolvers;
  DenomZona?: DenomZonaResolvers;
  Message?: MessageResolvers<ContextType>;
  MutationResponse?: MutationResponseResolvers<ContextType>;
  Negotiation?: NegotiationResolvers<ContextType>;
  Review?: ReviewResolvers<ContextType>;
  Date?: GraphQLScalarType;
  ProducedWines?: ProducedWinesResolvers<ContextType>;
  OwnedVineyards?: OwnedVineyardsResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  AuthUser?: AuthUserResolvers<ContextType>;
  Vineyard?: VineyardResolvers<ContextType>;
  Wine?: WineResolvers<ContextType>;
}>;

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = ResolversObject<{
  date?: DateDirectiveResolver<any, any, ContextType>;
  authenticated?: AuthenticatedDirectiveResolver<any, any, ContextType>;
  authorized?: AuthorizedDirectiveResolver<any, any, ContextType>;
}>;

/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<
  ContextType = any
> = DirectiveResolvers<ContextType>;
