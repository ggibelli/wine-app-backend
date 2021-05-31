"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const apollo_server_express_1 = require("apollo-server-express");
const integrationSetup_1 = require("../../tests/integrationSetup");
const user_1 = require("../../models/user");
const ad_1 = require("../../models/ad");
const mocksTests_1 = require("../../tests/mocksTests");
const types_1 = require("../../types");
// import createWineDb from '../../utils/wineExtractor';
const wine_1 = require("../../models/wine");
//import { ObjectId } from 'mongodb';
const cron_1 = __importDefault(require("cron"));
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
cron_1.default.CronJob = FakeCron;
const { query, mutate, setOptions } = integrationSetup_1.testClient;
const ADS = apollo_server_express_1.gql `
  {
    ads(typeAd: BUY, typeProduct: AdWine) {
      ads {
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
    }
  }
`;
const AD = apollo_server_express_1.gql `
  query GetAd($id: ID!) {
    ad(id: $id) {
      content
      #datePosted
      numberViews
    }
  }
`;
const SAVE_AD = apollo_server_express_1.gql `
  mutation SaveAd($id: ID!) {
    saveAd(id: $id) {
      response {
        content
      }
      errors {
        text
      }
    }
  }
`;
const CREATE_AD = apollo_server_express_1.gql `
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
const UPDATE_AD = apollo_server_express_1.gql `
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
const DELETE_AD = apollo_server_express_1.gql `
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
const LOGIN_VALID = apollo_server_express_1.gql `
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
const LOGIN_VALID_OTHER = apollo_server_express_1.gql `
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
const LOGIN_VALID_NOT_VERIFIED = apollo_server_express_1.gql `
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
    await integrationSetup_1.connectToDb();
    await integrationSetup_1.dropTestDb();
    const usersMock = mocksTests_1.users();
    const adsMock = mocksTests_1.ads();
    // const wineDb = await createWineDb();
    const user = new user_1.User(usersMock[0]);
    const otherUser = new user_1.User(usersMock[1]);
    const thirdUser = new user_1.User(usersMock[2]);
    const ad = new ad_1.Ad({ ...adsMock[0], postedBy: user });
    const wine = new wine_1.Wine({
        denominazioneVino: 'Abruzzo',
        espressioneComunitaria: 'DOP',
        denominazioneZona: 'DOC',
    });
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
    }, 10000);
    it('query single ad does not show 0 number visit if not logged', async () => {
        const ad = await ad_1.Ad.find({}).lean().exec();
        const res = await query(AD, {
            variables: { id: ad[0]._id.toString() },
        });
        expect(res).toMatchSnapshot();
    }, 10000);
    it('create adGrape mutation it fails if not logged in', async () => {
        const ad = {
            vineyardName: 'Uvetta',
            metodoProduttivo: types_1.MetodoProduttivo.BIOLOGICO,
            harvest: 2020,
            abv: 12.0,
            priceFrom: 1.0,
            priceTo: 1.5,
            content: 'buona uva',
            typeAd: types_1.TypeAd.SELL,
            typeProduct: types_1.TypeProduct.ADGRAPE,
        };
        const res = await mutate(CREATE_AD, {
            variables: { ad },
        });
        expect(res).toMatchSnapshot();
    }, 10000);
    it('saveAd mutation it fails if not logged in', async () => {
        const res = await mutate(SAVE_AD, {
            variables: { id: '602daa91cdc6630673a9fc0e' },
        });
        expect(res).toMatchSnapshot();
    }, 10000);
    it('create adWine mutation fails if user not verified', async () => {
        const data = await mutate(LOGIN_VALID_NOT_VERIFIED);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        const token = data.data.login.response.token;
        setOptions({
            request: {
                headers: {
                    authorization: token,
                },
            },
        });
        const wine = await wine_1.Wine.find({}).lean().exec();
        const ad = {
            wineName: wine[0].denominazioneVino,
            sottoZona: 'Sotto',
            harvest: 2020,
            abv: 12.0,
            priceFrom: 1.0,
            priceTo: 1.5,
            litersFrom: 500,
            litersTo: 600,
            content: 'wow',
            typeAd: types_1.TypeAd.BUY,
            typeProduct: types_1.TypeProduct.ADWINE,
            needsFollowUp: true,
        };
        const res = await mutate(CREATE_AD, {
            variables: { ad },
        });
        expect(res).toMatchSnapshot();
    }, 10000);
    it('query ads wine in sale succeds if logged in', async () => {
        const data = await mutate(LOGIN_VALID);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        const token = data.data.login.response.token;
        setOptions({
            request: {
                headers: {
                    authorization: token,
                },
            },
        });
        const res = await query(ADS);
        expect(res).toMatchSnapshot();
    }, 10000);
    it('saveAd mutation succeds if logged in and savedAd shows up in user savedads', async () => {
        const ads = await ad_1.Ad.find({}).lean().exec();
        const res = await mutate(SAVE_AD, {
            variables: { id: ads[0]._id.toString() },
        });
        const user = await user_1.User.findOne({
            email: 'gio@prova.it',
        })
            .lean()
            .exec();
        expect(user?.savedAds &&
            user.savedAds
                .map((id) => id.toString())
                .includes(ads[0]._id.toString())).toBeTruthy();
        expect(res).toMatchSnapshot();
    }, 10000);
    it('saveAd mutation succeds if logged in and if ad is already saved it gets removed', async () => {
        const ads = await ad_1.Ad.find({}).lean().exec();
        const user = await user_1.User.findOne({
            email: 'gio@prova.it',
        })
            .lean()
            .exec();
        expect(user?.savedAds &&
            user.savedAds
                .map((id) => id.toString())
                .includes(ads[0]._id.toString())).toBeTruthy();
        const res = await mutate(SAVE_AD, {
            variables: { id: ads[0]._id.toString() },
        });
        const userAfterMutation = await user_1.User.findOne({
            email: 'gio@prova.it',
        })
            .lean()
            .exec();
        expect(userAfterMutation?.savedAds &&
            userAfterMutation.savedAds
                .map((id) => id.toString())
                .includes(ads[0]._id.toString())).toBeFalsy();
        expect(res).toMatchSnapshot();
    }, 10000);
    it('create adWine mutation successfull', async () => {
        const wine = await wine_1.Wine.find({}).lean().exec();
        const ad = {
            wineName: wine[0].denominazioneVino,
            sottoZona: 'Sotto',
            harvest: 2020,
            abv: 12.0,
            priceFrom: 1.0,
            priceTo: 1.5,
            litersFrom: 500,
            litersTo: 600,
            content: 'wow',
            typeAd: types_1.TypeAd.BUY,
            typeProduct: types_1.TypeProduct.ADWINE,
            needsFollowUp: true,
        };
        const res = await mutate(CREATE_AD, {
            variables: { ad },
        });
        expect(res).toMatchSnapshot();
    }, 10000);
    it('update adWine mutation succeds if logged in and same user', async () => {
        const adToUpdate = await ad_1.Ad.find({}).lean().exec();
        const ad = {
            _id: adToUpdate[0]._id.toString(),
            isActive: false,
        };
        const res = await mutate(UPDATE_AD, {
            variables: { ad },
        });
        expect(res).toMatchSnapshot();
    }, 10000);
    it('delete adWine mutation succeds if logged in and same user', async () => {
        const adToDelete = await ad_1.Ad.find({}).lean().exec();
        const res = await mutate(DELETE_AD, {
            variables: { id: adToDelete[0]._id.toString() },
        });
        expect(res).toMatchSnapshot();
    }, 10000);
    it('update adWine mutation fails if logged in and other user', async () => {
        const data = await mutate(LOGIN_VALID_OTHER);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        const token = data.data.login.response.token;
        setOptions({
            request: {
                headers: {
                    authorization: token,
                },
            },
        });
        const adToUpdate = await ad_1.Ad.find({}).lean().exec();
        const ad = {
            _id: adToUpdate[0]._id.toString(),
            isActive: false,
        };
        const res = await mutate(UPDATE_AD, {
            variables: { ad },
        });
        expect(res).toMatchSnapshot();
    }, 10000);
    it('delete adWine mutation fails if logged in and other user', async () => {
        const data = await mutate(LOGIN_VALID_OTHER);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        const token = data.data.login.response.token;
        setOptions({
            request: {
                headers: {
                    authorization: token,
                },
            },
        });
        const adToDelete = await ad_1.Ad.find({}).lean().exec();
        const res = await mutate(DELETE_AD, {
            variables: { id: adToDelete[0]._id.toString() },
        });
        expect(res).toMatchSnapshot();
    }, 10000);
    it('create adWine mutation successfull, followup sent to user looking to buy wine', async () => {
        const wine = await wine_1.Wine.find({}).lean().exec();
        const ad = {
            wineName: wine[0].denominazioneVino,
            harvest: 2020,
            abv: 12.5,
            priceFrom: 1.0,
            priceTo: 1.5,
            litersFrom: 500,
            litersTo: 600,
            content: 'wow',
            typeAd: types_1.TypeAd.SELL,
            typeProduct: types_1.TypeProduct.ADWINE,
            needsFollowUp: false,
        };
        const res = await mutate(CREATE_AD, {
            variables: { ad },
        });
        expect(res).toMatchSnapshot();
        expect(fakeStart).toBeCalledTimes(1);
        expect(fakeStop).toBeCalledTimes(1);
    }, 10000);
    it('create adGrape mutation successfull', async () => {
        const ad = {
            vineyardName: 'Uvetta',
            metodoProduttivo: types_1.MetodoProduttivo.BIOLOGICO,
            harvest: 2020,
            abv: 12.0,
            priceFrom: 1.0,
            priceTo: 1.5,
            kgFrom: 500,
            kgTo: 600,
            content: 'buona uva',
            typeAd: types_1.TypeAd.SELL,
            typeProduct: types_1.TypeProduct.ADGRAPE,
        };
        const res = await mutate(CREATE_AD, {
            variables: { ad },
        });
        expect(res).toMatchSnapshot();
    }, 10000);
    it('create adGrape mutation it fails if kgs are missing', async () => {
        const ad = {
            vineyardName: 'Uvetta',
            metodoProduttivo: types_1.MetodoProduttivo.BIOLOGICO,
            harvest: 2020,
            abv: 12.0,
            priceFrom: 1.0,
            priceTo: 1.5,
            //kgFrom: 500,
            //kgTo: 600,
            content: 'buona uva',
            typeAd: types_1.TypeAd.SELL,
            typeProduct: types_1.TypeProduct.ADGRAPE,
        };
        const res = await mutate(CREATE_AD, {
            variables: { ad },
        });
        expect(res).toMatchSnapshot();
    }, 10000);
    it('query single ad shows number visit if logged', async () => {
        const ad = await ad_1.Ad.find({}).lean().exec();
        const res = await query(AD, {
            variables: { id: ad[0]._id.toString() },
        });
        expect(res).toMatchSnapshot();
    }, 10000);
});
afterAll(async () => {
    await integrationSetup_1.dropTestDb();
    await integrationSetup_1.closeDbConnection();
});
