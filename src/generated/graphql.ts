/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
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
  Colore,
  Rating,
  Errors,
} from '../types';
import mongoose from 'mongoose';

import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql';
import { UserGraphQl } from '../models/user';
import { AdGraphQl } from '../models/ad';
import { IMessageDoc, MessageGraphQl } from '../models/message';
import { INegotiationDoc, NegotiationGraphQl } from '../models/negotiation';
import { IReviewDoc, ReviewGraphQl } from '../models/review';
import { IVineyardDoc, VineyardGraphQl } from '../models/vineyard';
import { IWineDoc, WineGraphQl } from '../models/wine';
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
  via?: Scalars['String'];
  CAP?: Scalars['String'];
  comune: Scalars['String'];
  provincia: Province;
  regione: Regioni;
};

export type AddressInput = {
  via?: Scalars['String'];
  CAP?: Scalars['String'];
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
  wine?: Maybe<Scalars['ID']>;
  wineName?: Maybe<Scalars['String']>;
  vineyard?: Maybe<Scalars['ID']>;
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
  needsFollowUp?: Maybe<Scalars['Boolean']>;
};

export type AdInputUpdate = {
  _id: Scalars['ID'];
  wine?: Scalars['ID'];
  wineName?: Scalars['String'];
  vineyard?: Scalars['ID'];
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
  isActive?: Scalars['Boolean'];
  needsFollowUp?: Scalars['Boolean'];
};

export type Ad = {
  _id: Scalars['ID'];
  postedBy: User;
  harvest: Scalars['Int'];
  abv: Scalars['Float'];
  priceFrom: Scalars['Float'];
  priceTo: Scalars['Float'];
  content: Scalars['String'];
  address: Address;
  negotiations?: mongoose.Types.Array<Negotiation>;
  activeNegotiations?: Maybe<Scalars['Int']>;
  /** viewedBy: [User] */
  numberViews?: Maybe<Scalars['Int']>;
  typeAd: TypeAd;
  typeProduct: TypeProduct;
  isActive: Scalars['Boolean'];
  datePosted: Scalars['Date'];
  needsFollowUp: Scalars['Boolean'];
};

export type AdWine = Ad & {
  __typename?: 'AdWine';
  _id: Scalars['ID'];
  postedBy: User;
  wineName: Scalars['String'];
  wine?: Maybe<Wine>;
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
  negotiations: NegotiationResult;
  activeNegotiations?: Maybe<Scalars['Int']>;
  /** viewedBy: [User] */
  numberViews?: Maybe<Scalars['Int']>;
  typeAd: TypeAd;
  typeProduct: TypeProduct;
  isActive: Scalars['Boolean'];
  datePosted: Scalars['Date'];
  needsFollowUp: Scalars['Boolean'];
};

export type AdGrape = Ad & {
  __typename?: 'AdGrape';
  _id: Scalars['ID'];
  postedBy: User;
  vineyardName: Scalars['String'];
  vineyard?: Maybe<Vineyard>;
  harvest: Scalars['Int'];
  abv: Scalars['Float'];
  priceFrom: Scalars['Float'];
  priceTo: Scalars['Float'];
  kgFrom: Scalars['Int'];
  kgTo: Scalars['Int'];
  content: Scalars['String'];
  address: Address;
  negotiations: mongoose.Types.Array<Negotiation>;
  activeNegotiations?: Maybe<Scalars['Int']>;
  /** viewedBy: [User] */
  numberViews?: Maybe<Scalars['Int']>;
  typeAd: TypeAd;
  typeProduct: TypeProduct;
  isActive: Scalars['Boolean'];
  datePosted: Scalars['Date'];
  needsFollowUp: Scalars['Boolean'];
};

export type AdPayload = {
  __typename?: 'AdPayload';
  response?: Maybe<Ad>;
  errors?: Maybe<Array<Maybe<Errors>>>;
};

export type AdsResult = {
  __typename?: 'AdsResult';
  ads?: Maybe<Array<Ad>>;
  pageCount?: Maybe<Scalars['Int']>;
};

export type NegotiationResult = {
  __typename?: 'NegotiationResult';
  negotiations?: Maybe<Array<Negotiation>>;
  pageCount?: Maybe<Scalars['Int']>;
};

export type ReviewResult = {
  __typename?: 'ReviewResult';
  reviews?: Maybe<Array<Review>>;
  pageCount?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  ad?: Maybe<Ad>;
  ads?: Maybe<AdsResult>;
  me?: Maybe<User>;
  message?: Maybe<Message>;
  messages?: Maybe<mongoose.Types.Array<Message>>;
  messagesForNegotiation?: Maybe<mongoose.Types.Array<Message>>;
  messagesToUser?: Maybe<mongoose.Types.Array<Message>>;
  negotiation?: Maybe<Negotiation>;
  negotiations?: Maybe<NegotiationResult>;
  negotiationsForAd?: Maybe<mongoose.Types.Array<Negotiation>>;
  negotiationsWithUser?: Maybe<mongoose.Types.Array<Negotiation>>;
  review?: Maybe<Review>;
  reviews?: Maybe<ReviewResult>;
  user?: Maybe<User>;
  users?: Maybe<mongoose.Types.Array<User>>;
  vineyard?: Maybe<Vineyard>;
  vineyards?: Maybe<mongoose.Types.Array<Vineyard>>;
  wine?: Maybe<Wine>;
  wines?: Maybe<mongoose.Types.Array<Wine>>;
};

