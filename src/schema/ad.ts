import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Address {
    via: String!
    CAP: Int!
    comune: String!
    provincia: Province!
    regione: Regioni!
  }

  input AddressInput {
    via: String!
    CAP: Int!
    comune: String!
    provincia: Province!
    regione: Regioni!
  }

  input AdInput {
    typeAd: TypeAd!
    typeProduct: TypeProduct!
    content: String!
    address: AddressInput!
    harvest: Int!
    abv: Float!
    wineName: String
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
  }

  input AdInputUpdate {
    wineName: String
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
  }

  type AdResponse implements MutationResponse {
    success: Boolean!
    message: String!
    ad: Ad
  }

  interface Ad {
    _id: ID!
    postedBy: User
    harvest: Int!
    abv: Float!
    priceFrom: Float!
    priceTo: Float!
    content: String!
    address: Address!
    "negotiations: [Negotiation]"
    activeNegotiations: Int
    "viewedBy: [User]"
    numberViews: Int
    typeAd: TypeAd!
    typeProduct: TypeProduct!
    isActive: Boolean!
    "datePosted: Date!"
    dateFormatted: String
  }

  type AdWine implements Ad {
    _id: ID!
    postedBy: User
    wineName: String!
    wine: Wine!
    sottoZona: String
    menzione: Menzione
    metodoProduttivo: MetodoProduttivo
    harvest: Int!
    abv: Float!
    priceFrom: Float!
    priceTo: Float!
    litersFrom: Int
    litersTo: Int
    content: String!
    address: Address!
    "negotiations: [Negotiation]"
    activeNegotiations: Int
    "viewedBy: [User]"
    numberViews: Int
    typeAd: TypeAd!
    typeProduct: TypeProduct!
    isActive: Boolean!
    "datePosted: Date!"
    dateFormatted: String
  }

  type AdVineyard implements Ad {
    _id: ID!
    postedBy: User
    vineyardName: String!
    vineyard: Vineyard!
    harvest: Int!
    abv: Float!
    priceFrom: Float!
    priceTo: Float!
    kgFrom: Int!
    kgTo: Int!
    content: String!
    address: Address!
    "negotiations: [Negotiation]"
    activeNegotiations: Int
    "viewedBy: [User]"
    numberViews: Int
    typeAd: TypeAd!
    typeProduct: TypeProduct!
    isActive: Boolean!
    "datePosted: Date!"
    dateFormatted: String
  }

  type Query {
    ad(_id: ID!): Ad
    ads(
      typeAd: TypeAd!
      typeProduct: TypeProduct!
      wineName: String
      vineyardName: String
    ): [Ad]
  }

  type Mutation {
    createAd(input: AdInput!): AdResponse
    updateAd(input: AdInputUpdate!, id: ID!): AdResponse
    deleteAd(id: ID!): AdResponse
  }
  type Subscription {
    adPosted: Ad!
  }
`;
