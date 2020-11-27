//import { gql } from 'apollo-server-express';
import {
  testClient,
  connectToDb,
  dropTestDb,
  closeDbConnection,
} from '../tests/integrationSetup';
import { User } from '../models/user';
import { users } from '../tests/mocksTests';
import { UserInput } from '../generated/graphql';
import { Province, Regioni } from '../types';

const { query, mutate } = testClient;

const LOGIN_VALID = `
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

const LOGIN_INVALID = `
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

const CREATE_USER = `
  mutation CreateUser($auth: UserInput!) {
    createUser(user: $auth) {
      response {
        token
      }
      errors {
        name
      }
    }
  }
`;

const indirizzo = {
  via: 'asd asddasd',
  CAP: 12345,
  comune: 'aaaa',
  provincia: Province.AT,
  regione: Regioni.PIEMONTE,
};

beforeAll(async () => {
  await connectToDb();
  await dropTestDb();
  const usersMock = users();
  const user = new User(usersMock[0]);
  await user.save();
});

describe('Integration test users', () => {
  it('valid login mutation returns token', async () => {
    const res = await query(LOGIN_VALID);
    expect(res).toMatchSnapshot();
    //expect(res.data.login.response.token).toBeDefined();
  });

  it('invalid login mutation returns errors', async () => {
    const res = await query(LOGIN_INVALID);
    expect(res).toMatchSnapshot();
    //expect(res.data.login.response).toBeNull();
    //expect(res.data.login.errors).toBeDefined();
  });

  it('create user mutation successfull', async () => {
    const auth: UserInput = {
      email: 'giollo@ollo.it',
      password: 'Pro@3###4~~vaPassWord!23',
      firstName: 'Giova',
      lastName: 'Gibelli',
      pIva: '01640250054',
      phoneNumber: '1234527890',
      address: indirizzo,
    };
    const res = await mutate(CREATE_USER, {
      variables: { auth: auth },
    });
    expect(res).toMatchSnapshot();
    //expect(res.data.createUser.response.token).toBeDefined();
    //expect(res.errors).toBeUndefined();
  });

  it('create user mutation returns errors', async () => {
    const auth: UserInput = {
      email: 'sbagliata#oo.it',
      password: 'facile',
      firstName: 'Giova',
      lastName: 'Gibelli',
      pIva: '0101010101',
      phoneNumber: '123',
      address: indirizzo,
    };
    const res = await mutate(CREATE_USER, {
      variables: { auth: auth },
    });
    expect(res).toMatchSnapshot();
    //expect(res.data.createUser.response).toBeNull();
    //expect(res.data.createUser.errors).toHaveLength(4);
  });
});

afterAll(async () => {
  await dropTestDb();
  await closeDbConnection();
});
