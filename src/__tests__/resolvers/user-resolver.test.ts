/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const mockPublish = jest.fn();

import resolvers from '../../resolvers';


jest.mock('apollo-server-express', () => ({
  PubSub: jest.fn(() => ({
    publish: mockPublish,
  })),
  withFilter: jest.fn(),
}));

const mockContext = {
  dataSources: {
    ads: {
      getAd: jest.fn(),
      getAdsByUser: jest.fn(),
      getAdsUserType: jest.fn(),
      getAds: jest.fn(),
      createAd: jest.fn(),
      updateAd: jest.fn(),
      deleteAd: jest.fn(),
    },
    users: {
      getUsers: jest.fn(),
      getUser: jest.fn(),
      createUser: jest.fn(),
      updateUser: jest.fn(),
      deleteUser: jest.fn(),
      login: jest.fn(),
    },
    negotiations: {
      getNegotiationsForUserType: jest.fn(),
      getNegotiationsForUser: jest.fn(),
      getNegotiationsForAd: jest.fn(),
      getNegotiations: jest.fn(),
      getNegotiation: jest.fn(),
      createNegotiation: jest.fn(),
      deleteNegotiation: jest.fn(),
      deleteMany: jest.fn(),
      updateNegotiation: jest.fn(),
    },
    reviews: {
      getReviews: jest.fn(),

      getReviewForUser: jest.fn(),
    },
    vineyards: {
      getVineyardByName: jest.fn(),
    },
    wines: {
      getWineByName: jest.fn(),
    },
    messages: {
      getMessages: jest.fn(),
    },
  },
  user: { _id: '123', email: 'a@a.a' },
};
const { getAdsUserType } = mockContext.dataSources.ads;

const { getNegotiationsForUserType } = mockContext.dataSources.negotiations;
const { getUsers } = mockContext.dataSources.users;
const { getUser } = mockContext.dataSources.users;
const { createUser } = mockContext.dataSources.users;
const { updateUser } = mockContext.dataSources.users;
const { deleteUser } = mockContext.dataSources.users;
const { login } = mockContext.dataSources.users;
const { getMessages } = mockContext.dataSources.messages;
const { getReviewForUser } = mockContext.dataSources.reviews;

