"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const apollo_server_express_1 = require("apollo-server-express");
const integrationSetup_1 = require("../../tests/integrationSetup");
//import { ObjectId } from 'mongodb';
const user_1 = require("../../models/user");
const mocksTests_1 = require("../../tests/mocksTests");
const types_1 = require("../../types");
const vineyardExtractor_1 = __importDefault(require("../../utils/vineyardExtractor"));
const vineyard_1 = require("../../models/vineyard");
const { query, mutate, setOptions } = integrationSetup_1.testClient;
const VINEYARDS = apollo_server_express_1.gql `
  {
    vineyards {
      name
      colore
    }
  }
`;
const VINEYARD = apollo_server_express_1.gql `
  query GetVineyard($id: ID!) {
    vineyard(id: $id) {
      name
      colore
    }
  }
`;
const CREATE_VINEYARD = apollo_server_express_1.gql `
  mutation CreateVineyard($vineyard: VineyardInput!) {
    createVineyard(vineyard: $vineyard) {
      response {
        name
        colore
      }
      errors {
        name
        text
      }
    }
  }
`;
const UPDATE_VINEYARD = apollo_server_express_1.gql `
  mutation UpdateVineyard($vineyard: VineyardInputUpdate!) {
    updateVineyard(vineyard: $vineyard) {
      response {
        name
        colore
      }
      errors {
        name
        text
      }
    }
  }
`;
const DELETE_VINEYARD = apollo_server_express_1.gql `
  mutation DeleteVineyard($id: ID!) {
    deleteVineyard(id: $id) {
      response {
        name
        colore
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
    const vineyardDb = vineyardExtractor_1.default();
    const user = new user_1.User(usersMock[0]);
    const otherUser = new user_1.User(usersMock[1]);
    const vineyard = new vineyard_1.Vineyard(vineyardDb[0]);
    await user.save();
    await otherUser.save();
    await vineyard.save();
});
describe('Integration test vineyards', () => {
    it('query vineyards fails if not logged in', async () => {
        const res = await query(VINEYARDS);
        expect(res).toMatchSnapshot();
    });
    it('query single vineyard fails if not logged', async () => {
        const vineyards = await vineyard_1.Vineyard.find({}).lean().exec();
        const res = await query(VINEYARD, {
            variables: { id: vineyards[0]._id.toString() },
        });
        expect(res).toMatchSnapshot();
    });
    it('create vineyard mutation fails if not logged in', async () => {
        const vineyard = {
            name: 'Uva vinosa',
            colore: types_1.Colore.BIANCA,
        };
        const res = await mutate(CREATE_VINEYARD, {
            variables: { vineyard },
        });
        expect(res).toMatchSnapshot();
    });
    it('query vineyards succeds if logged in', async () => {
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
        const res = await query(VINEYARDS);
        expect(res).toMatchSnapshot();
    });
    it('query single vineyard succeds if logged', async () => {
        const vineyard = await vineyard_1.Vineyard.find({}).lean().exec();
        const res = await query(VINEYARD, {
            variables: { id: vineyard[0]._id.toString() },
        });
        expect(res).toMatchSnapshot();
    });
    it('create vineyard mutation successfull if logged in and admin', async () => {
        const vineyard = {
            name: 'Uva vinosa',
            colore: types_1.Colore.BIANCA,
        };
        const res = await mutate(CREATE_VINEYARD, {
            variables: { vineyard },
        });
        expect(res).toMatchSnapshot();
    });
    it('update vineyard mutation succeds if logged in and admin', async () => {
        const vineyardToUpdate = await vineyard_1.Vineyard.find({})
            .lean()
            .exec();
        const vineyard = {
            _id: vineyardToUpdate[0]._id.toString(),
            name: 'Vinotto',
        };
        const res = await mutate(UPDATE_VINEYARD, {
            variables: { vineyard },
        });
        expect(res).toMatchSnapshot();
    });
    it('delete vineyard mutation succeds if logged in and admin', async () => {
        const vineyardToDelete = await vineyard_1.Vineyard.find({})
            .lean()
            .exec();
        const res = await mutate(DELETE_VINEYARD, {
            variables: { id: vineyardToDelete[0]._id.toString() },
        });
        expect(res).toMatchSnapshot();
    });
    it('update vineyard mutation fails if logged in and not admin', async () => {
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
        const vineyardToUpdate = await vineyard_1.Vineyard.find({})
            .lean()
            .exec();
        const vineyard = {
            _id: vineyardToUpdate[0]._id.toString(),
            name: 'Caprotto',
        };
        const res = await mutate(UPDATE_VINEYARD, {
            variables: { vineyard },
        });
        expect(res).toMatchSnapshot();
    });
    it('delete vineyard mutation fails if logged in and not admin', async () => {
        const vineyardToDelete = await vineyard_1.Vineyard.find({})
            .lean()
            .exec();
        const res = await mutate(DELETE_VINEYARD, {
            variables: { id: vineyardToDelete[0]._id.toString() },
        });
        expect(res).toMatchSnapshot();
    });
    it('create vineyard mutation fails if logged in and not admin', async () => {
        const vineyard = {
            name: 'Uva vinosa',
            colore: types_1.Colore.BIANCA,
        };
        const res = await mutate(CREATE_VINEYARD, {
            variables: { vineyard },
        });
        expect(res).toMatchSnapshot();
    });
});
afterAll(async () => {
    await integrationSetup_1.dropTestDb();
    await integrationSetup_1.closeDbConnection();
});
