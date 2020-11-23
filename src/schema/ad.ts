import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  directive @date(defaultFormat: String = "mmmm d, yyyy") on FIELD_DEFINITION
  directive @authenticated on FIELD_DEFINITION
  directive @authorized on FIELD_DEFINITION
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
    _id: ID!
    wineName: String
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
    "negotiations: [Negotiation]"
    activeNegotiations: Int @authenticated
    "viewedBy: [User]"
    numberViews: Int @authenticated
    typeAd: TypeAd!
    typeProduct: TypeProduct!
    isActive: Boolean!
    datePosted: Date! @date
  }

  type AdWine implements Ad {
    _id: ID!
    postedBy: User! @authenticated
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
    datePosted: Date! @date
  }

  type AdGrape implements Ad {
    _id: ID!
    postedBy: User! @authenticated
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
    datePosted: Date! @date
  }

  type Query {
    ad(_id: ID!): Ad
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
    createAd(input: AdInput!): Ad @authenticated
    updateAd(input: AdInputUpdate!): Ad @authenticated
    deleteAd(id: ID!): Ad @authenticated
  }
  type Subscription {
    adPosted: Ad! @authenticated
  }
`;
