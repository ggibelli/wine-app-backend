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
import { Ad, AdGraphQl } from '../../models/ad';
import { users, ads } from '../../tests/mocksTests';
import {
  AdInput,
  AdInputUpdate,
  Wine as WineType,
} from '../../generated/graphql';
import {
  TypeAd,
  TypeProduct,
  Province,
  Regioni,
  MetodoProduttivo,
} from '../../types';
import createWineDb from '../../utils/wineExtractor';
import { Wine } from '../../models/wine';
//import { ObjectId } from 'mongodb';
import cron from 'cron';

const fakeStart = jest.fn(() => {
  fakeStop();
});
const fakeStop = jest.fn(() => null);
const fakeTick = jest.fn();

const FakeCron = jest.fn(() => ({
  stop: fakeStop,
  start: fakeStart,
  fireOnTick: fakeTick,
}));
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
cron.CronJob = FakeCron;
const indirizzo = {
  via: 'asd asddasd',
  CAP: 12345,
  comune: 'aaaa',
  provincia: Province.AT,
  regione: Regioni.PIEMONTE,
};

const { query, mutate, setOptions } = testClient;

const ADS = gql`
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

const AD = gql`
  query GetAd($id: ID!) {
    ad(id: $id) {
      content
      #datePosted
      numberViews
    }
  }
`;

const CREATE_AD = gql`
  mutation CreateAd($ad: AdInput!) {
    createAd(input: $ad) {
      response {
        content
        #datePosted
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
          wine {
            regione
          }
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

const UPDATE_AD = gql`
  mutation UpdateAd($ad: AdInputUpdate!) {
    updateAd(input: $ad) {
      response {
        isActive
        content
        #datePosted
        postedBy {
          firstName
        }
      }
      errors {
        name
        text
      }
    }
  }
`;

const DELETE_AD = gql`
  mutation DeleteAd($id: ID!) {
    deleteAd(id: $id) {
      response {
        isActive
        content
        datePosted
        postedBy {
          firstName
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

const LOGIN_VALID_NOT_VERIFIED = gql`
  mutation {
    login(email: "prova@prova.it", password: "giovanni") {
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
  const adsMock = ads();
  const wineDb = await createWineDb();
  const user = new User(usersMock[0]);
  const otherUser = new User(usersMock[1]);
  const thirdUser = new User(usersMock[2]);

  const ad = new Ad({ ...adsMock[0], postedBy: user });
  const wine = new Wine(wineDb[0]);
  await user.save();
  await otherUser.save();
  await thirdUser.save();
  await ad.save();
  await wine.save();
});

describe('Integration test ads', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('query ads wine in sale fails if not logged in', async () => {
    const res = await query(ADS);
    expect(res).toMatchSnapshot();
  });

  it('query single ad does not show 0 number visit if not logged', async () => {
    const ad: AdGraphQl[] = await Ad.find({}).lean().exec();
    const res = await query(AD, {
      variables: { id: ad[0]._id.toString() },
    });
    expect(res).toMatchSnapshot();
  });

  it('create adGrape mutation it fails if not logged in', async () => {
    const ad: AdInput = {
      vineyardName: 'Uvetta',
      metodoProduttivo: MetodoProduttivo.BIOLOGICO,
      harvest: 2020,
      abv: 12.0,
      priceFrom: 1.0,
      priceTo: 1.5,
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

  it('create adWine mutation fails if user not verified', async () => {
    const data: any = await mutate(LOGIN_VALID_NOT_VERIFIED);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const token: string = data.data.login.response.token;
    setOptions({
      request: {
        headers: {
          authorization: token,
        },
      },
    });
    const wine: WineType[] = await Wine.find({}).lean().exec();
    const ad: AdInput = {
      wineName: wine[0].denominazioneVino,
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
      needsFollowUp: true,
    };
    const res = await mutate(CREATE_AD, {
      variables: { ad },
    });
    expect(res).toMatchSnapshot();
  });

  it('query ads wine in sale succeds if logged in', async () => {
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
    const res = await query(ADS);
    expect(res).toMatchSnapshot();
  });

  it('create adWine mutation successfull', async () => {
    const wine: WineType[] = await Wine.find({}).lean().exec();
    const ad: AdInput = {
      wineName: wine[0].denominazioneVino,
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
      needsFollowUp: true,
    };
    const res = await mutate(CREATE_AD, {
      variables: { ad },
    });
    expect(res).toMatchSnapshot();
  });

  it('update adWine mutation succeds if logged in and same user', async () => {
    const adToUpdate: AdGraphQl[] = await Ad.find({}).lean().exec();
    const ad: AdInputUpdate = {
      _id: adToUpdate[0]._id.toString(),
      isActive: false,
    };
    const res = await mutate(UPDATE_AD, {
      variables: { ad },
    });
    expect(res).toMatchSnapshot();
  });

  it('delete adWine mutation succeds if logged in and same user', async () => {
    const adToDelete: AdGraphQl[] = await Ad.find({}).lean().exec();
    const res = await mutate(DELETE_AD, {
      variables: { id: adToDelete[0]._id.toString() },
    });
    expect(res).toMatchSnapshot();
  });

  it('update adWine mutation fails if logged in and other user', async () => {
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
    const adToUpdate: AdGraphQl[] = await Ad.find({}).lean().exec();
    const ad: AdInputUpdate = {
      _id: adToUpdate[0]._id.toString(),
      isActive: false,
    };
    const res = await mutate(UPDATE_AD, {
      variables: { ad },
    });
    expect(res).toMatchSnapshot();
  });

  it('delete adWine mutation fails if logged in and other user', async () => {
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
    const adToDelete: AdGraphQl[] = await Ad.find({}).lean().exec();
    const res = await mutate(DELETE_AD, {
      variables: { id: adToDelete[0]._id.toString() },
    });
    expect(res).toMatchSnapshot();
  });

  it('create adWine mutation successfull, followup sent to user looking to buy wine', async () => {
    const wine: WineType[] = await Wine.find({}).lean().exec();
    const ad: AdInput = {
      wineName: wine[0].denominazioneVino,
      harvest: 2020,
      abv: 12.5,
      priceFrom: 1.0,
      priceTo: 1.5,
      litersFrom: 500,
      litersTo: 600,
      content: 'wow',
      address: indirizzo,
      typeAd: TypeAd.SELL,
      typeProduct: TypeProduct.ADWINE,
      needsFollowUp: false,
    };
    const res = await mutate(CREATE_AD, {
      variables: { ad },
    });
    expect(res).toMatchSnapshot();
    expect(fakeStart).toBeCalledTimes(1);
    expect(fakeStop).toBeCalledTimes(1);
  });

  it('create adGrape mutation successfull', async () => {
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

  it('create adGrape mutation it fails if kgs are missing', async () => {
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

  it('query single ad shows number visit if logged', async () => {
    const ad: AdGraphQl[] = await Ad.find({}).lean().exec();
    const res = await query(AD, {
      variables: { id: ad[0]._id.toString() },
    });
    expect(res).toMatchSnapshot();
  });
});

afterAll(async () => {
  await dropTestDb();
  await closeDbConnection();
});
