"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
const apollo_server_express_1 = require("apollo-server-express");
const integrationSetup_1 = require("../../tests/integrationSetup");
const user_1 = require("../../models/user");
const mocksTests_1 = require("../../tests/mocksTests");
const types_1 = require("../../types");
const supertest_1 = __importDefault(require("supertest"));
const index_1 = require("../../index");
const ad_1 = require("../../models/ad");
const message_1 = require("../../models/message");
const negotiation_1 = require("../../models/negotiation");
const review_1 = require("../../models/review");
const wine_1 = require("../../models/wine");
// import createWineDb from '../../utils/wineExtractor';
const cron_1 = __importDefault(require("cron"));
const fakeStart = jest.fn(() => fakeStop());
const fakeStop = jest.fn(() => null);
const FakeCron = jest.fn(() => ({
    stop: fakeStop,
    start: fakeStart,
    fireOnTick: fakeStart,
}));
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
cron_1.default.CronJob = FakeCron;
const api = supertest_1.default(index_1.app);
const { query, mutate, setOptions } = integrationSetup_1.testClient;
const LOGIN_VALID = apollo_server_express_1.gql `
  mutation {
    login(email: "gio@prova.it", password: "giovanni") {
      response {
        token
      }
      errors {
        name
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
const LOGIN_INVALID = apollo_server_express_1.gql `
  mutation {
    login(email: "wrong", password: "giovanni") {
      response {
        token
      }
      errors {
        name
      }
    }
  }
`;
const CREATE_USER = apollo_server_express_1.gql `
  mutation CreateUser($auth: UserInput!) {
    createUser(user: $auth) {
      response {
        token
        user {
          isVerified
        }
      }
      errors {
        name
        text
      }
    }
  }
`;
const ME = apollo_server_express_1.gql `
  {
    me {
      pIva
      phoneNumber
      isVerified
    }
  }
`;
const ME_FULL = apollo_server_express_1.gql `
  {
    me {
      pIva
      phoneNumber
      isVerified
      savedAds {
        content
      }
      ads {
        postedBy {
          firstName
        }
        ... on AdWine {
          wineName
        }
      }
      negotiations {
        createdBy {
          firstName
        }
        forUserAd {
          firstName
        }
      }
      messages {
        content
        sentBy {
          firstName
        }
        sentTo {
          firstName
        }
      }
      reviews {
        createdBy {
          firstName
        }
        forUser {
          firstName
        }
        rating
      }
    }
  }
`;
const USERS = apollo_server_express_1.gql `
  {
    users {
      firstName
      phoneNumber
      email
      ads {
        postedBy {
          firstName
        }
        ... on AdWine {
          wineName
        }
      }
      negotiations {
        createdBy {
          firstName
        }
        forUserAd {
          firstName
        }
      }
      messages {
        content
        sentBy {
          firstName
        }
        sentTo {
          firstName
        }
      }
      reviews {
        createdBy {
          firstName
        }
        forUser {
          firstName
        }
        rating
      }
    }
  }
`;
const USER = apollo_server_express_1.gql `
  query GetUser($id: ID!) {
    user(id: $id) {
      firstName
      ads {
        postedBy {
          firstName
        }
        ... on AdWine {
          wineName
        }
      }
      negotiations {
        createdBy {
          firstName
        }
        forUserAd {
          firstName
        }
      }
      messages {
        content
        sentBy {
          firstName
        }
        sentTo {
          firstName
        }
      }
      reviews {
        createdBy {
          firstName
        }
        forUser {
          firstName
        }
        rating
      }
    }
  }