export type QueryAdArgs = {
  id: Scalars['ID'];
};

export type QueryAdsArgs = {
  typeAd: TypeAd;
  typeProduct: TypeProduct;
  wineName?: Maybe<Scalars['String']>;
  vineyardName?: Maybe<Scalars['String']>;
  offset?: Scalars['Int'];
  orderBy?: QueryOrderBy;
  limit?: Scalars['Int'];
};

export type QueryNegotiationsArgs = {
  offset?: Scalars['Int'];
  orderBy?: QueryOrderBy;
  limit?: Scalars['Int'];
  isConcluded?: Scalars['Boolean'];
};

export type QueryReviewsArgs = {
  offset?: Scalars['Int'];
  orderBy?: QueryOrderBy;
  limit?: Scalars['Int'];
};

export type QueryMessageArgs = {
  id: Scalars['ID'];
};

export type QueryMessagesForNegotiationArgs = {
  negotiation: Scalars['ID'];
};

export type QueryMessagesToUserArgs = {
  sentTo: Scalars['ID'];
};

export type QueryNegotiationArgs = {
  id: Scalars['ID'];
};

export type QueryNegotiationsForAdArgs = {
  ad: Scalars['ID'];
};

export type QueryNegotiationsWithUserArgs = {
  forUserAd: Scalars['ID'];
};

export type QueryReviewArgs = {
  id: Scalars['ID'];
};

export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type QueryVineyardArgs = {
  id: Scalars['ID'];
};

export type QueryWineArgs = {
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAd?: Maybe<AdPayload>;
  createMessage?: Maybe<MessagePayload>;
  createNegotiation?: Maybe<NegotiationPayload>;
  createReview?: Maybe<ReviewPayload>;
  createUser?: Maybe<AuthUserPayload>;
  createVineyard?: Maybe<VineyardPayload>;
  createWine?: Maybe<WinePayload>;
  deleteAd?: Maybe<AdPayload>;
  saveAd?: Maybe<AdPayload>;
  deleteNegotiation?: Maybe<NegotiationPayload>;
  deleteReview?: Maybe<ReviewPayload>;
  deleteUser?: Maybe<UserPayload>;
  deleteVineyard?: Maybe<VineyardPayload>;
  deleteWine?: Maybe<WinePayload>;
  login?: Maybe<AuthUserPayload>;
  updateAd?: Maybe<AdPayload>;
  updateNegotiation?: Maybe<NegotiationPayload>;
  updateReview?: Maybe<ReviewPayload>;
  updateUser?: Maybe<UserPayload>;
  updateVineyard?: Maybe<VineyardPayload>;
  updateWine?: Maybe<WinePayload>;
};

export type MutationCreateAdArgs = {
  input: AdInput;
};

export type MutationCreateMessageArgs = {
  message: MessageInput;
};

export type MutationCreateNegotiationArgs = {
  negotiation: NegotiationInput;
};

export type MutationCreateReviewArgs = {
  review: ReviewInput;
};

export type MutationCreateUserArgs = {
  user: UserInput;
};

export type MutationCreateVineyardArgs = {
  vineyard: VineyardInput;
};

export type MutationCreateWineArgs = {
  wine: WineInput;
};

export type MutationDeleteAdArgs = {
  id: Scalars['ID'];
};

export type MutationSaveAdArgs = {
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
  negotiation: NegotiationInputUpdate;
};

export type MutationUpdateReviewArgs = {
  review: ReviewInputUpdate;
};

export type MutationUpdateUserArgs = {
  user: UserInputUpdate;
};

export type MutationUpdateVineyardArgs = {
  vineyard: VineyardInputUpdate;
};

export type MutationUpdateWineArgs = {
  wine: WineInputUpdate;
};

export type Subscription = {
  __typename?: 'Subscription';
  adPostedFollowUp: Ad;
  adRemoved: Ad;
  messageSent: Message;
  negotiationCreated: Negotiation;
  negotiationClosed: Ad;
  reviewCreated: Review;
};

export { Province };

export { Regioni };

export { TypeAd };

export { TypeProduct };

export { Menzione };

export { MetodoProduttivo };

export { Rating };

export { QueryOrderBy };
export { Colore };

export { EspressioneComunitaria };

export { DenomZona };

// export type Errors = {
//   __typename?: 'Errors';
//   name?: Maybe<Scalars['String']>;
//   text?: Maybe<Scalars['String']>;
// };

export type MessageInput = {
  content: Scalars['String'];
  sentTo: Scalars['ID'];
  negotiation: Scalars['ID'];
};

export type Message = {
  __typename?: 'Message';
  _id: Scalars['ID'];
  content: Scalars['String'];
  sentBy: User;
  sentTo: User;
  negotiation: Negotiation;
  dateSent: Scalars['Date'];
  isViewed: Scalars['Boolean'];
};

export type MessagePayload = {
  __typename?: 'MessagePayload';
  response?: Maybe<Message>;
  errors?: Maybe<Array<Maybe<Errors>>>;
};

