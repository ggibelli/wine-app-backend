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
import { users } from '../../tests/mocksTests';
import { VineyardInput, VineyardInputUpdate } from '../../generated/graphql';
import { Colore } from '../../types';
import createVineyardDb from '../../utils/vineyardExtractor';
import { Vineyard, VineyardGraphQl } from '../../models/vineyard';

const { query, mutate, setOptions } = testClient;

const VINEYARDS = gql`
  {
    vineyards {
      name
      colore
    }
  }
`;

const VINEYARD = gql`
  query GetVineyard($id: ID!) {
    vineyard(id: $id) {
      name
      colore
    }
  }
`;

const CREATE_VINEYARD = gql`
  mutation CreateVineyard($vineyard: VineyardInput!) {
    createVineyard(vineyard: $vineyard) {
      response {
        name
        colore
      }
      errors {
        name
        text
      }
    }
  }
`;

const UPDATE_VINEYARD = gql`
  mutation UpdateVineyard($vineyard: VineyardInputUpdate!) {
    updateVineyard(vineyard: $vineyard) {
      response {
        name
        colore
      }
      errors {
        name
        text
      }
    }
  }
`;

const DELETE_VINEYARD = gql`
  mutation DeleteVineyard($id: ID!) {
    deleteVineyard(id: $id) {
      response {
        name
        colore
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
  const vineyardDb = createVineyardDb();
  const user = new User(usersMock[0]);
  const otherUser = new User(usersMock[1]);
  const vineyard = new Vineyard(vineyardDb[0]);
  await user.save();
  await otherUser.save();
  await vineyard.save();
});

describe('Integration test vineyards', () => {
  it('query vineyards fails if not logged in', async () => {
    const res = await query(VINEYARDS);
    expect(res).toMatchSnapshot();
  });

  it('query single vineyard fails if not logged', async () => {
    const vineyards: VineyardGraphQl[] = await Vineyard.find({}).lean().exec();
    const res = await query(VINEYARD, {
      variables: { id: vineyards[0]._id.toString() },
    });
    expect(res).toMatchSnapshot();
  });

  it('create vineyard mutation fails if not logged in', async () => {
    const vineyard: VineyardInput = {
      name: 'Uva vinosa',
      colore: Colore.BIANCA,
    };
    const res = await mutate(CREATE_VINEYARD, {
      variables: { vineyard },
    });
    expect(res).toMatchSnapshot();
  });

  it('query vineyards succeds if logged in', async () => {
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
    const res = await query(VINEYARDS);
    expect(res).toMatchSnapshot();
  });

  it('query single vineyard succeds if logged', async () => {
    const vineyard: VineyardGraphQl[] = await Vineyard.find({}).lean().exec();
    const res = await query(VINEYARD, {
      variables: { id: vineyard[0]._id.toString() },
    });
    expect(res).toMatchSnapshot();
  });

  it('create vineyard mutation successfull if logged in and admin', async () => {
    const vineyard: VineyardInput = {
      name: 'Uva vinosa',
      colore: Colore.BIANCA,
    };
    const res = await mutate(CREATE_VINEYARD, {
      variables: { vineyard },
    });
    expect(res).toMatchSnapshot();
  });

  it('update vineyard mutation succeds if logged in and admin', async () => {
    const vineyardToUpdate: VineyardGraphQl[] = await Vineyard.find({})
      .lean()
      .exec();
    const vineyard: VineyardInputUpdate = {
      _id: vineyardToUpdate[0]._id.toString(),
      name: 'Vinotto',
    };
    const res = await mutate(UPDATE_VINEYARD, {
      variables: { vineyard },
    });
    expect(res).toMatchSnapshot();
  });

  it('delete vineyard mutation succeds if logged in and admin', async () => {
    const vineyardToDelete: VineyardGraphQl[] = await Vineyard.find({})
      .lean()
      .exec();
    const res = await mutate(DELETE_VINEYARD, {
      variables: { id: vineyardToDelete[0]._id.toString() },
    });
    expect(res).toMatchSnapshot();
  });

  it('update vineyard mutation fails if logged in and not admin', async () => {
    const data: any = await mutate(LOGIN_VALID_OTHER);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const token = data.data.login.response.token;
    setOptions({
      request: {
        headers: {
          authorization: token,
        },
      },
    });
    const vineyardToUpdate: VineyardGraphQl[] = await Vineyard.find({})
      .lean()
      .exec();
    const vineyard: VineyardInputUpdate = {
      _id: vineyardToUpdate[0]._id.toString(),
      name: 'Caprotto',
    };
    const res = await mutate(UPDATE_VINEYARD, {
      variables: { vineyard },
    });
    expect(res).toMatchSnapshot();
  });

  it('delete vineyard mutation fails if logged in and not admin', async () => {
    const vineyardToDelete: VineyardGraphQl[] = await Vineyard.find({})
      .lean()
      .exec();
    const res = await mutate(DELETE_VINEYARD, {
      variables: { id: vineyardToDelete[0]._id.toString() },
    });
    expect(res).toMatchSnapshot();
  });

  it('create vineyard mutation fails if logged in and not admin', async () => {
    const vineyard: VineyardInput = {
      name: 'Uva vinosa',
      colore: Colore.BIANCA,
    };
    const res = await mutate(CREATE_VINEYARD, {
      variables: { vineyard },
    });
    expect(res).toMatchSnapshot();
  });
});

afterAll(async () => {
  await dropTestDb();
  await closeDbConnection();
});
