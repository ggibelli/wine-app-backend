"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const apollo_server_express_1 = require("apollo-server-express");
const integrationSetup_1 = require("../../tests/integrationSetup");
//import { ObjectId } from 'mongodb';
const user_1 = require("../../models/user");
const ad_1 = require("../../models/ad");
const mocksTests_1 = require("../../tests/mocksTests");
const negotiation_1 = require("../../models/negotiation");
//import { ObjectId } from 'mongodb';
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
const { query, mutate, setOptions } = integrationSetup_1.testClient;
const NEGOTIATIONS_USER = apollo_server_express_1.gql `
  query GetNegotiationsUser($user: ID!) {
    negotiationsWithUser(forUserAd: $user) {
      createdBy {
        firstName
      }
      ad {
        content
      }
      forUserAd {
        firstName
      }
      isConcluded
    }
  }
`;
const NEGOTIATIONS_AD = apollo_server_express_1.gql `
  query GetNegotiationsAd($ad: ID!) {
    negotiationsForAd(ad: $ad) {
      createdBy {
        firstName
      }
      ad {
        content
      }
      forUserAd {
        firstName
      }
      isConcluded
    }
  }
`;
const NEGOTIATIONS = apollo_server_express_1.gql `
  {
    negotiations {
      negotiations {
        createdBy {
          firstName
        }
        ad {
          content
        }
        forUserAd {
          firstName
        }
        isConcluded
      }
    }
  }
`;
const NEGOTIATION = apollo_server_express_1.gql `
  query GetNegotiation($id: ID!) {
    negotiation(id: $id) {
      createdBy {
        firstName
      }
      ad {
        content
        ... on AdWine {
          wineName
        }
        ... on AdGrape {
          vineyardName
        }
      }
      forUserAd {
        firstName
      }
      isConcluded
    }
  }
`;
const CREATE_NEGOTIATION = apollo_server_express_1.gql `
  mutation CreateNegotiation($negotiation: NegotiationInput!) {
    createNegotiation(negotiation: $negotiation) {
      response {
        createdBy {
          firstName
        }
        ad {
          ... on AdWine {
            wineName
          }
          ... on AdGrape {
            vineyardName
          }
        }
        forUserAd {
          firstName
        }
        isConcluded
      }
      errors {
        name
        text
      }
    }
  }
`;
const UPDATE_NEGOTIATION = apollo_server_express_1.gql `
  mutation UpdateNegotiation($negotiation: NegotiationInputUpdate!) {
    updateNegotiation(negotiation: $negotiation) {
      response {
        createdBy {
          firstName
        }
        ad {
          ... on AdWine {
            wineName
          }
          ... on AdGrape {
            vineyardName
          }
        }
        forUserAd {
          firstName
        }
        isConcluded
      }
      errors {
        name
        text
      }
    }
  }
`;
const DELETE_NEGOTIATION = apollo_server_express_1.gql `
  mutation DeleteNegotiation($id: ID!) {
    deleteNegotiation(id: $id) {
      response {
        createdBy {
          firstName
        }
        ad {
          ... on AdWine {
            wineName
          }
          ... on AdGrape {
            vineyardName
          }
        }
        forUserAd {
          firstName
        }
        isConcluded
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
const LOGIN_VALID_NOT_VERIFIED = apollo_server_express_1.gql `
  mutation {
    login(email: "prova@prova.it", password: "giovanni") {
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
    const adsMock = mocksTests_1.ads();
    const user = new user_1.User(usersMock[0]);
    const otherUser = new user_1.User(usersMock[1]);
    const thirdUser = new user_1.User(usersMock[2]);
    const ad = new ad_1.Ad({ ...adsMock[0], postedBy: user });
    const otherAd = new ad_1.Ad({ ...adsMock[1], postedBy: otherUser });
    //const thirdAd = new Ad({ ...adsMock[2], postedBy: thirdUser });
    const negotiation = new negotiation_1.Negotiation({
        createdBy: otherUser,
        ad: ad,
        forUserAd: ad.postedBy,
        type: ad.typeAd,
    });
    const otherNegotiation = new negotiation_1.Negotiation({
        createdBy: thirdUser,
        ad: otherAd,
        forUserAd: otherAd.postedBy,
        type: otherAd.typeAd,
    });
    await user.save();
    await otherUser.save();
    await thirdUser.save();
    await ad.save();
    await otherAd.save();
    await negotiation.save();
    await otherNegotiation.save();
});
describe('Integration test negotiations', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    it('query negotiations fails if not logged in', async () => {
        const res = await query(NEGOTIATIONS);
        expect(res).toMatchSnapshot();
    });
    it('query negotiationsWithUser fails if not logged in', async () => {
        const ad = await ad_1.Ad.find({}).lean().exec();
        const res = await query(NEGOTIATIONS_USER, {
            variables: { user: ad[0].postedBy.toString() },
        });
        expect(res).toMatchSnapshot();
    });
    it('query negotiationsForAd fails if not logged in', async () => {
        const ad = await ad_1.Ad.find({}).lean().exec();
        const res = await query(NEGOTIATIONS_AD, {
            variables: { ad: ad[0]._id.toString() },
        });
        expect(res).toMatchSnapshot();
    });
    it('query single negotiation fails if not logged', async () => {
        const negotiation = await negotiation_1.Negotiation.find({})
            .lean()
            .exec();
        const res = await query(NEGOTIATION, {
            variables: { id: negotiation[0]._id.toString() },
        });
        expect(res).toMatchSnapshot();
    });
    it('create negotiation mutation fails if not logged in', async () => {
        const ad = await ad_1.Ad.find({}).lean().exec();
        const negotiation = {
            ad: ad[0]._id.toString(),
            forUserAd: ad[0].postedBy.toString(),
            type: ad[0].typeAd,
        };
        const res = await mutate(CREATE_NEGOTIATION, {
            variables: { negotiation: negotiation },
        });
        expect(res).toMatchSnapshot();
    });
    it('create negotiation mutation fails if user not verified', async () => {
        const data = await mutate(LOGIN_VALID_NOT_VERIFIED);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        const token = data.data.login.response.token;
        setOptions({
            request: {
                headers: {
                    authorization: token,
                },
            },
        });
        const ad = await ad_1.Ad.find({}).lean().exec();
        const negotiation = {
            ad: ad[1]._id.toString(),
            forUserAd: ad[1].postedBy.toString(),
            type: ad[1].typeAd,
        };
        const res = await mutate(CREATE_NEGOTIATION, {
            variables: { negotiation },
        });
        expect(res).toMatchSnapshot();
    });
    it('create negotiation mutation successfull', async () => {
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
        const ad = await ad_1.Ad.find({}).lean().exec();
        const negotiation = {
            ad: ad[1]._id.toString(),
            forUserAd: ad[1].postedBy.toString(),
            type: ad[1].typeAd,
        };
        const res = await mutate(CREATE_NEGOTIATION, {
            variables: { negotiation },
        });
        expect(fakeStart).toBeCalledTimes(1);
        expect(fakeStop).toBeCalledTimes(1);
        expect(res).toMatchSnapshot();
    });
    it('create negotiation mutation fails if is same ad and user', async () => {
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
        const ad = await ad_1.Ad.find({}).lean().exec();
        const negotiation = {
            ad: ad[1]._id.toString(),
            forUserAd: ad[1].postedBy.toString(),
            type: ad[1].typeAd,
        };
        const res = await mutate(CREATE_NEGOTIATION, {
            variables: { negotiation },
        });
        expect(res.data.createNegotiation.response).toBeNull();
        expect(res.data.createNegotiation.errors).toHaveLength(1);
    });
    it('query negotiations succeds if logged in and admin, all are shown', async () => {
        const res = await query(NEGOTIATIONS);
        expect(res).toMatchSnapshot();
    });
    it('query negotiationsWithUser succeds if logged in', async () => {
        const ad = await ad_1.Ad.find({}).lean().exec();
        const res = await query(NEGOTIATIONS_USER, {
            variables: { user: ad[1].postedBy.toString() },
        });
        expect(res).toMatchSnapshot();
    });
    it('query negotiationsForAd succeds if logged in', async () => {
        const ad = await ad_1.Ad.find({}).lean().exec();
        const res = await query(NEGOTIATIONS_AD, {
            variables: { ad: ad[1]._id.toString() },
        });
        expect(res).toMatchSnapshot();
    });
    it('query single negotiation succeds if logged', async () => {
        const negotiation = await negotiation_1.Negotiation.find({})
            .lean()
            .exec();
        const res = await query(NEGOTIATION, {
            variables: { id: negotiation[0]._id.toString() },
        });
        expect(res).toMatchSnapshot();
    });
    it('update negotiation mutation succeds if logged in and same user', async () => {
        const user = await user_1.User.findOne({ firstName: 'Giovanni' });
        const negotiationToUpdate = await negotiation_1.Negotiation.findOne({
            createdBy: user,
        })
            .lean()
            .exec();
        const negotiation = {
            _id: negotiationToUpdate?._id.toString(),
            isConcluded: true,
        };
        const res = await mutate(UPDATE_NEGOTIATION, {
            variables: { negotiation: negotiation },
        });
        expect(res).toMatchSnapshot();
    });
    it('update negotiation mutation fails if logged in and not same user', async () => {
        const user = await user_1.User.findOne({ firstName: 'Luigetto' });
        const negotiationToUpdate = await negotiation_1.Negotiation.findOne({
            createdBy: user,
        })
            .lean()
            .exec();
        const negotiation = {
            _id: negotiationToUpdate?._id.toString(),
            isConcluded: true,
        };
        const res = await mutate(UPDATE_NEGOTIATION, {
            variables: { negotiation },
        });
        expect(res).toMatchSnapshot();
    });
    it('delete negotiation mutation succeds if logged in and same user', async () => {
        const user = await user_1.User.findOne({ firstName: 'Giovanni' });
        const negotiationToDelete = await negotiation_1.Negotiation.findOne({
            createdBy: user,
        })
            .lean()
            .exec();
        const res = await mutate(DELETE_NEGOTIATION, {
            variables: { id: negotiationToDelete?._id.toString() },
        });
        expect(res).toMatchSnapshot();
    });
    it('delete negotiation mutation fails if logged in and not same user', async () => {
        const user = await user_1.User.findOne({ firstName: 'Mariuccio' });
        const negotiationToDelete = await negotiation_1.Negotiation.findOne({
            createdBy: user,
        })
            .lean()
            .exec();
        const res = await mutate(DELETE_NEGOTIATION, {
            variables: { id: negotiationToDelete?._id.toString() },
        });
        expect(res).toMatchSnapshot();
    });
    it('query negotiations succeds if logged in and not admin, only user negotiation shown', async () => {
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
        const res = await query(NEGOTIATIONS);
        expect(res).toMatchSnapshot();
    });
});
afterAll(async () => {
    await integrationSetup_1.dropTestDb();
    await integrationSetup_1.closeDbConnection();
});