export type NegotiationInput = {
  ad: Scalars['ID'];
  forUserAd: Scalars['ID'];
  type: TypeAd;
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
  type: TypeAd;
  messages?: Maybe<mongoose.Types.Array<Message>>;
  isConcluded: Scalars['Boolean'];
  dateCreated: Scalars['Date'];
  dateConcluded?: Maybe<Scalars['Date']>;

  review?: Maybe<mongoose.Types.Array<Maybe<Review>>>;
};

export type NegotiationPayload = {
  __typename?: 'NegotiationPayload';
  response?: Maybe<Negotiation>;
  errors?: Maybe<Array<Maybe<Errors>>>;
};

export type ReviewInput = {
  negotiation: Scalars['ID'];
  forUser: Scalars['ID'];
  rating: Rating;
  content: Scalars['String'];
  type: TypeAd;
};

export type ReviewInputUpdate = {
  _id: Scalars['ID'];
  rating?: Rating;
  content?: Scalars['String'];
};

export type Review = {
  __typename?: 'Review';
  _id: Scalars['ID'];
  createdBy: User;
  negotiation: Negotiation;
  forUser: User;
  rating: Rating;
  dateCreated: Scalars['Date'];
  content: Scalars['String'];
  type: TypeAd;
};

export type ReviewPayload = {
  __typename?: 'ReviewPayload';
  response?: Maybe<Review>;
  errors?: Maybe<Array<Maybe<Errors>>>;
};

export type ProducedWines = {
  __typename?: 'ProducedWines';
  wine: Wine;
  bottlesProduced: Scalars['Int'];
  metodoProduttivo: MetodoProduttivo;
};

export type OwnedVineyards = {
  __typename?: 'OwnedVineyards';
  vineyard: Vineyard;
  tonsProduced: Scalars['Int'];
  metodoProduttivo: MetodoProduttivo;
};

export type ProducedWinesInput = {
  wine: Scalars['ID'];
  bottlesProduced: Scalars['Int'];
  metodoProduttivo: MetodoProduttivo;
};

export type OwnedVineyardsInput = {
  vineyard: Scalars['ID'];
  tonsProduced: Scalars['Int'];
  metodoProduttivo: MetodoProduttivo;
};

export type UserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  pIva: Scalars['String'];
  phoneNumber: Scalars['String'];
  hideContact: Scalars['Boolean'];
  address: AddressInput;
  producedWines?: Maybe<ProducedWinesInput>;
  ownedVineyards?: Maybe<OwnedVineyardsInput>;
};

export type UserInputUpdate = {
  _id: Scalars['ID'];
  email?: Scalars['String'];
  password?: Scalars['String'];
  firstName?: Scalars['String'];
  lastName?: Scalars['String'];
  pIva?: Scalars['String'];
  phoneNumber?: Scalars['String'];
  address?: AddressInput;
  isVerified?: Scalars['Boolean'];
  isPremium?: Scalars['Boolean'];
  hideContact: Scalars['Boolean'];
  producedWines?: mongoose.Types.Array<ProducedWinesInput>;
  ownedVineyards?: mongoose.Types.Array<OwnedVineyardsInput>;
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
  hideContact: Scalars['Boolean'];
  ads?: Maybe<AdsResult>;
  savedAds?: mongoose.Types.Array<Ad>;
  messages?: mongoose.Types.Array<Message>;
  negotiations?: Maybe<NegotiationResult>;
  reviews?: Maybe<ReviewResult>;

  adsRemaining?: Maybe<Scalars['Int']>;
  dateCreated: Scalars['Date'];
  producedWines?: Maybe<ProducedWines>;
  ownedVineyards?: Maybe<OwnedVineyards>;
};

export type UserAdsArgs = {
  offset?: Scalars['Int'];
  orderBy?: QueryOrderBy;
  limit?: Scalars['Int'];
};

export type UserNegotiationsArgs = {
  offset?: Scalars['Int'];
  orderBy?: QueryOrderBy;
  limit?: Scalars['Int'];
};

export type UserReviewsArgs = {
  offset?: Scalars['Int'];
  orderBy?: QueryOrderBy;
  limit?: Scalars['Int'];
};

export type AuthUser = {
  __typename?: 'AuthUser';
  token: Scalars['String'];
  user: User;
};

export type AuthUserPayload = {
  __typename?: 'AuthUserPayload';
  response?: Maybe<AuthUser>;
  errors?: Maybe<Array<Maybe<Errors>>>;
};

export type UserPayload = {
  __typename?: 'UserPayload';
  response?: Maybe<User>;
  errors?: Maybe<Array<Maybe<Errors>>>;
};

export type Vineyard = {
  __typename?: 'Vineyard';
  _id: Scalars['ID'];
  name: Scalars['String'];
  colore?: Maybe<Colore>;
};

export type VineyardInput = {
  name: Scalars['String'];
  colore?: Maybe<Colore>;
};

export type VineyardInputUpdate = {
  _id: Scalars['ID'];
  name?: Scalars['String'];
  colore?: Colore;
};

export type VineyardPayload = {
  __typename?: 'VineyardPayload';
  response?: Maybe<Vineyard>;
  errors?: Maybe<Array<Maybe<Errors>>>;
};

