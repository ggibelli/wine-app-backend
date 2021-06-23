"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs = apollo_server_express_1.gql `
  type Address {
    via: String
    # CAP: String
    comune: String!
    # provincia: Province!
    # regione: Regioni!
  }

  input AddressInput {
    via: String
    # CAP: String
    comune: String!
    # provincia: Province!
    # regione: Regioni!
  }

  input AdInput {
    typeAd: TypeAd!
    typeProduct: TypeProduct!
    content: String
    # address: AddressInput!
    harvest: Int!
    abv: Float!
    wine: ID
    wineName: String
    vineyard: ID
    vineyardName: String
    sottoZona: String
    menzione: Menzione
    metodoProduttivo: MetodoProduttivo
    priceFrom: Float!
    priceTo: Float!
    litersFrom: Int
    litersTo: Int
    kgFrom: Int
    kgTo: Int
    needsFollowUp: Boolean
  }

  input AdInputUpdate {
    _id: ID!
    wine: ID
    wineName: String
    vineyard: ID
    vineyardName: String
    sottoZona: String
    menzione: Menzione
    metodoProduttivo: MetodoProduttivo
    harvest: Int
    abv: Float
    priceFrom: Float
    priceTo: Float
    litersFrom: Int
    litersTo: Int
    content: String
    address: AddressInput
    isActive: Boolean
    needsFollowUp: Boolean
  }

  interface Ad {
    _id: ID!
    postedBy: User!
    harvest: Int!
    abv: Float!
    priceFrom: Float!
    priceTo: Float!
    content: String
    # address: Address! @authenticated
    negotiations: [Negotiation!]
    activeNegotiations: Int
    savedTimes: Int
    "viewedBy: [User]"
    numberViews: Int
    typeAd: TypeAd!
    typeProduct: TypeProduct!
    isActive: Boolean!
    datePosted: Date! @date
    needsFollowUp: Boolean
  }

  type AdWine implements Ad {
    _id: ID!
    postedBy: User!
    wineName: String!
    wine: Wine
    sottoZona: String
    menzione: Menzione
    metodoProduttivo: MetodoProduttivo
    harvest: Int!
    abv: Float!
    priceFrom: Float!
    priceTo: Float!
    litersFrom: Int
    litersTo: Int
    content: String
    # address: Address! @authenticated
    negotiations: [Negotiation!]
    activeNegotiations: Int
    savedTimes: Int
    "viewedBy: [User]"
    numberViews: Int
    typeAd: TypeAd!
    typeProduct: TypeProduct!
    isActive: Boolean!
    datePosted: Date! @date
    needsFollowUp: Boolean
  }

  type AdGrape implements Ad {
    _id: ID!
    postedBy: User!
    vineyardName: String!
    vineyard: Vineyard
    harvest: Int!
    abv: Float!
    priceFrom: Float!
    priceTo: Float!
    kgFrom: Int!
    kgTo: Int!
    content: String
    # address: Address!
    negotiations: [Negotiation!]
    activeNegotiations: Int
    savedTimes: Int
    "viewedBy: [User]"
    numberViews: Int
    typeAd: TypeAd!
    typeProduct: TypeProduct!
    isActive: Boolean!
    datePosted: Date! @date
    needsFollowUp: Boolean
  }

  type AdsResult {
    ads: [Ad]
    pageCount: Int
  }

  type AdPayload {
    response: Ad
    errors: [Errors]
  }

  type Query {
    ad(id: ID!): Ad
    ads(
      typeAd: TypeAd!
      typeProduct: TypeProduct!
      wineName: String
      vineyardName: String
      offset: Int = 0
      orderBy: QueryOrderBy = createdAt_DESC
      limit: Int = 10
    ): AdsResult
    adsForUser(
      offset: Int = 0
      orderBy: QueryOrderBy = createdAt_DESC
      limit: Int = 10
      isActive: Boolean
      user: ID!
    ): AdsResult
  }

  type Mutation {
    createAd(input: AdInput!): AdPayload @authenticated
    updateAd(input: AdInputUpdate!): AdPayload @authenticated
    deleteAd(id: ID!): AdPayload @authenticated
    saveAd(id: ID!): AdPayload @authenticated
  }
  type Subscription {
    adPostedFollowUp: Ad! @authenticated
    adRemoved: Ad! @authenticated
  }
`;
exports.default = typeDefs;