describe('User resolvers', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('users calls getUsers from dataSource', async () => {
    getUsers.mockReturnValueOnce([
      {
        _id: '122',
        name: 'Giollo',
        email: '123',
        ads: [],
      },
    ]);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const res = await resolvers.Query?.users(null, null, mockContext);
    expect(res).toEqual([
      {
        _id: '122',
        name: 'Giollo',
        email: '123',
        ads: [],
      },
    ]);
  });

  it('user calls getUser from dataSource', async () => {
    getUser.mockReturnValueOnce({
      _id: '122',
      name: 'Giollo',
      email: '123',
      ads: [],
    });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const res = await resolvers.Query?.user(null, { id: '122' }, mockContext);
    expect(res).toEqual({
      _id: '122',
      name: 'Giollo',
      email: '123',
      ads: [],
    });
  });

  it('me query return user in context', async () => {
    // @ts-ignore
    const res = await resolvers.Query?.me(null, null, mockContext);
    expect(res).toEqual({ _id: '123', email: 'a@a.a' });
  });

  it('createUser succeeds and calls datasource', async () => {
    createUser.mockReturnValueOnce({
      response: {
        _id: '122',
        name: 'Giollo',
        email: '123',
        ads: [],
      },
      errors: [],
    });
    // @ts-ignore
    const res = await resolvers.Mutation?.createUser(
      null,
      {
        name: 'Giollo',
        email: '123',
      },
      mockContext,
    );
    expect(res).toEqual({
      errors: [],
      response: {
        _id: '122',
        name: 'Giollo',
        email: '123',
        ads: [],
      },
    });
  });

  it('updateUser succeeds and calls datasource', async () => {
    updateUser.mockReturnValueOnce({
      response: {
        _id: '122',
        name: 'Giollo',
        email: '123',
        ads: [],
      },
      errors: [],
    });
    // @ts-ignore
    const res = await resolvers.Mutation?.updateUser(
      null,
      {
        name: 'Giollo',
        email: '123',
      },
      mockContext,
    );
    expect(res).toEqual({
      errors: [],
      response: {
        _id: '122',
        name: 'Giollo',
        email: '123',
        ads: [],
      },
    });
  });

  it('deleteUser succeeds and calls datasource', async () => {
    deleteUser.mockReturnValueOnce({
      response: {
        _id: '122',
        name: 'Giollo',
        email: '123',
        ads: [],
      },
      errors: [],
    });
    // @ts-ignore
    const res = await resolvers.Mutation?.deleteUser(
      null,
      {
        id: '123',
      },
      mockContext,
    );
    expect(res).toEqual({
      errors: [],
      response: {
        _id: '122',
        name: 'Giollo',
        email: '123',
        ads: [],
      },
    });
  });

  it('login succeeds and calls datasource', async () => {
    login.mockReturnValueOnce({
      response: {
        _id: '122',
        name: 'Giollo',
        email: '123',
        ads: [],
      },
      errors: [],
    });
    // @ts-ignore
    const res = await resolvers.Mutation?.login(
      null,
      {
        email: '123',
        password: '123321',
      },
      mockContext,
    );
    expect(res).toEqual({
      errors: [],
      response: {
        _id: '122',
        name: 'Giollo',
        email: '123',
        ads: [],
      },
    });
  });

  it('User ads calls getAdsByUser', async () => {
    getAdsUserType.mockReturnValueOnce([{ id: 1 }]);
    // @ts-ignore
    const res = await resolvers.User?.ads({ _id: '123' }, null, mockContext);
    expect(res).toEqual([{ id: 1 }]);
  });

  it('User messages calls getMessages if same user', async () => {
    getMessages.mockReturnValueOnce([{ id: 1 }]);
    // @ts-ignore
    const res = await resolvers.User?.messages(
      { _id: '123' },
      null,
      mockContext,
    );
    expect(res).toEqual([{ id: 1 }]);
  });

  it('User messages throws error if not same user', async () => {
    expect.assertions(1);
    try {
      // @ts-ignore
      await resolvers.User?.messages({ _id: '999' }, null, mockContext);
    } catch (e) {
      expect(e).toBeTruthy();
    }
  });

  it('User negotiations calls getNegotiations if same user', async () => {
    getNegotiationsForUserType.mockReturnValueOnce([{ id: 1 }]);
    // @ts-ignore
    const res = await resolvers.User?.negotiations(
      { _id: '123' },
      null,
      mockContext,
    );
    expect(res).toEqual([{ id: 1 }]);
  });

  it('User negotiations throws error if not same user', async () => {
    expect.assertions(1);
    try {
      // @ts-ignore
      await resolvers.User?.negotiations({ _id: '999' }, null, mockContext);
    } catch (e) {
      expect(e).toBeTruthy();
    }
  });

  it('User reviews calls getReviews if same user', async () => {
    getReviewForUser.mockReturnValueOnce([{ id: 1 }]);
    // @ts-ignore
    const res = await resolvers.User?.reviews(
      { _id: '123' },
      null,
      mockContext,
    );
    expect(res).toEqual([{ id: 1 }]);
  });

  it('User reviews throws error if not same user', async () => {
    expect.assertions(1);
    try {
      // @ts-ignore
      await resolvers.User?.reviews({ _id: '999' }, null, mockContext);
    } catch (e) {
      expect(e).toBeTruthy();
    }
  });

  it('User email is shown if public', () => {
    // @ts-ignore
    const res = resolvers.User?.email(
      { _id: '13', hideContact: false, email: 'yoyoyo@yoyoyo.yo' },
      null,
      mockContext,
    );
    expect(res).toEqual('yoyoyo@yoyoyo.yo');
  });

  it('User email is not shown if private', () => {
    // @ts-ignore
    const res = resolvers.User?.email(
      { _id: '13', hideContact: true, email: 'yoyoyo@yoyoyo.yo' },
      null,
      mockContext,
    );
    expect(res).toEqual('The user prefers to hide the email');
  });

  it('User phone number is shown if public', () => {
    // @ts-ignore
    const res = resolvers.User?.phoneNumber(
      { _id: '13', hideContact: false, phoneNumber: '1234567890' },
      null,
      mockContext,
    );
    expect(res).toEqual('1234567890');
  });

  it('User phone number is not shown if private', () => {
    // @ts-ignore
    const res = resolvers.User?.phoneNumber(
      { _id: '13', hideContact: true, phoneNumber: '1234567890' },
      null,
      mockContext,
    );
    expect(res).toEqual('The user prefers to hide the phone number');
  });
});