export type WineInput = {
  denominazioneVino: Scalars['String'];
  aka?: Maybe<Scalars['String']>;
  espressioneComunitaria: EspressioneComunitaria;
  denominazioneZona: DenomZona;
  regione: mongoose.Types.Array<Regioni>;
};

export type WineInputUpdate = {
  _id: Scalars['ID'];
  denominazioneVino?: Scalars['String'];
  aka?: Scalars['String'];
  espressioneComunitaria?: EspressioneComunitaria;
  denominazioneZona?: DenomZona;
  regione?: mongoose.Types.Array<Regioni>;
};

export type Wine = {
  __typename?: 'Wine';
  _id: Scalars['ID'];
  denominazioneVino: Scalars['String'];
  aka?: Maybe<Scalars['String']>;
  espressioneComunitaria: EspressioneComunitaria;
  denominazioneZona: DenomZona;
  regione: mongoose.Types.Array<Regioni>;
};

export type WinePayload = {
  __typename?: 'WinePayload';
  response?: Maybe<Wine>;
  errors?: Maybe<Array<Maybe<Errors>>>;
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
  ID: ResolverTypeWrapper<Partial<Scalars['ID']>>;
  AdInputUpdate: ResolverTypeWrapper<Partial<AdInputUpdate>>;
  Ad: ResolverTypeWrapper<AdGraphQl>;
  AdsResult: ResolverTypeWrapper<
    Partial<
      Omit<AdsResult, 'ads'> & {
        ads?: Maybe<Array<Maybe<ResolversTypes['Ad']>>>;
      }
    >
  >;

  NegotiationResult: ResolverTypeWrapper<
    Partial<
      Omit<NegotiationResult, 'negotiations'> & {
        negotiations?: Maybe<Array<Maybe<ResolversTypes['Negotiation']>>>;
      }
    >
  >;

  ReviewResult: ResolverTypeWrapper<
    Partial<
      Omit<ReviewResult, 'reviews'> & {
        reviews?: Maybe<Array<Maybe<ResolversTypes['Review']>>>;
      }
    >
  >;
  Boolean: ResolverTypeWrapper<Partial<Scalars['Boolean']>>;
  AdWine: ResolverTypeWrapper<
    Partial<
      Omit<AdWine, 'postedBy' | 'wine'> & {
        postedBy: ResolversTypes['User'];
        wine?: Maybe<ResolversTypes['Wine']>;
      }
    >
  >;
  AdGrape: ResolverTypeWrapper<
    Partial<
      Omit<AdGrape, 'postedBy' | 'vineyard'> & {
        postedBy: ResolversTypes['User'];
        vineyard?: Maybe<ResolversTypes['Vineyard']>;
      }
    >
  >;
  AdPayload: ResolverTypeWrapper<
    Partial<
      Omit<AdPayload, 'response'> & { response?: Maybe<ResolversTypes['Ad']> }
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
  QueryOrderBy: ResolverTypeWrapper<Partial<QueryOrderBy>>;
  Errors: ResolverTypeWrapper<Partial<Errors>>;
  MessageInput: ResolverTypeWrapper<Partial<MessageInput>>;
  Message: ResolverTypeWrapper<IMessageDoc | MessageGraphQl>;
  MessagePayload: ResolverTypeWrapper<
    Partial<
      Omit<MessagePayload, 'response'> & {
        response?: Maybe<ResolversTypes['Message']>;
      }
    >
  >;
  NegotiationInput: ResolverTypeWrapper<Partial<NegotiationInput>>;
  NegotiationInputUpdate: ResolverTypeWrapper<Partial<NegotiationInputUpdate>>;
  Negotiation: ResolverTypeWrapper<INegotiationDoc | NegotiationGraphQl>;
  NegotiationPayload: ResolverTypeWrapper<
    Partial<
      Omit<NegotiationPayload, 'response'> & {
        response?: Maybe<ResolversTypes['Negotiation']>;
      }
    >
  >;
  ReviewInput: ResolverTypeWrapper<Partial<ReviewInput>>;
  ReviewInputUpdate: ResolverTypeWrapper<Partial<ReviewInputUpdate>>;
  Review: ResolverTypeWrapper<IReviewDoc | ReviewGraphQl>;
  ReviewPayload: ResolverTypeWrapper<
    Partial<
      Omit<ReviewPayload, 'response'> & {
        response?: Maybe<ResolversTypes['Review']>;
      }
    >
  >;
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
  User: ResolverTypeWrapper<UserGraphQl>;
  AuthUser: ResolverTypeWrapper<
    Partial<Omit<AuthUser, 'user'> & { user: ResolversTypes['User'] }>
  >;
  AuthUserPayload: ResolverTypeWrapper<
    Partial<
      Omit<AuthUserPayload, 'response'> & {
        response?: Maybe<ResolversTypes['AuthUser']>;
      }
    >
  >;
  UserPayload: ResolverTypeWrapper<
    Partial<
      Omit<UserPayload, 'response'> & {
        response?: Maybe<ResolversTypes['User']>;
      }
    >
  >;
  Vineyard: ResolverTypeWrapper<IVineyardDoc | VineyardGraphQl>;
  VineyardInput: ResolverTypeWrapper<Partial<VineyardInput>>;
  VineyardInputUpdate: ResolverTypeWrapper<Partial<VineyardInputUpdate>>;
  VineyardPayload: ResolverTypeWrapper<
    Partial<
      Omit<VineyardPayload, 'response'> & {
        response?: Maybe<ResolversTypes['Vineyard']>;
      }
    >
  >;
  WineInput: ResolverTypeWrapper<Partial<WineInput>>;
  WineInputUpdate: ResolverTypeWrapper<Partial<WineInputUpdate>>;
  Wine: ResolverTypeWrapper<IWineDoc | WineGraphQl>;
  WinePayload: ResolverTypeWrapper<
    Partial<
      Omit<WinePayload, 'response'> & {
        response?: Maybe<ResolversTypes['Wine']>;
      }
    >
  >;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Address: Partial<Address>;
  String: Partial<Scalars['String']>;
  Int: Partial<Scalars['Int']>;
  AddressInput: Partial<AddressInput>;
  AdInput: Partial<AdInput>;
  Float: Partial<Scalars['Float']>;
  ID: Partial<Scalars['ID']>;
  AdInputUpdate: Partial<AdInputUpdate>;
  Ad: AdGraphQl;
  AdsResult: Partial<
    Omit<AdsResult, 'ads'> & {
      ads?: Maybe<Array<Maybe<ResolversParentTypes['Ad']>>>;
    }
  >;
  Boolean: Partial<Scalars['Boolean']>;
  AdWine: Partial<
    Omit<AdWine, 'postedBy' | 'wine'> & {
      postedBy: ResolversParentTypes['User'];
      wine?: Maybe<ResolversParentTypes['Wine']>;
    }
  >;
  AdGrape: Partial<
    Omit<AdGrape, 'postedBy' | 'vineyard'> & {
      postedBy: ResolversParentTypes['User'];
      vineyard?: Maybe<ResolversParentTypes['Vineyard']>;
    }
  >;
  AdPayload: Partial<
    Omit<AdPayload, 'response'> & {
      response?: Maybe<ResolversParentTypes['Ad']>;
    }
  >;
  Query: {};
  Mutation: {};
  Subscription: {};
  Errors: Partial<Errors>;
  MessageInput: Partial<MessageInput>;
  Message: IMessageDoc | MessageGraphQl;
  MessagePayload: Partial<
    Omit<MessagePayload, 'response'> & {
      response?: Maybe<ResolversParentTypes['Message']>;
    }
  >;

  NegotiationResult: Partial<
    Omit<NegotiationResult, 'negotiations'> & {
      negotiations?: Maybe<Array<Maybe<ResolversParentTypes['Negotiation']>>>;
    }
  >;

  ReviewResult: Partial<
    Omit<ReviewResult, 'reviews'> & {
      reviews?: Maybe<Array<Maybe<ResolversParentTypes['Review']>>>;
    }
  >;

  NegotiationInput: Partial<NegotiationInput>;
  NegotiationInputUpdate: Partial<NegotiationInputUpdate>;
  Negotiation: INegotiationDoc | NegotiationGraphQl;
  NegotiationPayload: Partial<
    Omit<NegotiationPayload, 'response'> & {
      response?: Maybe<ResolversParentTypes['Negotiation']>;
    }
  >;
  ReviewInput: Partial<ReviewInput>;
  ReviewInputUpdate: Partial<ReviewInputUpdate>;
  Review: IReviewDoc | ReviewGraphQl;
  ReviewPayload: Partial<
    Omit<ReviewPayload, 'response'> & {
      response?: Maybe<ResolversParentTypes['Review']>;
    }
  >;
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
  User: UserGraphQl;
  AuthUser: Partial<
    Omit<AuthUser, 'user'> & { user: ResolversParentTypes['User'] }
  >;
  AuthUserPayload: Partial<
    Omit<AuthUserPayload, 'response'> & {
      response?: Maybe<ResolversParentTypes['AuthUser']>;
    }
  >;
  UserPayload: Partial<
    Omit<UserPayload, 'response'> & {
      response?: Maybe<ResolversParentTypes['User']>;
    }
  >;
  Vineyard: IVineyardDoc | VineyardGraphQl;
  VineyardInput: Partial<VineyardInput>;
  VineyardInputUpdate: Partial<VineyardInputUpdate>;
  VineyardPayload: Partial<
    Omit<VineyardPayload, 'response'> & {
      response?: Maybe<ResolversParentTypes['Vineyard']>;
    }
  >;
  WineInput: Partial<WineInput>;
  WineInputUpdate: Partial<WineInputUpdate>;
  Wine: IWineDoc | WineGraphQl;
  WinePayload: Partial<
    Omit<WinePayload, 'response'> & {
      response?: Maybe<ResolversParentTypes['Wine']>;
    }
  >;
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
  postedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
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
  negotiations?: Resolver<
    Maybe<Array<ResolversTypes['Negotiation']>>,
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
  needsFollowUp?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType
  >;
}>;

