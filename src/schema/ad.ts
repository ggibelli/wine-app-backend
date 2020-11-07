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

  input AdInput {
    wine: ID
    sottoZona: String
    menzioneGeograficaAggiuntiva: String
    menzione: Menzione
    metodoProduttivo: MetodoProduttivo
    vineyard: ID
    harvest: Int!
    abv: Float
    priceFrom: Float!
    priceTo: Float!
    litersFrom: Int
    litersTo: Int
    kgFrom: Int
    kgTo: Int
    content: String!
    address: AddressInput!
    type: Type!
    isActive: Boolean!
  }

  type Ad {
    _id: ID!
    postedBy: User!
    wineName: String
    wine: Wine
    sottoZona: String
    menzioneGeograficaAggiuntiva: String
    menzione: Menzione
    metodoProduttivo: MetodoProduttivo
    vineyardName: String
    vineyard: Vineyard
    harvest: Int!
    abv: Float
    priceFrom: Float!
    priceTo: Float!
    litersFrom: Int
    litersTo: Int
    kgFrom: Int
    kgTo: Int
    content: String!
    address: Address!
    "negotiations: [Negotiation]"
    activeNegotiations: Int
    "viewedBy: [User]"
    numberViews: Int
    type: Type!
    isActive: Boolean!
    "datePosted: Date!"
    dateFormatted: Date
  }
`;
