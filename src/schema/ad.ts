import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Address {
    via: String!
    CAP: String!
    comune: String!
    provincia: Province!
    regione: Regioni!
  }

  input AddressInput {
    via: String!
    CAP: String!
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
    postedBy: User! @authenticated
    harvest: Int!
    abv: Float!
    priceFrom: Float! @authenticated
    priceTo: Float! @authenticated
    content: String!
    address: Address! @authenticated
    negotiations: [Negotiation!] @authenticated
    activeNegotiations: Int @authenticated
    "viewedBy: [User]"
    numberViews: Int @authenticated
    typeAd: TypeAd!
    typeProduct: TypeProduct!
    isActive: Boolean!
    datePosted: Date! @date
    needsFollowUp: Boolean
  }

  type AdWine implements Ad {
    _id: ID!
    postedBy: User! @authenticated
    wineName: String!
    wine: Wine
    sottoZona: String
    menzione: Menzione
    metodoProduttivo: MetodoProduttivo
    harvest: Int!
    abv: Float!
    priceFrom: Float! @authenticated
    priceTo: Float! @authenticated
    litersFrom: Int
    litersTo: Int
    content: String!
    address: Address! @authenticated
    negotiations: [Negotiation!] @authenticated
    activeNegotiations: Int
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
    postedBy: User! @authenticated
    vineyardName: String!
    vineyard: Vineyard
    harvest: Int!
    abv: Float!
    priceFrom: Float! @authenticated
    priceTo: Float! @authenticated
    kgFrom: Int!
    kgTo: Int!
    content: String!
    address: Address!
    negotiations: [Negotiation!] @authenticated
    activeNegotiations: Int
    "viewedBy: [User]"
    numberViews: Int
    typeAd: TypeAd!
    typeProduct: TypeProduct!
    isActive: Boolean!
    datePosted: Date! @date
    needsFollowUp: Boolean
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
      skip: Int
      orderBy: QueryOrderBy
      limit: Int
    ): [Ad]
  }

  type Mutation {
    createAd(input: AdInput!): AdPayload @authenticated
    updateAd(input: AdInputUpdate!): AdPayload @authenticated
    deleteAd(id: ID!): AdPayload @authenticated
  }
  type Subscription {
    adPostedFollowUp: Ad! @authenticated
    adRemoved: Ad! @authenticated
  }
`;
