/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
  const mockPublish = jest.fn()

import { Types } from 'mongoose';
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
      getAds: jest.fn(),
      createAd: jest.fn(),
      updateAd: jest.fn(),
      deleteAd: jest.fn(),
    },
    users: {
      getUser: jest.fn(),
      saveAd: jest.fn(),
    },
    messages: {
      messageAdmin: jest.fn(),
    },
    negotiations: {
      getNegotiationsForAd: jest.fn(),
      deleteMany: jest.fn(),
      updateNegotiation: jest.fn(),
      negotiationsActive: jest.fn(),
    },
    vineyards: {
      getVineyardByName: jest.fn(),
    },
    wines: {
      getWineByName: jest.fn(),
    },
  },
  user: { _id: 1, email: 'a@a.a' },
};
const { getAds } = mockContext.dataSources.ads;
const { getAd } = mockContext.dataSources.ads;
const { createAd } = mockContext.dataSources.ads;
const { updateAd } = mockContext.dataSources.ads;
const { getNegotiationsForAd } = mockContext.dataSources.negotiations;
const { deleteAd } = mockContext.dataSources.ads;
const { deleteMany } = mockContext.dataSources.negotiations;
const { negotiationsActive } = mockContext.dataSources.negotiations;
const { getUser } = mockContext.dataSources.users;
const { getVineyardByName } = mockContext.dataSources.vineyards;
const { getWineByName } = mockContext.dataSources.wines;
const { saveAd } = mockContext.dataSources.users;
const { messageAdmin } = mockContext.dataSources.messages;

