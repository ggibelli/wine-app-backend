import gql from 'graphql-tag';
import createTestServer from '../tests/helper';
const AD = gql`
  {
    ad {
      content
      createdAt
    }
  }
`;

describe('queries', () => {
  test('feed', async () => {
    const { query } = createTestServer({});

    const res = await query({ query: AD });
    expect(res).toMatchSnapshot();
  });
});