`;
const indirizzo = {
    via: 'asd asddasd',
    CAP: '12345',
    comune: 'aaaaa',
    provincia: types_1.Province.AT,
    regione: types_1.Regioni.PIEMONTE,
};
beforeAll(async () => {
    await integrationSetup_1.connectToDb();
    await integrationSetup_1.dropTestDb();
    const usersMock = mocksTests_1.users();
    const adsMock = mocksTests_1.ads();
    // const wineDb = await createWineDb();
    const user = new user_1.User(usersMock[0]);
    const otherUser = new user_1.User(usersMock[1]);
    const thirdUser = new user_1.User(usersMock[2]);
    const ad = new ad_1.Ad({ ...adsMock[0], postedBy: user });
    const otherAd = new ad_1.Ad({ ...adsMock[1], postedBy: otherUser });
    const negotiation = new negotiation_1.Negotiation({
        createdBy: user,
        ad: otherAd,
        forUserAd: otherAd.postedBy,
        type: otherAd.typeAd,
    });
    const otherNegotiation = new negotiation_1.Negotiation({
        createdBy: thirdUser,
        ad: ad,
        forUserAd: ad.postedBy,
        type: ad.typeAd,
    });
    const review = new review_1.Review({
        createdBy: user,
        negotiation: negotiation,
        forUser: negotiation.forUserAd,
        type: ad.typeAd,
        rating: 5,
        content: 'perfect',
    });
    const otherReview = new review_1.Review({
        createdBy: thirdUser,
        negotiation: otherNegotiation,
        forUser: otherNegotiation.forUserAd,
        type: ad.typeAd,
        rating: 2,
        content: 'very poor',
    });
    const wine = new wine_1.Wine({
        denominazioneVino: 'Abruzzo',
        espressioneComunitaria: 'DOP',
        denominazioneZona: 'DOC',
    });
    const message = new message_1.Message({
        negotiation: negotiation,
        sentBy: negotiation.createdBy,
        sentTo: negotiation.forUserAd,
        content: 'ciao',
    });
    const otherMessage = new message_1.Message({
        negotiation: otherNegotiation,
        sentBy: otherNegotiation.createdBy,
        sentTo: otherNegotiation.forUserAd,
        content: 'ciao di nuovo',
    });
    user.savedAds?.addToSet(ad);
    otherUser.savedAds?.addToSet(otherAd);
    await message.save();
    await otherMessage.save();
    await otherUser.save();
    await thirdUser.save();
    await ad.save();
    await otherAd.save();
    await negotiation.save();
    await otherNegotiation.save();
    await review.save();
    await otherReview.save();
    await wine.save();
    await user.save();
});
describe('Integration test users', () => {
    it('valid login mutation returns token', async () => {
        const res = await query(LOGIN_VALID);
        //expect(res).toMatchSnapshot();
        expect(res.data.login.response.token).toBeDefined();
    });
    it('invalid login mutation returns errors', async () => {
        const res = await query(LOGIN_INVALID);
        expect(res).toMatchSnapshot();
        //expect(res.data.login.response).toBeNull();
        //expect(res.data.login.errors).toBeDefined();
    });
    it('create user mutation successfull and activation successfull', async () => {
        jest.setTimeout(30000);
        const auth = {
            email: 'giollo@ollo.it',
            password: 'Pro@3###4~~vaPassWord!23',
            firstName: 'Giova',
            lastName: 'Gibelli',
            pIva: '01640250054',
            phoneNumber: '1234527890',
            address: indirizzo,
            hideContact: false,
        };
        const res = await mutate(CREATE_USER, {
            variables: { auth: auth },
        });
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const token = res.data.createUser.response.token;
        await api.get(`/verify?id=${token}`).expect(200);
        expect(res.data.createUser.response.token).toBeDefined();
        expect(res.errors).toBeUndefined();
        expect(res.data.createUser.response.user.isVerified).toBeFalsy();
        setOptions({
            request: {
                headers: {
                    authorization: token,
                },
            },
        });
        const meQuery = await query(ME);
        expect(meQuery).toMatchSnapshot();
        expect(fakeStart).toBeCalledTimes(1);
        expect(fakeStop).toBeCalledTimes(1);
    });
    it('query me is successfull if logged in, shows parameter meant for user Giovanni', async () => {
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
        const res = await query(ME_FULL);
        expect(res).toMatchSnapshot();
    });
    it('query single user is successfull if logged in, shows sensitive parameter meant for user in ctx', async () => {
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
        const user = await user_1.User.findOne({ email: 'gio@prova.it' }).lean().exec();
        const res = await query(USER, {
            variables: {
                id: user?._id.toString(),
            },
        });
        expect(res).toMatchSnapshot();
    });
    it('query single user is successfull if logged in, shows sensitive parameter meant for user in ctx and forbidden if not same user', async () => {
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
        const user = await user_1.User.findOne({ email: 'gio2@prova.it' }).lean().exec();
        const res = await query(USER, {
            variables: {
                id: user?._id.toString(),
            },
        });
        expect(res).toMatchSnapshot();
    });
    it('query users is successfull if logged in, shows sensitive parameters only to user in ctx', async () => {
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
        const res = await query(USERS);
        expect(res).toMatchSnapshot();
    });
    it('query me is successfull if logged in, shows parameter meant for user Mariuccio', async () => {
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
        const res = await query(ME_FULL);
        expect(res).toMatchSnapshot();
    });
    it('query me fails if not logged ', async () => {
        setOptions({
            request: {
                headers: {
                    authorization: '123',
                },
            },
        });
        const res = await query(ME_FULL);
        expect(res).toMatchSnapshot();
    });
    it('query users fails if not logged ', async () => {
        setOptions({
            request: {
                headers: {
                    authorization: '123',
                },
            },
        });
        const res = await query(USERS);
        expect(res).toMatchSnapshot();
    });
    it('create user mutation returns errors if parameters are invalid', async () => {
        const auth = {
            email: 'sbagliata#oo.it',
            password: 'facile',
            firstName: 'Giova',
            lastName: 'Gibelli',
            pIva: '0101010101',
            phoneNumber: '123',
            address: indirizzo,
            hideContact: true,
        };
        const res = await mutate(CREATE_USER, {
            variables: { auth: auth },
        });
        expect(res).toMatchSnapshot();
        //expect(res.data.createUser.response).toBeNull();
        //expect(res.data.createUser.errors).toHaveLength(3);
    });
});
afterAll(async () => {
    await integrationSetup_1.dropTestDb();
    await integrationSetup_1.closeDbConnection();
});