export type AdWineResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AdWine'] = ResolversParentTypes['AdWine']
> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  postedBy?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  wineName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  wine?: Resolver<Maybe<ResolversTypes['Wine']>, ParentType, ContextType>;
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
  negotiations?: Resolver<
    Maybe<Array<ResolversTypes['Negotiation']>>,
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
  needsFollowUp?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType
  >;

  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AdGrapeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AdGrape'] = ResolversParentTypes['AdGrape']
> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  postedBy?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  vineyardName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vineyard?: Resolver<
    Maybe<ResolversTypes['Vineyard']>,
    ParentType,
    ContextType
  >;
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
  negotiations?: Resolver<
    Maybe<Array<ResolversTypes['Negotiation']>>,
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
  needsFollowUp?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType
  >;

  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AdsResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AdsResult'] = ResolversParentTypes['AdsResult']
> = ResolversObject<{
  ads?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Ad']>>>,
    ParentType,
    ContextType
  >;
  pageCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NegotiationResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['NegotiationResult'] = ResolversParentTypes['NegotiationResult']
> = ResolversObject<{
  negotiations?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Negotiation']>>>,
    ParentType,
    ContextType
  >;
  pageCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReviewResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ReviewResult'] = ResolversParentTypes['ReviewResult']
> = ResolversObject<{
  reviews?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Review']>>>,
    ParentType,
    ContextType
  >;
  pageCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AdPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AdPayload'] = ResolversParentTypes['AdPayload']
> = ResolversObject<{
  response?: Resolver<Maybe<ResolversTypes['Ad']>, ParentType, ContextType>;
  errors?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Errors']>>>,
    ParentType,
    ContextType
  >;
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
    RequireFields<QueryAdArgs, 'id'>
  >;
  ads?: Resolver<
    Maybe<Maybe<ResolversTypes['AdsResult']>>,
    ParentType,
    ContextType,
    RequireFields<QueryAdsArgs, 'typeAd' | 'typeProduct'>
  >;
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  message?: Resolver<
    Maybe<ResolversTypes['Message']>,
    ParentType,
    ContextType,
    RequireFields<QueryMessageArgs, 'id'>
  >;
  messages?: Resolver<
    Maybe<Array<ResolversTypes['Message']>>,
    ParentType,
    ContextType
  >;
  messagesForNegotiation?: Resolver<
    Maybe<Array<ResolversTypes['Message']>>,
    ParentType,
    ContextType,
    RequireFields<QueryMessagesForNegotiationArgs, 'negotiation'>
  >;
  messagesToUser?: Resolver<
    Maybe<Array<ResolversTypes['Message']>>,
    ParentType,
    ContextType,
    RequireFields<QueryMessagesToUserArgs, 'sentTo'>
  >;
  negotiation?: Resolver<
    Maybe<ResolversTypes['Negotiation']>,
    ParentType,
    ContextType,
    RequireFields<QueryNegotiationArgs, 'id'>
  >;
  negotiations?: Resolver<
    Maybe<Maybe<ResolversTypes['NegotiationResult']>>,
    ParentType,
    ContextType,
    RequireFields<QueryNegotiationsArgs, never>
  >;
  negotiationsForAd?: Resolver<
    Maybe<Array<ResolversTypes['Negotiation']>>,
    ParentType,
    ContextType,
    RequireFields<QueryNegotiationsForAdArgs, 'ad'>
  >;
  negotiationsWithUser?: Resolver<
    Maybe<Array<ResolversTypes['Negotiation']>>,
    ParentType,
    ContextType,
    RequireFields<QueryNegotiationsWithUserArgs, 'forUserAd'>
  >;
  review?: Resolver<
    Maybe<ResolversTypes['Review']>,
    ParentType,
    ContextType,
    RequireFields<QueryReviewArgs, 'id'>
  >;
  reviews?: Resolver<
    Maybe<ResolversTypes['ReviewResult']>,
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
    ContextType
  >;
  wine?: Resolver<
    Maybe<ResolversTypes['Wine']>,
    ParentType,
    ContextType,
    RequireFields<QueryWineArgs, 'id'>
  >;
  wines?: Resolver<
    Maybe<Array<ResolversTypes['Wine']>>,
    ParentType,
    ContextType
  >;
}>;

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = ResolversObject<{
  createAd?: Resolver<
    Maybe<ResolversTypes['AdPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateAdArgs, 'input'>
  >;
  createMessage?: Resolver<
    Maybe<ResolversTypes['MessagePayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateMessageArgs, 'message'>
  >;
  createNegotiation?: Resolver<
    Maybe<ResolversTypes['NegotiationPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateNegotiationArgs, 'negotiation'>
  >;
  createReview?: Resolver<
    Maybe<ResolversTypes['ReviewPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateReviewArgs, 'review'>
  >;
  createUser?: Resolver<
    Maybe<ResolversTypes['AuthUserPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateUserArgs, 'user'>
  >;
  createVineyard?: Resolver<
    Maybe<ResolversTypes['VineyardPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateVineyardArgs, 'vineyard'>
  >;
  createWine?: Resolver<
    Maybe<ResolversTypes['WinePayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateWineArgs, 'wine'>
  >;
  deleteAd?: Resolver<
    Maybe<ResolversTypes['AdPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteAdArgs, 'id'>
  >;
  saveAd?: Resolver<
    Maybe<ResolversTypes['AdPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationSaveAdArgs, 'id'>
  >;
  deleteNegotiation?: Resolver<
    Maybe<ResolversTypes['NegotiationPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteNegotiationArgs, 'id'>
  >;
  deleteReview?: Resolver<
    Maybe<ResolversTypes['ReviewPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteReviewArgs, 'id'>
  >;
  deleteUser?: Resolver<
    Maybe<ResolversTypes['UserPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteUserArgs, 'id'>
  >;
  deleteVineyard?: Resolver<
    Maybe<ResolversTypes['VineyardPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteVineyardArgs, 'id'>
  >;
  deleteWine?: Resolver<
    Maybe<ResolversTypes['WinePayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteWineArgs, 'id'>
  >;
  login?: Resolver<
    Maybe<ResolversTypes['AuthUserPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationLoginArgs, 'email' | 'password'>
  >;
  updateAd?: Resolver<
    Maybe<ResolversTypes['AdPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateAdArgs, 'input'>
  >;
  updateNegotiation?: Resolver<
    Maybe<ResolversTypes['NegotiationPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateNegotiationArgs, 'negotiation'>
  >;
  updateReview?: Resolver<
    Maybe<ResolversTypes['ReviewPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateReviewArgs, 'review'>
  >;
  updateUser?: Resolver<
    Maybe<ResolversTypes['UserPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateUserArgs, 'user'>
  >;
  updateVineyard?: Resolver<
    Maybe<ResolversTypes['VineyardPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateVineyardArgs, 'vineyard'>
  >;
  updateWine?: Resolver<
    Maybe<ResolversTypes['WinePayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateWineArgs, 'wine'>
  >;
}>;

export type SubscriptionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']
> = ResolversObject<{
  adPostedFollowUp?: SubscriptionResolver<
    ResolversTypes['Ad'],
    'adPostedFollowUp',
    ParentType,
    ContextType
  >;
  adRemoved?: SubscriptionResolver<
    ResolversTypes['Ad'],
    'adRemoved',
    ParentType,
    ContextType
  >;
  messageSent?: SubscriptionResolver<
    ResolversTypes['Message'],
    'messageSent',
    ParentType,
    ContextType
  >;
  negotiationCreated?: SubscriptionResolver<
    ResolversTypes['Negotiation'],
    'negotiationCreated',
    ParentType,
    ContextType
  >;
  negotiationClosed?: SubscriptionResolver<
    ResolversTypes['Ad'],
    'negotiationClosed',
    ParentType,
    ContextType
  >;
  reviewCreated?: SubscriptionResolver<
    ResolversTypes['Review'],
    'reviewCreated',
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
    AP?: any;
    AQ?: any;
    AR?: any;
    AT?: any;
    AV?: any;
    BA?: any;
    BG?: any;
    BI?: any;
    BL?: any;
    BN?: any;
    BO?: any;
    BR?: any;
    BS?: any;
    BT?: any;
    BZ?: any;
    CA?: any;
    CB?: any;
    CE?: any;
    CH?: any;
    CL?: any;
    CN?: any;
    CO?: any;
    CR?: any;
    CS?: any;
    CT?: any;
    CZ?: any;
    EN?: any;
    FC?: any;
    FE?: any;
    FG?: any;
    FI?: any;
    FM?: any;
    FR?: any;
    GE?: any;
    GO?: any;
    GR?: any;
    IM?: any;
    IS?: any;
    KR?: any;
    LC?: any;
    LE?: any;
    LI?: any;
    LO?: any;
    LT?: any;
    LU?: any;
    MB?: any;
    MC?: any;
    ME?: any;
    MI?: any;
    MN?: any;
    MO?: any;
    MS?: any;
    MT?: any;
    NA?: any;
    NO?: any;
    NU?: any;
    OR?: any;
    PA?: any;
    PC?: any;
    PD?: any;
    PE?: any;
    PG?: any;
    PI?: any;
    PN?: any;
    PO?: any;
    PR?: any;
    PT?: any;
    PU?: any;
    PV?: any;
    PZ?: any;
    RA?: any;
    RC?: any;
    RE?: any;
    RG?: any;
    RI?: any;
    RM?: any;
    RN?: any;
    RO?: any;
    SA?: any;
    SI?: any;
    SO?: any;
    SP?: any;
    SR?: any;
    SS?: any;
    SU?: any;
    SV?: any;
    TA?: any;
    TE?: any;
    TN?: any;
    TO?: any;
    TP?: any;
    TR?: any;
    TS?: any;
    TV?: any;
    UD?: any;
    VA?: any;
    VB?: any;
    VC?: any;
    VE?: any;
    VI?: any;
    VR?: any;
    VT?: any;
    VV?: any;
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
    TRENTINO?: any;
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
  { AdWine?: any; AdGrape?: any },
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

export type ErrorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Errors'] = ResolversParentTypes['Errors']
> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MessageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Message'] = ResolversParentTypes['Message']
> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sentBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  sentTo?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  negotiation?: Resolver<
    Maybe<ResolversTypes['Negotiation']>,
    ParentType,
    ContextType
  >;
  dateSent?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  isViewed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;

  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MessagePayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MessagePayload'] = ResolversParentTypes['MessagePayload']
> = ResolversObject<{
  response?: Resolver<
    Maybe<ResolversTypes['Message']>,
    ParentType,
    ContextType
  >;
  errors?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Errors']>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NegotiationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Negotiation'] = ResolversParentTypes['Negotiation']
> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  ad?: Resolver<Maybe<ResolversTypes['Ad']>, ParentType, ContextType>;
  forUserAd?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  messages?: Resolver<
    Maybe<Array<ResolversTypes['Message']>>,
    ParentType,
    ContextType
  >;
  type?: Resolver<ResolversTypes['TypeAd'], ParentType, ContextType>;
  isConcluded?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  dateCreated?: Resolver<
    Maybe<ResolversTypes['Date']>,
    ParentType,
    ContextType
  >;
  dateConcluded?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;

  review?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Review']>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NegotiationPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['NegotiationPayload'] = ResolversParentTypes['NegotiationPayload']
> = ResolversObject<{
  response?: Resolver<
    Maybe<ResolversTypes['Negotiation']>,
    ParentType,
    ContextType
  >;
  errors?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Errors']>>>,
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
  createdBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  negotiation?: Resolver<
    Maybe<ResolversTypes['Negotiation']>,
    ParentType,
    ContextType
  >;
  forUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  rating?: Resolver<ResolversTypes['Rating'], ParentType, ContextType>;
  dateCreated?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['TypeAd'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReviewPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ReviewPayload'] = ResolversParentTypes['ReviewPayload']
> = ResolversObject<{
  response?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType>;
  errors?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Errors']>>>,
    ParentType,
    ContextType
  >;
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
  hideContact?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  ads?: Resolver<
    Maybe<ResolversTypes['AdsResult']>,
    ParentType,
    ContextType,
    RequireFields<UserAdsArgs, never>
  >;
  savedAds?: Resolver<
    Maybe<Array<ResolversTypes['Ad']>>,
    ParentType,
    ContextType
  >;
  messages?: Resolver<
    Maybe<Array<ResolversTypes['Message']>>,
    ParentType,
    ContextType
  >;
  negotiations?: Resolver<
    Maybe<ResolversTypes['NegotiationResult']>,
    ParentType,
    ContextType,
    RequireFields<UserNegotiationsArgs, never>
  >;
  reviews?: Resolver<
    Maybe<ResolversTypes['ReviewResult']>,
    ParentType,
    ContextType,
    RequireFields<UserReviewsArgs, never>
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

export type AuthUserPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AuthUserPayload'] = ResolversParentTypes['AuthUserPayload']
> = ResolversObject<{
  response?: Resolver<
    Maybe<ResolversTypes['AuthUser']>,
    ParentType,
    ContextType
  >;
  errors?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Errors']>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserPayload'] = ResolversParentTypes['UserPayload']
> = ResolversObject<{
  response?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  errors?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Errors']>>>,
    ParentType,
    ContextType
  >;
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

export type VineyardPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['VineyardPayload'] = ResolversParentTypes['VineyardPayload']
> = ResolversObject<{
  response?: Resolver<
    Maybe<ResolversTypes['Vineyard']>,
    ParentType,
    ContextType
  >;
  errors?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Errors']>>>,
    ParentType,
    ContextType
  >;
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
  regione?: Resolver<Array<ResolversTypes['Regioni']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WinePayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['WinePayload'] = ResolversParentTypes['WinePayload']
> = ResolversObject<{
  response?: Resolver<Maybe<ResolversTypes['Wine']>, ParentType, ContextType>;
  errors?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Errors']>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Address?: AddressResolvers<ContextType>;
  Ad?: AdResolvers<ContextType>;
  AdsResult?: AdsResultResolvers<ContextType>;

  NegotiationResult?: NegotiationResultResolvers<ContextType>;

  ReviewResult?: ReviewResultResolvers<ContextType>;

  AdWine?: AdWineResolvers<ContextType>;
  AdGrape?: AdGrapeResolvers<ContextType>;
  AdPayload?: AdPayloadResolvers<ContextType>;
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
  Errors?: ErrorResolvers<ContextType>;
  Message?: MessageResolvers<ContextType>;
  MessagePayload?: MessagePayloadResolvers<ContextType>;
  Negotiation?: NegotiationResolvers<ContextType>;
  NegotiationPayload?: NegotiationPayloadResolvers<ContextType>;
  Review?: ReviewResolvers<ContextType>;
  ReviewPayload?: ReviewPayloadResolvers<ContextType>;
  Date?: GraphQLScalarType;
  ProducedWines?: ProducedWinesResolvers<ContextType>;
  OwnedVineyards?: OwnedVineyardsResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  AuthUser?: AuthUserResolvers<ContextType>;
  AuthUserPayload?: AuthUserPayloadResolvers<ContextType>;
  UserPayload?: UserPayloadResolvers<ContextType>;
  Vineyard?: VineyardResolvers<ContextType>;
  VineyardPayload?: VineyardPayloadResolvers<ContextType>;
  Wine?: WineResolvers<ContextType>;
  WinePayload?: WinePayloadResolvers<ContextType>;
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
