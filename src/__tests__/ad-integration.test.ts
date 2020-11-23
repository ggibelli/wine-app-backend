import { gql } from 'apollo-server-express';
import {
  testClient,
  connectToDb,
  dropTestDb,
  closeDbConnection,
} from '../tests/integrationSetup';
//import { ObjectId } from 'mongodb';
import { User } from '../models/user';
import { Ad } from '../models/ad';
import { users, ads } from '../tests/mocksTests';

const { query } = testClient;

const AD = gql`
  fragment AdPreview on Ad {
    #datePosted
    postedBy {
      firstName
    }
    harvest
    abv
    priceFrom
    priceTo
    ... on AdWine {
      wineName
      litersFrom
      litersTo
    }
    ... on AdGrape {
      vineyardName
      kgFrom
      kgTo
    }
  }
  {
    ads(typeAd: Buy, typeProduct: AdWine) {
      ...AdPreview
    }
  }
`;

beforeAll(async () => {
  await connectToDb();
  await dropTestDb();
  const usersMock = users();
  const adsMock = ads();
  const user = new User(usersMock[0]);
  const ad = new Ad({ ...adsMock[0], postedBy: user });
  await user.save();
  await ad.save();
});

describe('Integration test ads', () => {
  it.only('query ads wine in sale', async () => {
    const res = await query({ query: AD });
    expect(res).toMatchSnapshot();
  });
});

afterAll(async () => {
  await dropTestDb();
  await closeDbConnection();
});
