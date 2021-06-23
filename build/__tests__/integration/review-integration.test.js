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
const cron_1 = __importDefault(require("cron"));
const mongoose_1 = require("mongoose");
const integrationSetup_1 = require("../../tests/integrationSetup");
// import { ObjectId } from 'mongodb';
const user_1 = require("../../models/user");
const ad_1 = require("../../models/ad");
const review_1 = require("../../models/review");
const mocksTests_1 = require("../../tests/mocksTests");
const negotiation_1 = require("../../models/negotiation");
const fakeStop = jest.fn(() => null);
const fakeStart = jest.fn(() => fakeStop());
const FakeCron = jest.fn(() => ({
    stop: fakeStop,
    start: fakeStart,
    fireOnTick: fakeStart,
}));
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
cron_1.default.CronJob = FakeCron;
// import { ObjectId } from 'mongodb';
const { query, mutate, setOptions } = integrationSetup_1.testClient;
const REVIEWS = apollo_server_express_1.gql `
  {
    reviews {
      reviews {
        createdBy {
          firstName
        }
        negotiation {
          type
        }
        forUser {
          firstName
        }
        rating
      }
    }
  }
`;
const REVIEW = apollo_server_express_1.gql `
  query GetReview($id: ID!) {
    review(id: $id) {
      createdBy {
        firstName
      }
      negotiation {
        type
      }
      forUser {
        firstName
      }
      rating
    }
  }
`;
const CREATE_REVIEW = apollo_server_express_1.gql `
  mutation CreateReview($review: ReviewInput!) {
    createReview(review: $review) {
      response {
        createdBy {
          firstName
        }
        negotiation {
          type
        }
        forUser {
          firstName
        }
        rating
      }
      errors {
        name
        text
      }
    }
  }
`;
const UPDATE_REVIEW = apollo_server_express_1.gql `
  mutation UpdateReview($review: ReviewInputUpdate!) {
    updateReview(review: $review) {
      response {
        createdBy {
          firstName
        }
        negotiation {
          type
        }
        forUser {
          firstName
        }
        rating
      }
      errors {
        name
        text
      }
    }
  }
`;
const DELETE_REVIEW = apollo_server_express_1.gql `
  mutation DeleteReview($id: ID!) {
    deleteReview(id: $id) {
      response {
        createdBy {
          firstName
        }
        negotiation {
          type
        }
        forUser {
          firstName
        }
        rating
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
    const adsMock = mocksTests_1.ads();
    const user = new user_1.User({ ...usersMock[0], _id: new mongoose_1.Types.ObjectId() });
    const otherUser = new user_1.User({ ...usersMock[1], _id: new mongoose_1.Types.ObjectId() });
    const thirdUser = new user_1.User({ ...usersMock[2], _id: new mongoose_1.Types.ObjectId() });
    const ad = new ad_1.Ad({
        ...adsMock[0],
        postedBy: user,
        _id: new mongoose_1.Types.ObjectId(),
    });
    const otherAd = new ad_1.Ad({
        ...adsMock[1],
        postedBy: otherUser,
        _id: new mongoose_1.Types.ObjectId(),
    });
    // const thirdAd = new Ad({ ...adsMock[2], postedBy: thirdUser });
    const negotiation = new negotiation_1.Negotiation({
        createdBy: otherUser,
        ad,
        forUserAd: ad.postedBy,
        type: ad.typeAd,
        _id: new mongoose_1.Types.ObjectId(),
    });
    const otherNegotiation = new negotiation_1.Negotiation({
        createdBy: thirdUser,
        ad: otherAd,
        forUserAd: otherAd.postedBy,
        type: otherAd.typeAd,
        _id: new mongoose_1.Types.ObjectId(),
    });
    const review = new review_1.Review({
        createdBy: otherUser,
        negotiation,
        forUser: negotiation.forUserAd,
        type: ad.typeAd,
        rating: 5,
        content: 'perfect',
        _id: new mongoose_1.Types.ObjectId(),
    });
    const otherReview = new review_1.Review({
        createdBy: thirdUser,
        negotiation: otherNegotiation,
        forUser: otherNegotiation.forUserAd,
        type: ad.typeAd,
        rating: 2,
        content: 'very poor',
        _id: new mongoose_1.Types.ObjectId(),
    });
    await user.save();
    await otherUser.save();
    await thirdUser.save();
    await ad.save();
    await otherAd.save();
    await negotiation.save();
    await otherNegotiation.save();
    await review.save();
    await otherReview.save();
});
describe('Integration test reviews', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    it('query reviews fails if not logged in', async () => {
        const res = await query(REVIEWS);
        expect(res).toMatchSnapshot();
    });
    it('query single review fails if not logged', async () => {
        const review = await review_1.Review.find({})
            .lean()
            .exec();
        const res = await query(REVIEW, {
            variables: { id: review[0]._id.toString() },
        });
        expect(res).toMatchSnapshot();
    });
    it('create review mutation fails if not logged in', async () => {
        const negotiation = await negotiation_1.Negotiation.find({}).lean().exec();
        const review = {
            negotiation: negotiation[0]._id.toString(),
            forUser: negotiation[0].forUserAd.toString(),
            type: negotiation[0].type,
            rating: 4,
            content: 'super good',
        };
        const res = await mutate(CREATE_REVIEW, {
            variables: { review },
        });
        expect(res).toMatchSnapshot();
    });
    it('create review mutation successfull', async () => {
        const data = await mutate(LOGIN_VALID);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        const { token } = data.data.login.response;
        setOptions({
            request: {
                headers: {
                    authorization: token,
                },
            },
        });
        const negotiation = await negotiation_1.Negotiation.find({}).lean().exec();
        const review = {
            negotiation: negotiation[1]._id.toString(),
            forUser: negotiation[1].forUserAd.toString(),
            type: negotiation[1].type,
            rating: 3,
            content: 'average',
        };
        const res = await mutate(CREATE_REVIEW, {
            variables: { review },
        });
        expect(res).toMatchSnapshot();
        expect(fakeStart).toBeCalledTimes(1);
        expect(fakeStop).toBeCalledTimes(1);
    });
    it('create review mutation fails if same negotiation and user', async () => {
        const negotiation = await negotiation_1.Negotiation.find({}).lean().exec();
        const review = {
            negotiation: negotiation[1]._id.toString(),
            forUser: negotiation[1].forUserAd.toString(),
            type: negotiation[1].type,
            rating: 3,
            content: 'average',
        };
        const res = await mutate(CREATE_REVIEW, {
            variables: { review },
        });
        expect(res.data.createReview.response).toBeNull();
        expect(res.data.createReview.errors).toHaveLength(1);
    });
    it('create review mutation fails if is for own user', async () => {
        const negotiation = await negotiation_1.Negotiation.find({}).lean().exec();
        const review = {
            negotiation: negotiation[0]._id.toString(),
            forUser: negotiation[0].forUserAd.toString(),
            type: negotiation[0].type,
            rating: 2,
            content: 'average',
        };
        const res = await mutate(CREATE_REVIEW, {
            variables: { review },
        });
        expect(res).toMatchSnapshot();
    });
    it('query reviews succeds if logged in and admin, all are shown', async () => {
        const res = await query(REVIEWS);
        expect(res).toMatchSnapshot();
    });
    it('query single review succeds if logged', async () => {
        const review = await review_1.Review.find({})
            .lean()
            .exec();
        const res = await query(REVIEW, {
            variables: { id: review[0]._id.toString() },
        });
        expect(res).toMatchSnapshot();
    });
    it('update review mutation succeds if logged in and same user', async () => {
        const user = await user_1.User.findOne({ firstName: 'Giovanni' });
        if (!user)
            throw new Error();
        const reviewToUpdate = await review_1.Review.findOne({
            createdBy: user,
        })
            .lean()
            .exec();
        const review = {
            _id: reviewToUpdate?._id.toString(),
            content: 'cambiato',
        };
        const res = await mutate(UPDATE_REVIEW, {
            variables: { review },
        });
        expect(res).toMatchSnapshot();
    });
    it('update review mutation fails if logged in and not same user', async () => {
        const user = await user_1.User.findOne({ firstName: 'Mariuccio' });
        if (!user)
            throw new Error();
        const reviewToUpdate = await review_1.Review.findOne({
            createdBy: user,
        })
            .lean()
            .exec();
        const review = {
            _id: reviewToUpdate?._id.toString(),
            content: 'non cambiato',
        };
        const res = await mutate(UPDATE_REVIEW, {
            variables: { review },
        });
        expect(res).toMatchSnapshot();
    });
    it('delete review mutation succeds if logged in and same user', async () => {
        const user = await user_1.User.findOne({ firstName: 'Giovanni' });
        if (!user)
            throw new Error();
        const reviewToDelete = await review_1.Review.findOne({
            createdBy: user,
        })
            .lean()
            .exec();
        const res = await mutate(DELETE_REVIEW, {
            variables: { id: reviewToDelete?._id.toString() },
        });
        expect(res).toMatchSnapshot();
    });
    it('delete review mutation fails if logged in and not same user', async () => {
        const user = await user_1.User.findOne({ firstName: 'Mariuccio' });
        if (!user)
            throw new Error();
        const reviewToDelete = await review_1.Review.findOne({
            createdBy: user,
        })
            .lean()
            .exec();
        const res = await mutate(DELETE_REVIEW, {
            variables: { id: reviewToDelete?._id.toString() },
        });
        expect(res).toMatchSnapshot();
    });
    it('query reviews succeds if logged in and not admin, only user review shown', async () => {
        const data = await mutate(LOGIN_VALID_OTHER);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        const { token } = data.data.login.response;
        setOptions({
            request: {
                headers: {
                    authorization: token,
                },
            },
        });
        const res = await query(REVIEWS);
        expect(res).toMatchSnapshot();
    });
});
afterAll(async () => {
    await integrationSetup_1.dropTestDb();
    await integrationSetup_1.closeDbConnection();
});
