/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { gql } from 'apollo-server-express';
import {
  testClient,
  connectToDb,
  dropTestDb,
  closeDbConnection,
} from '../../tests/integrationSetup';
import { User } from '../../models/user';
import { ads, users } from '../../tests/mocksTests';
import { UserInput } from '../../generated/graphql';
import { Province, Rating, Regioni } from '../../types';
import supertest from 'supertest';
import { app } from '../../index';
import { Ad } from '../../models/ad';
import { Message } from '../../models/message';
import { Negotiation } from '../../models/negotiation';
import { Review } from '../../models/review';
import { Vineyard } from '../../models/vineyard';
import { Wine } from '../../models/wine';
import createVineyardDb from '../../utils/vineyardExtractor';
// import createWineDb from '../../utils/wineExtractor';
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

const api = supertest(app);
const { query, mutate, setOptions } = testClient;

interface Response {
  data: any;
  errors: any;
}

const LOGIN_VALID = gql`
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

const LOGIN_INVALID = gql`
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

const CREATE_USER = gql`
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

const ME = gql`
  {
    me {
      pIva
      phoneNumber
      isVerified
    }
  }
`;

const ME_FULL = gql`
  {
    me {
      pIva
      phoneNumber
      isVerified
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

const USERS = gql`
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

const USER = gql`
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
  provincia: Province.AT,
  regione: Regioni.PIEMONTE,
};

beforeAll(async () => {
  await connectToDb();
  await dropTestDb();
  const usersMock = users();
  const adsMock = ads();
  // const wineDb = await createWineDb();
  const vineyardDb = createVineyardDb();
  const user = new User(usersMock[0]);
  const otherUser = new User(usersMock[1]);
  const thirdUser = new User(usersMock[2]);

  const ad = new Ad({ ...adsMock[0], postedBy: user });
  const otherAd = new Ad({ ...adsMock[1], postedBy: otherUser });
  const negotiation = new Negotiation({
    createdBy: user,
    ad: otherAd,
    forUserAd: otherAd.postedBy,
    type: otherAd.typeAd,
  });
  const otherNegotiation = new Negotiation({
    createdBy: thirdUser,
    ad: ad,
    forUserAd: ad.postedBy,
    type: ad.typeAd,
  });
  const review = new Review({
    createdBy: user,
    negotiation: negotiation,
    forUser: negotiation.forUserAd,
    type: ad.typeAd,
    rating: Rating.PERFECT,
    content: 'perfect',
  });
  const otherReview = new Review({
    createdBy: thirdUser,
    negotiation: otherNegotiation,
    forUser: otherNegotiation.forUserAd,
    type: ad.typeAd,
    rating: Rating.POOR,
    content: 'very poor',
  });
  const vineyard = new Vineyard(vineyardDb[0]);
  const wine = new Wine({
    denominazioneVino: 'Abruzzo',
    espressioneComunitaria: 'DOP',
    denominazioneZona: 'DOC',
    regione: [Regioni.ABRUZZO],
  });
  const message = new Message({
    negotiation: negotiation,
    sentBy: negotiation.createdBy,
    sentTo: negotiation.forUserAd,
    content: 'ciao',
  });
  const otherMessage = new Message({
    negotiation: otherNegotiation,
    sentBy: otherNegotiation.createdBy,
    sentTo: otherNegotiation.forUserAd,
    content: 'ciao di nuovo',
  });
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
  await vineyard.save();
  await wine.save();

  await user.save();
});

describe('Integration test users', () => {
  it('valid login mutation returns token', async () => {
    const res: Response = await query(LOGIN_VALID);
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

    const auth: UserInput = {
      email: 'giollo@ollo.it',
      password: 'Pro@3###4~~vaPassWord!23',
      firstName: 'Giova',
      lastName: 'Gibelli',
      pIva: '01640250054',
      phoneNumber: '1234527890',
      address: indirizzo,
      hideContact: false,
    };
    const res: Response = await mutate(CREATE_USER, {
      variables: { auth: auth },
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const token: string = res.data.createUser.response.token;
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
    const res = await query(ME_FULL);
    expect(res).toMatchSnapshot();
  });

  it('query single user is successfull if logged in, shows sensitive parameter meant for user in ctx', async () => {
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
    const user = await User.findOne({ email: 'gio@prova.it' }).lean().exec();
    const res = await query(USER, {
      variables: {
        id: user?._id.toString(),
      },
    });
    expect(res).toMatchSnapshot();
  });

  it('query single user is successfull if logged in, shows sensitive parameter meant for user in ctx and forbidden if not same user', async () => {
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
    const user = await User.findOne({ email: 'gio2@prova.it' }).lean().exec();
    const res = await query(USER, {
      variables: {
        id: user?._id.toString(),
      },
    });
    expect(res).toMatchSnapshot();
  });

  it('query users is successfull if logged in, shows sensitive parameters only to user in ctx', async () => {
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
    const res = await query(USERS);
    expect(res).toMatchSnapshot();
  });

  it('query me is successfull if logged in, shows parameter meant for user Mariuccio', async () => {
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
    const auth: UserInput = {
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
  await dropTestDb();
  await closeDbConnection();
});
