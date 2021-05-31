"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const apollo_server_express_1 = require("apollo-server-express");
const integrationSetup_1 = require("../../tests/integrationSetup");
//import { ObjectId } from 'mongodb';
const user_1 = require("../../models/user");
const mocksTests_1 = require("../../tests/mocksTests");
const types_1 = require("../../types");
// import createWineDb from '../../utils/wineExtractor';
const wine_1 = require("../../models/wine");
const { query, mutate, setOptions } = integrationSetup_1.testClient;
const WINES = apollo_server_express_1.gql `
  {
    wines {
      denominazioneVino
      espressioneComunitaria
      denominazioneZona
    }
  }
`;
const WINE = apollo_server_express_1.gql `
  query GetWine($id: ID!) {
    wine(id: $id) {
      denominazioneVino
      espressioneComunitaria
      denominazioneZona
    }
  }
`;
const CREATE_WINE = apollo_server_express_1.gql `
  mutation CreateWine($wine: WineInput!) {
    createWine(wine: $wine) {
      response {
        denominazioneVino
        espressioneComunitaria
        denominazioneZona
      }
      errors {
        name
        text
      }
    }
  }
`;
const UPDATE_WINE = apollo_server_express_1.gql `
  mutation UpdateWine($wine: WineInputUpdate!) {
    updateWine(wine: $wine) {
      response {
        denominazioneVino
        espressioneComunitaria
        denominazioneZona
      }
      errors {
        name
        text
      }
    }
  }
`;
const DELETE_WINE = apollo_server_express_1.gql `
  mutation DeleteWine($id: ID!) {
    deleteWine(id: $id) {
      response {
        denominazioneVino
        espressioneComunitaria
        denominazioneZona
      }
      errors {
        name
        text
      }
    }
  }
`;
const LOGIN_VALID = apollo_server_express_1.gql `
  mutation {
    login(email: "gio@prova.it", password: "giovanni") {
      response {
        token
      }
      errors {
        name
        text
      }
    }
  }
`;
const LOGIN_VALID_OTHER = apollo_server_express_1.gql `
  mutation {
    login(email: "gio2@prova.it", password: "giovanni") {
      response {
        token
      }
      errors {
        name
        text
      }
    }
  }
`;
beforeAll(async () => {
    await integrationSetup_1.connectToDb();
    await integrationSetup_1.dropTestDb();
    const usersMock = mocksTests_1.users();
    const user = new user_1.User(usersMock[0]);
    const otherUser = new user_1.User(usersMock[1]);
    const wine = new wine_1.Wine({
        denominazioneVino: 'Abruzzo',
        espressioneComunitaria: 'DOP',
        denominazioneZona: 'DOC',
    });
    await user.save();
    await otherUser.save();
    await wine.save();
});
describe('Integration test wines', () => {
    it('create wine mutation fails if not logged in', async () => {
        const wine = {
            denominazioneVino: 'ciccio',
            espressioneComunitaria: types_1.EspressioneComunitaria.DOP,
            //@ts-ignore
            denominazioneZona: types_1.DenomZona.DOC,
        };
        const res = await mutate(CREATE_WINE, {
            variables: { wine },
        });
        expect(res).toMatchSnapshot();
    });
    it('query wines succeds if logged in', async () => {
        const data = await mutate(LOGIN_VALID);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        const token = data.data.login.response.token;
        setOptions({
            request: {
                headers: {
                    authorization: token,
                },
            },
        });
        const res = await query(WINES);
        expect(res).toMatchSnapshot();
    });
    it('query single wine succeds if logged', async () => {
        const wine = await wine_1.Wine.find({}).lean().exec();
        const res = await query(WINE, {
            variables: { id: wine[0]._id.toString() },
        });
        expect(res).toMatchSnapshot();
    });
    it('create wine mutation successfull if logged in and admin', async () => {
        const wine = {
            denominazioneVino: 'ciccio',
            espressioneComunitaria: types_1.EspressioneComunitaria.DOP,
            //@ts-ignore
            denominazioneZona: types_1.DenomZona.DOC,
        };
        const res = await mutate(CREATE_WINE, {
            variables: { wine },
        });
        expect(res).toMatchSnapshot();
    });
    it('update wine mutation succeds if logged in and admin', async () => {
        const wineToUpdate = await wine_1.Wine.find({}).lean().exec();
        const wine = {
            _id: wineToUpdate[0]._id.toString(),
            denominazioneVino: 'Caprotto',
        };
        const res = await mutate(UPDATE_WINE, {
            variables: { wine },
        });
        expect(res).toMatchSnapshot();
    });
    it('delete wine mutation succeds if logged in and admin', async () => {
        const wineToDelete = await wine_1.Wine.find({}).lean().exec();
        const res = await mutate(DELETE_WINE, {
            variables: { id: wineToDelete[0]._id.toString() },
        });
        expect(res).toMatchSnapshot();
    });
    it('update wine mutation fails if logged in and not admin', async () => {
        const data = await mutate(LOGIN_VALID_OTHER);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        const token = data.data.login.response.token;
        setOptions({
            request: {
                headers: {
                    authorization: token,
                },
            },
        });
        const wineToUpdate = await wine_1.Wine.find({}).lean().exec();
        const wine = {
            _id: wineToUpdate[0]._id.toString(),
            denominazioneVino: 'Caprotto',
        };
        const res = await mutate(UPDATE_WINE, {
            variables: { wine },
        });
        expect(res).toMatchSnapshot();
    });
    it('delete wine mutation fails if logged in and not admin', async () => {
        const wineToDelete = await wine_1.Wine.find({}).lean().exec();
        const res = await mutate(DELETE_WINE, {
            variables: { id: wineToDelete[0]._id.toString() },
        });
        expect(res).toMatchSnapshot();
    });
    it('create wine mutation fails if logged in and not admin', async () => {
        const wine = {
            denominazioneVino: 'ciccio',
            espressioneComunitaria: types_1.EspressioneComunitaria.DOP,
            //@ts-ignore
            denominazioneZona: types_1.DenomZona.DOC,
        };
        const res = await mutate(CREATE_WINE, {
            variables: { wine },
        });
        expect(res).toMatchSnapshot();
    });
});
afterAll(async () => {
    await integrationSetup_1.dropTestDb();
    await integrationSetup_1.closeDbConnection();
});
