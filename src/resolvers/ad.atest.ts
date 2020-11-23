import gql from 'graphql-tag';
import createTestServer from '../tests/helper';
import { createTestClient } from 'apollo-server-testing';
// import Ads from '../data-sources/ads';
import { ads as adsMocks } from '../tests/mocksTests';
// import { AdTest } from '../tests/adsMocks';
//import { TypeProduct, TypeAd } from '../types';
const AD = gql`
  {
    ads(typeAd: SELL, typeProduct: ADWINE) {
      content
      harvest
      ... on AdWine {
        wineName
      }
    }
  }
`;

describe('queries', () => {
  test('ads', async () => {
    const { server, ads } = createTestServer({
      context: () => ({ user: { id: 1, email: 'a@a.a' } }),
    });
    //@ts-ignore
    ads.getAds = jest.fn(() => adsMocks());
    //const adsMocked = adsMocks();
    const { query } = createTestClient(server);

    const res = await query({ query: AD });
    expect(res).toMatchSnapshot();
  });
});
