/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { gql } from 'apollo-server-express';
import {
  testClient,
  connectToDb,
  dropTestDb,
  closeDbConnection,
} from '../../tests/integrationSetup';
//import { ObjectId } from 'mongodb';
import { User } from '../../models/user';
import { Ad, AdGraphQl } from '../../models/ad';
import { users, ads } from '../../tests/mocksTests';
import { NegotiationInput } from '../../generated/graphql';

import { Negotiation, NegotiationGraphQl } from '../../models/negotiation';
//import { ObjectId } from 'mongodb';
import cron from 'cron';

const fakeStart = jest.fn(() => fakeStop());
const fakeStop = jest.fn(() => null);
const FakeCron = jest.fn(() => ({
  stop: fakeStop,
  start: fakeStart,
  fireOnTick: fakeStart,
}));
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
cron.CronJob = FakeCron;

const { query, mutate, setOptions } = testClient;

const NEGOTIATIONS_USER = gql`
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

const NEGOTIATIONS_AD = gql`
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

const NEGOTIATIONS = gql`
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

const NEGOTIATION = gql`
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

const CREATE_NEGOTIATION = gql`
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

const UPDATE_NEGOTIATION = gql`
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

const DELETE_NEGOTIATION = gql`
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

const LOGIN_VALID_NOT_VERIFIED = gql`
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
  await connectToDb();
  await dropTestDb();
  const usersMock = users();
  const adsMock = ads();
  const user = new User(usersMock[0]);
  const otherUser = new User(usersMock[1]);
  const thirdUser = new User(usersMock[2]);
  const ad = new Ad({ ...adsMock[0], postedBy: user });
  const otherAd = new Ad({ ...adsMock[1], postedBy: otherUser });
  //const thirdAd = new Ad({ ...adsMock[2], postedBy: thirdUser });
  const negotiation = new Negotiation({
    createdBy: otherUser,
    ad: ad,
    forUserAd: ad.postedBy,
    type: ad.typeAd,
  });
  const otherNegotiation = new Negotiation({
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
    const ad: AdGraphQl[] = await Ad.find({}).lean().exec();
    const res = await query(NEGOTIATIONS_USER, {
      variables: { user: ad[0].postedBy.toString() },
    });
    expect(res).toMatchSnapshot();
  });

  it('query negotiationsForAd fails if not logged in', async () => {
    const ad: AdGraphQl[] = await Ad.find({}).lean().exec();
    const res = await query(NEGOTIATIONS_AD, {
      variables: { ad: ad[0]._id.toString() },
    });
    expect(res).toMatchSnapshot();
  });

  it('query single negotiation fails if not logged', async () => {
    const negotiation: NegotiationGraphQl[] = await Negotiation.find({})
      .lean()
      .exec();
    const res = await query(NEGOTIATION, {
      variables: { id: negotiation[0]._id.toString() },
    });
    expect(res).toMatchSnapshot();
  });

  it('create negotiation mutation fails if not logged in', async () => {
    const ad: AdGraphQl[] = await Ad.find({}).lean().exec();
    const negotiation: NegotiationInput = {
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
    const data: any = await mutate(LOGIN_VALID_NOT_VERIFIED);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const token: string = data.data.login.response.token;
    setOptions({
      request: {
        headers: {
          authorization: token,
        },
      },
    });
    const ad: AdGraphQl[] = await Ad.find({}).lean().exec();
    const negotiation: NegotiationInput = {
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
    const data: any = await mutate(LOGIN_VALID);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const token: string = data.data.login.response.token;
    setOptions({
      request: {
        headers: {
          authorization: token,
        },
      },
    });
    const ad: AdGraphQl[] = await Ad.find({}).lean().exec();
    const negotiation: NegotiationInput = {
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
    const data: any = await mutate(LOGIN_VALID);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const token: string = data.data.login.response.token;
    setOptions({
      request: {
        headers: {
          authorization: token,
        },
      },
    });
    const ad: AdGraphQl[] = await Ad.find({}).lean().exec();
    const negotiation: NegotiationInput = {
      ad: ad[1]._id.toString(),
      forUserAd: ad[1].postedBy.toString(),
      type: ad[1].typeAd,
    };
    const res: any = await mutate(CREATE_NEGOTIATION, {
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
    const ad = await Ad.find({}).lean().exec();
    const res = await query(NEGOTIATIONS_USER, {
      variables: { user: ad[1].postedBy.toString() },
    });
    expect(res).toMatchSnapshot();
  });

  it('query negotiationsForAd succeds if logged in', async () => {
    const ad: AdGraphQl[] = await Ad.find({}).lean().exec();
    const res = await query(NEGOTIATIONS_AD, {
      variables: { ad: ad[1]._id.toString() },
    });
    expect(res).toMatchSnapshot();
  });

  it('query single negotiation succeds if logged', async () => {
    const negotiation: NegotiationGraphQl[] = await Negotiation.find({})
      .lean()
      .exec();
    const res = await query(NEGOTIATION, {
      variables: { id: negotiation[0]._id.toString() },
    });
    expect(res).toMatchSnapshot();
  });

  it('update negotiation mutation succeds if logged in and same user', async () => {
    const user = await User.findOne({ firstName: 'Giovanni' });
    const negotiationToUpdate: NegotiationGraphQl | null = await Negotiation.findOne(
      {
        createdBy: user,
      }
    )
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
    const user = await User.findOne({ firstName: 'Luigetto' });
    const negotiationToUpdate: NegotiationGraphQl | null = await Negotiation.findOne(
      {
        createdBy: user,
      }
    )
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
    const user = await User.findOne({ firstName: 'Giovanni' });
    const negotiationToDelete: NegotiationGraphQl | null = await Negotiation.findOne(
      {
        createdBy: user,
      }
    )
      .lean()
      .exec();
    const res = await mutate(DELETE_NEGOTIATION, {
      variables: { id: negotiationToDelete?._id.toString() },
    });
    expect(res).toMatchSnapshot();
  });

  it('delete negotiation mutation fails if logged in and not same user', async () => {
    const user = await User.findOne({ firstName: 'Mariuccio' });
    const negotiationToDelete: NegotiationGraphQl | null = await Negotiation.findOne(
      {
        createdBy: user,
      }
    )
      .lean()
      .exec();
    const res = await mutate(DELETE_NEGOTIATION, {
      variables: { id: negotiationToDelete?._id.toString() },
    });
    expect(res).toMatchSnapshot();
  });

  it('query negotiations succeds if logged in and not admin, only user negotiation shown', async () => {
    const data: any = await mutate(LOGIN_VALID_OTHER);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const token: string = data.data.login.response.token;
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
  await dropTestDb();
  await closeDbConnection();
});
