import { gql } from 'apollo-server-express';

export const typeDef = gql`
  type Address {
    via: String!
    CAP: Int!
    provincia: String!
    regione: String!
  }

  input AddressInput {
    via: String!
    CAP: Int!
    provincia: String!
    regione: String!
  }

  input AdInputWine {
    wineName: String!
    sottoZona: String
    menzione: Menzione
    metodoProduttivo: MetodoProduttivo
    #vineyard: ID
    harvest: Int!
    abv: Float!
    priceFrom: Float!
    priceTo: Float!
    litersFrom: Int!
    litersTo: Int!
    #kgFrom: Int
    #kgTo: Int
    content: String!
    address: AddressInput!
    typeAd: TypeAd!
    typeProduct: TypeProduct!
    #isActive: Boolean!
  }

  input AdInputVineyard {
    #wineName: String!
    #sottoZona: String
    #menzione: Menzione
    #metodoProduttivo: MetodoProduttivo
    vineyardName: String!
    harvest: Int!
    abv: Float!
    priceFrom: Float!
    priceTo: Float!
    #litersFrom: Int!
    #litersTo: Int!
    kgFrom: Int
    kgTo: Int
    content: String!
    address: AddressInput!
    typeAd: TypeAd!
    typeProduct: TypeProduct!
    #isActive: Boolean!
  }

  input AdInputWineUpdate {
    wineName: String
    sottoZona: String
    menzione: Menzione
    metodoProduttivo: MetodoProduttivo
    #vineyard: ID
    harvest: Int
    abv: Float
    priceFrom: Float
    priceTo: Float
    litersFrom: Int
    litersTo: Int
    #kgFrom: Int
    #kgTo: Int
    content: String
    address: AddressInput
    typeAd: TypeAd
    typeProduct: TypeProduct
    #isActive: Boolean!
  }

  input AdInputVineyardUpdate {
    #wineName: String!
    #sottoZona: String
    #menzione: Menzione
    #metodoProduttivo: MetodoProduttivo
    vineyardName: String
    harvest: Int
    abv: Float
    priceFrom: Float
    priceTo: Float
    #litersFrom: Int!
    #litersTo: Int!
    kgFrom: Int
    kgTo: Int
    content: String
    address: AddressInput
    typeAd: TypeAd
    typeProduct: TypeProduct
    #isActive: Boolean!
  }

  type AdWineResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    ad: AdWine
  }

  type AdVineyardResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    ad: AdVineyard
  }

  interface Ad {
    _id: ID!
    postedBy: User!
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
    dateFormatted: Date
  }

  type AdWine implements Ad {
    _id: ID!
    postedBy: User!
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
    dateFormatted: Date
  }

  type AdVineyard implements Ad {
    _id: ID!
    postedBy: User!
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
    dateFormatted: Date
  }

  extend type Query {
    ad(_id: ID!): Ad!
    adsWine(
      wineName: String!
      sottoZona: String
      menzione: String
      metodoProduttivo: String
      harvest: Int
      abv: Float
      price: Float
      liters: Int
      date: Date
      isNew: Boolean
    ): AdWine
    adsVineyard(
      vineyardName: String!
      harvest: Int
      metodoProduttivo: String
      abv: Float
      price: Float
      kgs: Int
      date: Date
      isNew: Boolean
    ): AdVineyard
  }

  extend type Mutation {
    createAdWine(ad: AdInputWine!): AdWineResponse
    updateAdWine(ad: AdInputWineUpdate!, id: ID!): AdWineResponse
    deleteAdWine(id: ID!): AdWineResponse
    createAdVineyard(ad: AdInputVineyard!): AdVineyardResponse
    updateAdVineyard(ad: AdInputVineyardUpdate!, id: ID!): AdVineyardResponse
    deleteAdVineyard(id: ID!): AdVineyardResponse
  }

  extend type Subscription {
    adPosted: Ad!
  }
`;
