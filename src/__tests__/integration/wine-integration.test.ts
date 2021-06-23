/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { gql } from 'apollo-server-express';
import { LeanDocument, Types } from 'mongoose';
import {
  testClient,
  connectToDb,
  dropTestDb,
  closeDbConnection,
} from '../../tests/integrationSetup';
// import { ObjectId } from 'mongodb';
import { User } from '../../models/user';
import { users } from '../../tests/mocksTests';
import { WineInput, WineInputUpdate } from '../../generated/graphql';
import { EspressioneComunitaria, DenomZona } from '../../types';
// import createWineDb from '../../utils/wineExtractor';
import { Wine } from '../../models/wine';
import { WineDocument } from '../../interfaces/mongoose.gen';

const { query, mutate, setOptions } = testClient;

const WINES = gql`
  {
    wines {
      denominazioneVino
      espressioneComunitaria
      denominazioneZona
    }
  }
`;

const WINE = gql`
  query GetWine($id: ID!) {
    wine(id: $id) {
      denominazioneVino
      espressioneComunitaria
      denominazioneZona
    }
  }
`;

const CREATE_WINE = gql`
  mutation CreateWine($wine: WineInput!) {
    createWine(wine: $wine) {
      response {
        denominazioneVino
        espressioneComunitaria
        denominazioneZona
      }
      errors {
        name
        text
      }
    }
  }
`;

const UPDATE_WINE = gql`
  mutation UpdateWine($wine: WineInputUpdate!) {
    updateWine(wine: $wine) {
      response {
        denominazioneVino
        espressioneComunitaria
        denominazioneZona
      }
      errors {
        name
        text
      }
    }
  }
`;

const DELETE_WINE = gql`
  mutation DeleteWine($id: ID!) {
    deleteWine(id: $id) {
      response {
        denominazioneVino
        espressioneComunitaria
        denominazioneZona
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
  const user = new User({ ...usersMock[0], _id: new Types.ObjectId() });
  const otherUser = new User({ ...usersMock[1], _id: new Types.ObjectId() });
  const wine = new Wine({
    denominazioneVino: 'Abruzzo',
    espressioneComunitaria: 'DOP',
    denominazioneZona: 'DOC',
    _id: new Types.ObjectId(),
  });
  await user.save();
  await otherUser.save();
  await wine.save();
});

describe('Integration test wines', () => {
  // it('query wines fails if not logged in', async () => {
  //   const res = await query(WINES);
  //   expect(res).toMatchSnapshot();
  // });

  // it('query single wine fails if not logged', async () => {
  //   const wines: LeanDocument<IWineDoc>[] = await Wine.find({}).lean().exec();
  //   const res = await query(WINE, {
  //     variables: { id: wines[0]._id.toString() },
  //   });
  //   expect(res).toMatchSnapshot();
  // });

  it('create wine mutation fails if not logged in', async () => {
    const wine: WineInput = {
      denominazioneVino: 'ciccio',
      espressioneComunitaria: EspressioneComunitaria.DOP,
      // @ts-ignore
      denominazioneZona: DenomZona.DOC,
    };
    const res = await mutate(CREATE_WINE, {
      variables: { wine },
    });
    expect(res).toMatchSnapshot();
  });

  it('query wines succeds if logged in', async () => {
    const data: any = await mutate(LOGIN_VALID);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const { token } = data.data.login.response;
    setOptions({
      request: {
        headers: {
          authorization: token,
        },
      },
    });
    const res = await query(WINES);
    expect(res).toMatchSnapshot();
  });

  it('query single wine succeds if logged', async () => {
    const wine: LeanDocument<WineDocument>[] = await Wine.find({})
      .lean()
      .exec();
    const res = await query(WINE, {
      variables: { id: wine[0]._id.toString() },
    });
    expect(res).toMatchSnapshot();
  });

  it('create wine mutation successfull if logged in and admin', async () => {
    const wine: WineInput = {
      denominazioneVino: 'ciccio',
      espressioneComunitaria: EspressioneComunitaria.DOP,
      // @ts-ignore
      denominazioneZona: DenomZona.DOC,
    };
    const res = await mutate(CREATE_WINE, {
      variables: { wine },
    });
    expect(res).toMatchSnapshot();
  });

  it('update wine mutation succeds if logged in and admin', async () => {
    const wineToUpdate: LeanDocument<WineDocument>[] = await Wine.find({})
      .lean()
      .exec();
    const wine: WineInputUpdate = {
      _id: wineToUpdate[0]._id.toString(),
      denominazioneVino: 'Caprotto',
    };
    const res = await mutate(UPDATE_WINE, {
      variables: { wine },
    });
    expect(res).toMatchSnapshot();
  });

  it('delete wine mutation succeds if logged in and admin', async () => {
    const wineToDelete: LeanDocument<WineDocument>[] = await Wine.find({})
      .lean()
      .exec();
    const res = await mutate(DELETE_WINE, {
      variables: { id: wineToDelete[0]._id.toString() },
    });
    expect(res).toMatchSnapshot();
  });

  it('update wine mutation fails if logged in and not admin', async () => {
    const data: any = await mutate(LOGIN_VALID_OTHER);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const { token } = data.data.login.response;
    setOptions({
      request: {
        headers: {
          authorization: token,
        },
      },
    });
    const wineToUpdate: LeanDocument<WineDocument>[] = await Wine.find({})
      .lean()
      .exec();
    const wine: WineInputUpdate = {
      _id: wineToUpdate[0]._id.toString(),
      denominazioneVino: 'Caprotto',
    };
    const res = await mutate(UPDATE_WINE, {
      variables: { wine },
    });
    expect(res).toMatchSnapshot();
  });

  it('delete wine mutation fails if logged in and not admin', async () => {
    const wineToDelete: LeanDocument<WineDocument>[] = await Wine.find({})
      .lean()
      .exec();
    const res = await mutate(DELETE_WINE, {
      variables: { id: wineToDelete[0]._id.toString() },
    });
    expect(res).toMatchSnapshot();
  });

  it('create wine mutation fails if logged in and not admin', async () => {
    const wine: WineInput = {
      denominazioneVino: 'ciccio',
      espressioneComunitaria: EspressioneComunitaria.DOP,
      // @ts-ignore
      denominazioneZona: DenomZona.DOC,
    };
    const res = await mutate(CREATE_WINE, {
      variables: { wine },
    });
    expect(res).toMatchSnapshot();
  });
});

afterAll(async () => {
  await dropTestDb();
  await closeDbConnection();
});
