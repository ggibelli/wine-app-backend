import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type ProducedWines {
    wine: Wine!
    bottlesProduced: Int
    metodoProduttivo: MetodoProduttivo
  }

  type OwnedVineyards {
    vineyard: Vineyard!
    tonsProduced: Int
    metodoProduttivo: MetodoProduttivo
  }

  input ProducedWinesInput {
    wine: ID!
    bottlesProduced: Int
    metodoProduttivo: MetodoProduttivo
  }

  input OwnedVineyardsInput {
    vineyard: ID!
    tonsProduced: Int
    metodoProduttivo: MetodoProduttivo
  }

  input UserInput {
    username: String!
    email: String!
    firstName: String!
    lastName: String!
    pIva: String!
    phoneNumber: String!
    address: AddressInput!
    verified: Boolean
    premium: Boolean
    ads: [ID!]
    negotiations: [ID!]
    reviews: [ID!]
    adsRemaining: Int
    producedWines: ProducedWinesInput
    ownedVineyards: OwnedVineyardsInput
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    firstName: String!
    lastName: String!
    pIva: String!
    phoneNumber: String!
    address: Address!
    verified: Boolean!
    premium: Boolean!
    ads: [Ad!]
    negotiations: [Negotiation!]
    reviews: [Review!]
    adsRemaining: Int
    dateCreated: Date!
    dateFormatted: Date
    producedWines: ProducedWines
    ownedVineyards: OwnedVineyards
  }
`;
