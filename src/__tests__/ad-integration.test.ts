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
import { AdInput } from '../generated/graphql';
import {
  TypeAd,
  TypeProduct,
  Province,
  Regioni,
  MetodoProduttivo,
} from '../types';
//import { ObjectId } from 'mongodb';
const indirizzo = {
  via: 'asd asddasd',
  CAP: 12345,
  comune: 'aaaa',
  provincia: Province.AT,
  regione: Regioni.PIEMONTE,
};

const { query, mutate, setOptions } = testClient;

const AD = gql`
  fragment AdPreview on Ad {
    datePosted
    postedBy {
      firstName
    }
    activeNegotiations
    harvest
    abv
    priceFrom
    priceTo
  }
  {
    ads(typeAd: BUY, typeProduct: AdWine) {
      ...AdPreview
    }
  }
`;

const CREATE_AD = gql`
  mutation CreateAd($ad: AdInput!) {
    createAd(input: $ad) {
      response {
        content
        datePosted
        postedBy {
          firstName
        }
        activeNegotiations
        harvest
        abv
        priceFrom
        priceTo
        ... on AdWine {
          wineName
        }
        ... on AdGrape {
          vineyardName
        }
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

const usersMock = users();
const adsMock = ads();

beforeAll(async () => {
  await connectToDb();
  await dropTestDb();

  const user = new User(usersMock[0]);
  const ad = new Ad({ ...adsMock[0], postedBy: user });
  await user.save();
  await ad.save();
});

describe('Integration test ads', () => {
  it('query ads wine in sale fails if not logged in', async () => {
    const res = await query(AD);
    expect(res).toMatchSnapshot();
  });

  it('create adGrape  mutation it fails if not logged in', async () => {
    const ad: AdInput = {
      vineyardName: 'Uvetta',
      metodoProduttivo: MetodoProduttivo.BIOLOGICO,

      harvest: 2020,
      abv: 12.0,
      priceFrom: 1.0,
      priceTo: 1.5,
      //kgFrom: 500,
      //kgTo: 600,
      content: 'buona uva',
      address: indirizzo,
      typeAd: TypeAd.SELL,
      typeProduct: TypeProduct.ADGRAPE,
    };
    const res = await mutate(CREATE_AD, {
      variables: { ad },
    });
    expect(res).toMatchSnapshot();
  });

  it('query ads wine in sale succeds if logged in', async () => {
    const data: any = await mutate(LOGIN_VALID);
    const token = data.data.login.response.token;
    setOptions({
      request: {
        headers: {
          authorization: token,
        },
      },
    });
    const res = await query(AD);
    expect(res).toMatchSnapshot();
  });

  it('create adWine  mutation successfull', async () => {
    const ad: AdInput = {
      wineName: 'Vino',
      //wine: new ObjectId(),
      sottoZona: 'Sotto',

      harvest: 2020,
      abv: 12.0,
      priceFrom: 1.0,
      priceTo: 1.5,
      litersFrom: 500,
      litersTo: 600,
      content: 'wow',
      address: indirizzo,
      typeAd: TypeAd.BUY,
      typeProduct: TypeProduct.ADWINE,
    };
    const res = await mutate(CREATE_AD, {
      variables: { ad },
    });
    expect(res).toMatchSnapshot();
  });

  it('create adGrape  mutation successfull', async () => {
    const ad: AdInput = {
      vineyardName: 'Uvetta',
      metodoProduttivo: MetodoProduttivo.BIOLOGICO,

      harvest: 2020,
      abv: 12.0,
      priceFrom: 1.0,
      priceTo: 1.5,
      kgFrom: 500,
      kgTo: 600,
      content: 'buona uva',
      address: indirizzo,
      typeAd: TypeAd.SELL,
      typeProduct: TypeProduct.ADGRAPE,
    };
    const res = await mutate(CREATE_AD, {
      variables: { ad },
    });
    expect(res).toMatchSnapshot();
  });

  it('create adGrape  mutation it fails if kgs are missing', async () => {
    const ad: AdInput = {
      vineyardName: 'Uvetta',
      metodoProduttivo: MetodoProduttivo.BIOLOGICO,

      harvest: 2020,
      abv: 12.0,
      priceFrom: 1.0,
      priceTo: 1.5,
      //kgFrom: 500,
      //kgTo: 600,
      content: 'buona uva',
      address: indirizzo,
      typeAd: TypeAd.SELL,
      typeProduct: TypeProduct.ADGRAPE,
    };
    const res = await mutate(CREATE_AD, {
      variables: { ad },
    });
    expect(res).toMatchSnapshot();
  });
});

afterAll(async () => {
  await dropTestDb();
  await closeDbConnection();
});
