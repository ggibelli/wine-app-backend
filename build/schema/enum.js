"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs = apollo_server_express_1.gql `
  enum TypeAd {
    SELL
    BUY
  }

  enum TypeProduct {
    AdWine
    AdGrape
  }

  enum Menzione {
    CLASSICO
    RISERVA
    SUPERIORE
    VIGNA
  }

  enum MetodoProduttivo {
    CONVENZIONALE
    BIOLOGICO
    BIODINAMICO
    NATURALE
    VEGANO
  }

  enum Colore {
    BIANCA
    ROSSA
  }

  enum EspressioneComunitaria {
    DOP
    IGP
    ND
  }

  enum DenomZona {
    DOC
    DOCG
    IGT
    VARIETALE
    VINO
  }

  enum QueryOrderBy {
    createdAt_ASC
    createdAt_DESC
    price_ASC
    price_DESC
  }
`;
exports.default = typeDefs;
