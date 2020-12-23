const publish = jest.fn();
const filter = jest.fn();
jest.mock('apollo-server-express', () => ({
  PubSub: jest.fn(() => ({
    publish,
  })),
  withFilter: filter,
}));
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import resolvers from '../../resolvers';
import { ObjectId } from 'mongodb';

const mockContext = {
  dataSources: {
    ads: {
      getAd: jest.fn(),
      getAds: jest.fn(),
      createAd: jest.fn(),
      updateAd: jest.fn(),
      deleteAd: jest.fn(),
    },
    users: {
      getUser: jest.fn(),
    },
    negotiations: {
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
      getReview: jest.fn(),
      createReview: jest.fn(),
      updateReview: jest.fn(),
      deleteReview: jest.fn(),
    },
    vineyards: {
      getVineyards: jest.fn(),
      getVineyard: jest.fn(),
      getVineyardByName: jest.fn(),
    },
    wines: {
      getWines: jest.fn(),
      getWine: jest.fn(),
      getWineByName: jest.fn(),
    },
    messages: {
      getMessagesForNegotiation: jest.fn(),
    },
  },
  user: { id: 1, email: 'a@a.a' },
};
const { getNegotiation } = mockContext.dataSources.negotiations;
const { getUser } = mockContext.dataSources.users;
const { getReviews } = mockContext.dataSources.reviews;
const { getReview } = mockContext.dataSources.reviews;
const { createReview } = mockContext.dataSources.reviews;
const { updateReview } = mockContext.dataSources.reviews;
const { deleteReview } = mockContext.dataSources.reviews;

describe('Review resolvers', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('reviews calls getReviews from dataSource', async () => {
    getReviews.mockReturnValueOnce([
      {
        _id: '122',
        rating: 'Good',
        forUser: '123',
        createdBy: '321',
        negotiation: '322',
      },
    ]);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const res = await resolvers.Query?.reviews(null, null, mockContext);
    expect(res).toEqual([
      {
        _id: '122',
        rating: 'Good',
        forUser: '123',
        createdBy: '321',
        negotiation: '322',
      },
    ]);
  });

  it('review calls getReview from dataSource', async () => {
    getReview.mockReturnValueOnce({
      _id: '122',
      rating: 'Good',
      forUser: '123',
      createdBy: '321',
      negotiation: '322',
    });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const res = await resolvers.Query?.review(null, { id: '123' }, mockContext);
    expect(res).toEqual({
      _id: '122',
      rating: 'Good',
      forUser: '123',
      createdBy: '321',
      negotiation: '322',
    });
  });

  it('createReview succeeds and calls datasource and subscription', async () => {
    createReview.mockReturnValueOnce({
      response: {
        _id: '122',
        rating: 'Good',
        forUser: '123',
        createdBy: '321',
        negotiation: '322',
      },
      errors: [],
    });
    const res = await resolvers.Mutation?.createReview(
      null,
      {
        rating: 'Good',
        forUser: '123',
        negotiation: '322',
      },
      mockContext
    );
    expect(publish).toHaveBeenCalledTimes(1);
    expect(publish).toHaveBeenCalledWith('REVIEW_CREATED', {
      reviewCreated: {
        _id: '122',
        rating: 'Good',
        forUser: '123',
        createdBy: '321',
        negotiation: '322',
      },
    });
    expect(res).toEqual({
      errors: [],
      response: {
        _id: '122',
        rating: 'Good',
        forUser: '123',
        createdBy: '321',
        negotiation: '322',
      },
    });
  });

  it('createReview fails subscription not called', async () => {
    createReview.mockReturnValueOnce({
      response: null,
      errors: [{ name: 'error', text: 'error' }],
    });
    const res = await resolvers.Mutation?.createReview(
      null,
      {
        rating: 'Good',
        forUser: '123',
        negotiation: '322',
      },
      mockContext
    );
    expect(publish).toHaveBeenCalledTimes(0);

    expect(res).toEqual({
      response: null,
      errors: [{ name: 'error', text: 'error' }],
    });
  });

  // Negotiation update mutation test
  it('update review succeds', async () => {
    updateReview.mockReturnValueOnce({
      response: {
        _id: '122',
        rating: 'Poor',
        forUser: '123',
        createdBy: '321',
        negotiation: '322',
      },
      errors: [],
    });
    const res = await resolvers.Mutation?.updateReview(
      null,
      {
        _id: '122',
        rating: 'Poor',
        forUser: '123',
        negotiation: '322',
      },
      mockContext
    );
    expect(res).toEqual({
      response: {
        _id: '122',
        rating: 'Poor',
        forUser: '123',
        createdBy: '321',
        negotiation: '322',
      },
      errors: [],
    });
  });

  it('delete review calls datasource', async () => {
    deleteReview.mockReturnValueOnce({
      response: {
        _id: '122',
        rating: 'Poor',
        forUser: '123',
        createdBy: '321',
        negotiation: '322',
      },
      errors: [],
    });
    const res = await resolvers.Mutation?.deleteReview(
      null,
      {
        _id: '122',
      },
      mockContext
    );
    expect(res).toEqual({
      response: {
        _id: '122',
        rating: 'Poor',
        forUser: '123',
        createdBy: '321',
        negotiation: '322',
      },
      errors: [],
    });
  });

  it('Review createdBy calls getUser', async () => {
    getUser.mockReturnValueOnce({ id: 1 });
    const res = await resolvers.Review?.createdBy(
      { createdBy: '123' },
      null,
      mockContext
    );
    expect(res).toEqual({ id: 1 });
  });

  it('Review negotiation calls getNegotiation', async () => {
    getNegotiation.mockReturnValueOnce({
      _id: '122',
      typeAd: 'SELL',
      forUserAd: '123',
      createdBy: '321',
      ad: '322',
    });
    const res = await resolvers.Review?.negotiation(
      { ad: '123' },
      null,
      mockContext
    );
    expect(res).toEqual({
      _id: '122',
      typeAd: 'SELL',
      forUserAd: '123',
      createdBy: '321',
      ad: '322',
    });
  });

  it('Review forUser calls getUser', async () => {
    getUser.mockReturnValueOnce({ id: 1 });
    const res = await resolvers.Review?.forUser(
      { forUser: { _id: '123' } },
      null,
      mockContext
    );
    expect(res).toEqual({ id: 1 });
  });
});
