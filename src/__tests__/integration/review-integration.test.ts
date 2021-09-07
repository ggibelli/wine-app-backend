/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { gql } from 'apollo-server-express';
import cron from 'cron';
import { LeanDocument, Types } from 'mongoose';
import {
  testClient,
  connectToDb,
  dropTestDb,
  closeDbConnection,
} from '../../tests/integrationSetup';
// import { ObjectId } from 'mongodb';
import { User } from '../../models/user';
import { Ad } from '../../models/ad';
import { Review } from '../../models/review';
import { users, ads } from '../../tests/mocksTests';
import { ReviewInput, TypeAd } from '../../generated/graphql';
import { Negotiation } from '../../models/negotiation';
import {
  ReviewDocument,
  NegotiationDocument,
} from '../../interfaces/mongoose.gen';

const fakeStop = jest.fn(() => null);
const fakeStart = jest.fn(() => fakeStop());
const FakeCron = jest.fn(() => ({
  stop: fakeStop,
  start: fakeStart,
  fireOnTick: fakeStart,
}));
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
cron.CronJob = FakeCron;

// import { ObjectId } from 'mongodb';

const { query, mutate, setOptions } = testClient;

const REVIEWS = gql`
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

const REVIEW = gql`
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

const CREATE_REVIEW = gql`
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

const UPDATE_REVIEW = gql`
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

const DELETE_REVIEW = gql`
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

const LOGIN_VALID = gql`
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

const LOGIN_VALID_OTHER = gql`
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
  await connectToDb();
  await dropTestDb();
  const usersMock = users();
  const adsMock = ads();
  const user = new User({ ...usersMock[0], _id: new Types.ObjectId() });
  const otherUser = new User({ ...usersMock[1], _id: new Types.ObjectId() });
  const thirdUser = new User({ ...usersMock[2], _id: new Types.ObjectId() });
  const ad = new Ad({
    ...adsMock[0],
    postedBy: user,
    _id: new Types.ObjectId(),
  });
  const otherAd = new Ad({
    ...adsMock[1],
    postedBy: otherUser,
    _id: new Types.ObjectId(),
  });
  // const thirdAd = new Ad({ ...adsMock[2], postedBy: thirdUser });
  const negotiation = new Negotiation({
    createdBy: otherUser,
    ad,
    forUserAd: ad.postedBy,
    type: ad.typeAd,
    _id: new Types.ObjectId(),
  });
  const otherNegotiation = new Negotiation({
    createdBy: thirdUser,
    ad: otherAd,
    forUserAd: otherAd.postedBy,
    type: otherAd.typeAd,
    _id: new Types.ObjectId(),
  });
  const review = new Review({
    createdBy: otherUser,
    negotiation,
    forUser: negotiation.forUserAd,
    type: ad.typeAd,
    rating: 5,
    content: 'perfect',
    _id: new Types.ObjectId(),
  });
  const otherReview = new Review({
    createdBy: thirdUser,
    negotiation: otherNegotiation,
    forUser: otherNegotiation.forUserAd,
    type: ad.typeAd,
    rating: 2,
    content: 'very poor',
    _id: new Types.ObjectId(),
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
    const review: LeanDocument<ReviewDocument>[] = await Review.find({})
      .lean()
      .exec();
    const res = await query(REVIEW, {
      variables: { id: review[0]._id.toString() },
    });
    expect(res).toMatchSnapshot();
  });

  it('create review mutation fails if not logged in', async () => {
    const negotiation: LeanDocument<NegotiationDocument>[] =
      await Negotiation.find({}).lean().exec();
    const review: ReviewInput = {
      negotiation: negotiation[0]._id.toString(),
      forUser: negotiation[0].forUserAd.toString(),
      type: negotiation[0].type as TypeAd,
      rating: 4,
      content: 'super good',
    };
    const res = await mutate(CREATE_REVIEW, {
      variables: { review },
    });
    expect(res).toMatchSnapshot();
  });

  it('create review mutation successfull', async () => {
    const data: any = await mutate(LOGIN_VALID);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const { token } = data.data.login.response;
    setOptions({
      request: {
        headers: {
          authorization: token,
        },
      },
    });
    const negotiation: LeanDocument<NegotiationDocument>[] =
      await Negotiation.find({}).lean().exec();
    const review: ReviewInput = {
      negotiation: negotiation[1]._id.toString(),
      forUser: negotiation[1].forUserAd.toString(),
      type: negotiation[1].type as TypeAd,
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
    const negotiation: LeanDocument<NegotiationDocument>[] =
      await Negotiation.find({}).lean().exec();
    const review: ReviewInput = {
      negotiation: negotiation[1]._id.toString(),
      forUser: negotiation[1].forUserAd.toString(),
      type: negotiation[1].type as TypeAd,
      rating: 3,
      content: 'average',
    };
    const res: any = await mutate(CREATE_REVIEW, {
      variables: { review },
    });
    expect(res.data.createReview.response).toBeNull();
    expect(res.data.createReview.errors).toHaveLength(1);
  });

  it('create review mutation fails if is for own user', async () => {
    const negotiation: LeanDocument<NegotiationDocument>[] =
      await Negotiation.find({}).lean().exec();
    const review: ReviewInput = {
      negotiation: negotiation[0]._id.toString(),
      forUser: negotiation[0].forUserAd.toString(),
      type: negotiation[0].type as TypeAd,
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
    const review: LeanDocument<ReviewDocument>[] = await Review.find({})
      .lean()
      .exec();
    const res = await query(REVIEW, {
      variables: { id: review[0]._id.toString() },
    });
    expect(res).toMatchSnapshot();
  });

  it('update review mutation succeds if logged in and same user', async () => {
    const user = await User.findOne({ firstName: 'Giovanni' });
    if (!user) throw new Error();
    const reviewToUpdate: LeanDocument<ReviewDocument> | null =
      await Review.findOne({
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
    const user = await User.findOne({ firstName: 'Mariuccio' });
    if (!user) throw new Error();

    const reviewToUpdate: LeanDocument<ReviewDocument> | null =
      await Review.findOne({
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
    const user = await User.findOne({ firstName: 'Giovanni' });
    if (!user) throw new Error();

    const reviewToDelete: LeanDocument<ReviewDocument> | null =
      await Review.findOne({
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
    const user = await User.findOne({ firstName: 'Mariuccio' });
    if (!user) throw new Error();

    const reviewToDelete: LeanDocument<ReviewDocument> | null =
      await Review.findOne({
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
    const data: any = await mutate(LOGIN_VALID_OTHER);
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
  await dropTestDb();
  await closeDbConnection();
});
