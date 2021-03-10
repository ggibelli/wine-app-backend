/* eslint-disable @typescript-eslint/ban-ts-comment */
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

const mockContext = {
  dataSources: {
    wines: {
      getWines: jest.fn(),
      getWine: jest.fn(),
      getWineByName: jest.fn(),
      createWine: jest.fn(),
      updateWine: jest.fn(),
      deleteWine: jest.fn(),
    },
  },
  user: { id: 1, email: 'a@a.a' },
};
const { getWines } = mockContext.dataSources.wines;
const { getWine } = mockContext.dataSources.wines;
const { createWine } = mockContext.dataSources.wines;
const { updateWine } = mockContext.dataSources.wines;
const { deleteWine } = mockContext.dataSources.wines;

describe('Review resolvers', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('wines calls getReviews from dataSource', async () => {
    getWines.mockReturnValueOnce([
      {
        _id: '122',
        wineName: 'Uva',
      },
    ]);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const res = await resolvers.Query?.wines(null, null, mockContext);
    expect(res).toEqual([
      {
        _id: '122',
        wineName: 'Uva',
      },
    ]);
  });

  it('wine calls getReview from dataSource', async () => {
    getWine.mockReturnValueOnce({
      _id: '122',
      wineName: 'Uva',
    });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const res = await resolvers.Query?.wine(null, { id: '122' }, mockContext);
    expect(res).toEqual({
      _id: '122',
      wineName: 'Uva',
    });
  });

  it('createWine succeeds and calls datasource', async () => {
    createWine.mockReturnValueOnce({
      response: {
        _id: '122',
        wineName: 'Uva',
      },
      errors: [],
    });
    //@ts-ignore
    const res = await resolvers.Mutation?.createWine(
      null,
      {
        wineName: 'Uva',
      },
      mockContext
    );
    expect(res).toEqual({
      errors: [],
      response: {
        _id: '122',
        wineName: 'Uva',
      },
    });
  });

  it('updateWine succeeds and calls datasource', async () => {
    updateWine.mockReturnValueOnce({
      response: {
        _id: '122',
        wineName: 'Uvetta',
      },
      errors: [],
    });
    //@ts-ignore
    const res = await resolvers.Mutation?.updateWine(
      null,
      {
        _id: '122',
        wineName: 'Uvetta',
      },
      mockContext
    );
    expect(res).toEqual({
      errors: [],
      response: {
        _id: '122',
        wineName: 'Uvetta',
      },
    });
  });

  it('deleteWine succeeds and calls datasource', async () => {
    deleteWine.mockReturnValueOnce({
      response: {
        _id: '122',
        wineName: 'Uvetta',
      },
      errors: [],
    });
    //@ts-ignore
    const res = await resolvers.Mutation?.deleteWine(
      null,
      {
        _id: '122',
      },
      mockContext
    );
    expect(res).toEqual({
      errors: [],
      response: {
        _id: '122',
        wineName: 'Uvetta',
      },
    });
  });
});