describe('Ad resolvers', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('calls getAds from dataSource', async () => {
    getAds.mockReturnValueOnce([
      {
        _id: 1,
        typeAd: 'SELL',
        typeProduct: 'AdWine',
        wineName: 'wine',
        createdBy: 2,
      },
    ]);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const res = await resolvers.Query?.ads(
      null,
      { typeAd: 'SELL', typeProduct: 'adWine' },
      mockContext,
    );
    expect(res).toEqual([
      {
        _id: 1,
        typeAd: 'SELL',
        typeProduct: 'AdWine',
        wineName: 'wine',
        createdBy: 2,
      },
    ]);
  });

  it('calls getAd from dataSource', async () => {
    const save = jest.fn();
    getAd.mockReturnValueOnce({
      _id: 1,
      typeAd: 'SELL',
      typeProduct: 'AdWine',
      wineName: 'wine',
      createdBy: 2,
      save,
    });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const res = await resolvers.Query?.ad(null, { _id: 1 }, mockContext);
    expect(res).toEqual({
      _id: 1,
      typeAd: 'SELL',
      typeProduct: 'AdWine',
      wineName: 'wine',
      createdBy: 2,
      save,
    });
  });

  it('creates ad and calls subscription', async () => {
    createAd.mockReturnValueOnce({
      response: {
        _id: 1,
        typeAd: 'SELL',
        typeProduct: 'AdWine',
        wineName: 'wine',
        createdBy: 2,
      },
      errors: [],
      usersToNotify: [1],
    });
    // @ts-ignore
    const res = await resolvers.Mutation?.createAd(
      null,
      {
        input: {
          _id: 1,
          typeAd: 'SELL',
          typeProduct: 'AdWine',
          wineName: 'wine',
          createdBy: 2,
        },
      },
      mockContext,
    );
    expect(messageAdmin).toHaveBeenCalledWith(
      [1],
      'Un annuncio per il vino: wine e stato creato',
    );
    expect(mockPublish).toHaveBeenCalledTimes(1);
    expect(mockPublish).toHaveBeenCalledWith('AD_POSTED', {
      adPostedFollowUp: {
        createdBy: 2,
        _id: 1,
        typeAd: 'SELL',
        typeProduct: 'AdWine',
        wineName: 'wine',
      },
      usersToNotify: [1],
    });
    expect(res).toEqual({
      errors: [],
      response: {
        _id: 1,
        typeAd: 'SELL',
        typeProduct: 'AdWine',
        wineName: 'wine',
        createdBy: 2,
      },
      usersToNotify: [1],
    });
  });

  it('creates ad fails and subscription not called', async () => {
    createAd.mockReturnValueOnce({
      response: null,
      errors: [{ name: 'error', text: 'error' }],
    });
    // @ts-ignore
    const res = await resolvers.Mutation?.createAd(
      null,
      {
        wrong: 'wrong',
      },
      mockContext,
    );
    expect(mockPublish).toHaveBeenCalledTimes(0);
    expect(res).toEqual({
      errors: [{ name: 'error', text: 'error' }],
      response: null,
    });
  });

  it('update ad succeds and subscription called', async () => {
    updateAd.mockReturnValueOnce({
      response: {
        _id: 1,
        typeAd: 'SELL',
        typeProduct: 'AdWine',
        wineName: 'wine',
        createdBy: 2,
        isActive: false,
      },
      errors: [],
    });
    getNegotiationsForAd.mockReturnValueOnce([
      {
        _id: 3,
        createdBy: 4,
      },
      { _id: 5, createdBy: 7 },
    ]);
    // @ts-ignore
    const res = await resolvers.Mutation?.updateAd(
      null,
      {
        input: {
          _id: 1,
          typeAd: 'SELL',
          typeProduct: 'AdWine',
          wineName: 'wine',
          createdBy: 2,
          isActive: false,
        },
      },
      mockContext,
    );
    expect(messageAdmin).toHaveBeenCalledWith(
      ['4', '7'],
      'Un annuncio per il vino: wine e stato creato',
    );
    expect(mockPublish).toHaveBeenCalledTimes(1);
    expect(mockPublish).toHaveBeenCalledWith('AD_REMOVED', {
      adRemoved: {
        createdBy: 2,
        _id: 1,
        isActive: false,
        typeAd: 'SELL',
        typeProduct: 'AdWine',
        wineName: 'wine',
      },
      usersToNotify: ['4', '7'],
    });
    expect(res).toEqual({
      response: {
        _id: 1,
        typeAd: 'SELL',
        typeProduct: 'AdWine',
        wineName: 'wine',
        createdBy: 2,
        isActive: false,
      },
      errors: [],
    });
  });

  it('update ad succeds but ad still active and subscription not called', async () => {
    updateAd.mockReturnValueOnce({
      response: {
        _id: 1,
        typeAd: 'SELL',
        typeProduct: 'AdWine',
        wineName: 'other wine',
        createdBy: 2,
        isActive: true,
      },
      errors: [],
    });
    // @ts-ignore
    const res = await resolvers.Mutation?.updateAd(
      null,
      {
        _id: 1,
        typeAd: 'SELL',
        typeProduct: 'AdWine',
        wineName: 'other wine',
        createdBy: 2,
        isActive: true,
      },
      mockContext,
    );
    expect(mockPublish).toHaveBeenCalledTimes(0);

    expect(res).toEqual({
      response: {
        _id: 1,
        typeAd: 'SELL',
        typeProduct: 'AdWine',
        wineName: 'other wine',
        createdBy: 2,
        isActive: true,
      },
      errors: [],
    });
  });

  it('delete ad succeeds and subscription is called', async () => {
    deleteAd.mockReturnValueOnce({
      response: {
        _id: 1,
        typeAd: 'SELL',
        typeProduct: 'AdWine',
        wineName: 'wine',
        createdBy: 2,
        isActive: true,
      },
      errors: [],
    });
    getNegotiationsForAd.mockReturnValueOnce([
      {
        _id: 3,
        createdBy: 4,
      },
      { _id: 5, createdBy: 7 },
    ]);
    // @ts-ignore
    const res = await resolvers.Mutation?.deleteAd(
      null,
      {
        _id: 1,
      },
      mockContext,
    );
    expect(deleteMany).toHaveBeenCalledTimes(1);
    expect(messageAdmin).toHaveBeenCalledWith(
      ['4', '7'],
      'L annuncio per il vino wine e stato rimosso',
    );
    expect(mockPublish).toHaveBeenCalledTimes(1);
    expect(mockPublish).toHaveBeenCalledWith('AD_REMOVED', {
      adRemoved: {
        createdBy: 2,
        _id: 1,
        isActive: true,
        typeAd: 'SELL',
        typeProduct: 'AdWine',
        wineName: 'wine',
      },
      usersToNotify: ['4', '7'],
    });
    expect(res).toEqual({
      response: {
        _id: 1,
        typeAd: 'SELL',
        typeProduct: 'AdWine',
        wineName: 'wine',
        createdBy: 2,
        isActive: true,
      },
      errors: [],
    });
  });

  it('ad type shows its type', async () => {
    const res = await resolvers.Ad?.__resolveType(
      // @ts-ignore
      { typeProduct: 'AdWine' },
      null,
      mockContext,
    );
    expect(res).toEqual('AdWine');
  });

  it('ad postedby succeeds', async () => {
    getUser.mockReturnValueOnce({ _id: 1 });
    // @ts-ignore
    const res = await resolvers.Ad?.postedBy(
      { postedBy: new Types.ObjectId('5fdd925d9cc5800455e1855e') },
      null,
      mockContext,
    );
    expect(res).toEqual({ _id: 1 });
  });

  it('ad activeNegotiation shows number negotiation ad', async () => {
    negotiationsActive.mockReturnValueOnce(2);
    // @ts-ignore
    const res = await resolvers.Ad?.activeNegotiations(
      { _id: '123' },
      null,
      mockContext,
    );
    expect(res).toEqual(2);
  });

  it('ad numberViews shows number views ad', async () => {
    // @ts-ignore
    const res = await resolvers.Ad?.numberViews(
      { postedBy: '123', viewedBy: [1, 2] },
      null,
      mockContext,
    );
    expect(res).toEqual(2);
  });

  it('ad negotiations shows negotiations ad', async () => {
    getNegotiationsForAd.mockReturnValueOnce([
      { _id: 3, createdBy: 4 },
      { _id: 5, createdBy: 7 },
    ]);
    // @ts-ignore
    const res = await resolvers.Ad?.negotiations(
      { postedBy: '123' },
      null,
      mockContext,
    );
    expect(res).toEqual([
      { _id: 3, createdBy: 4 },
      { _id: 5, createdBy: 7 },
    ]);
  });

  it('adWine wine shows wine ad', async () => {
    getWineByName.mockReturnValueOnce({
      wineName: 'vino',
      abv: 6.5,
    });
    // @ts-ignore
    const res = await resolvers.AdWine?.wine(
      { wineName: 'vino' },
      null,
      mockContext,
    );
    expect(res).toEqual({
      wineName: 'vino',
      abv: 6.5,
    });
  });

  it('saveAd calls datasource and returns right data', async () => {
    saveAd.mockReturnValueOnce({
      _id: '602daa91cdc6630673a9fc0e',
      content: '11212121212',
    });
    getAd.mockReturnValueOnce({
      _id: new Types.ObjectId('5fdd925d9cc5800455e1855e'),
      typeAd: 'SELL',
      typeProduct: 'AdWine',
      wineName: 'wine',
      createdBy: 2,
    });
    // @ts-ignore
    const res = await resolvers.Mutation?.saveAd(
      null,
      { _id: '602daa91cdc6630673a9fc0e' },
      mockContext,
    );
    expect(res).toEqual({
      _id: '602daa91cdc6630673a9fc0e',
      content: '11212121212',
    });
  });

  it('AdGrape wine shows vineyard ad', async () => {
    getVineyardByName.mockReturnValueOnce({
      vineyardName: 'vigna',
      vendmmia: 2020,
    });
    // @ts-ignore
    const res = await resolvers.AdGrape?.vineyard(
      { vineyardName: 'vigna' },
      null,
      mockContext,
    );
    expect(res).toEqual({
      vineyardName: 'vigna',
      vendmmia: 2020,
    });
  });
});
