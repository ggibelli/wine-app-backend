import { MongoDataSource } from 'apollo-datasource-mongodb';
import { IAdDoc, Ad, IAd } from '../models/ad';
import { TypeProduct, TypeAd } from '../types';
import { assertNever } from '../utils/helpersTypeScript';
import { AdInput, AdInputUpdate, QueryAdsArgs } from '../generated/graphql';
import { AuthenticationError, UserInputError } from 'apollo-server-express';

interface GrapeAdParams {
  vineyardName: string;
  kgFrom: number;
  kgTo: number;
}

interface WineAdParams {
  wineName: string;
  litersFrom: number;
  litersTo: number;
}

const parseGrapeAd = (params: any): GrapeAdParams => {
  if (!params.vineyardName || !params.kgFrom || !params.kgTo) {
    throw new UserInputError('All the parameters are mandatory', {
      invalidArgs: params,
    });
  }
  return {
    vineyardName: params.vineyardName,
    kgFrom: params.kgFrom,
    kgTo: params.kgTo,
  };
};

const parseWineAd = (params: any): WineAdParams => {
  if (!params.wineName || !params.litersFrom || !params.litersTo) {
    throw new UserInputError('All the parameters are mandatory', {
      invalidArgs: params,
    });
  }
  return {
    wineName: params.wineName,
    litersFrom: params.litersFrom,
    litersTo: params.litersTo,
  };
};

export default class Ads extends MongoDataSource<IAd | IAdDoc> {
  getAd(adId: string) {
    return this.findOneById(adId);
    //return Ad.findById(adId).lean().exec();
  }
  // un metodo solo con tipo prodotto e nome vino o nome vigna
  getAds(args: QueryAdsArgs) {
    switch (args.typeProduct) {
      case TypeProduct.ADGRAPE:
        switch (args.typeAd) {
          case TypeAd.SELL:
            if (args.vineyardName) {
              return Ad.find({
                typeProduct: TypeProduct.ADGRAPE,
                typeAd: TypeAd.SELL,
                vineyardName: args.vineyardName,
              })
                .lean()
                .exec();
            }
            return Ad.find({
              typeProduct: TypeProduct.ADGRAPE,
              typeAd: TypeAd.SELL,
            })
              .lean()
              .exec();
          case TypeAd.BUY:
            if (args.vineyardName) {
              return Ad.find({
                typeProduct: TypeProduct.ADGRAPE,
                typeAd: TypeAd.BUY,
                vineyardName: args.vineyardName,
              })
                .lean()
                .exec();
            }
            return Ad.find({
              typeProduct: TypeProduct.ADGRAPE,
              typeAd: TypeAd.BUY,
            })
              .lean()
              .exec();
        }

      case TypeProduct.ADWINE:
        switch (args.typeAd) {
          case TypeAd.SELL:
            if (args.wineName) {
              return Ad.find({
                typeProduct: TypeProduct.ADWINE,
                typeAd: TypeAd.SELL,
                wineName: args.wineName,
              })
                .lean()
                .exec();
            }
            return Ad.find({
              typeProduct: TypeProduct.ADWINE,
              typeAd: TypeAd.SELL,
            })
              .lean()
              .exec();
          case TypeAd.BUY:
            if (args.wineName) {
              return Ad.find({
                typeProduct: TypeProduct.ADWINE,
                typeAd: TypeAd.BUY,
                wineName: args.wineName,
              })
                .lean()
                .exec();
            }
            return Ad.find({
              typeProduct: TypeProduct.ADWINE,
              typeAd: TypeAd.BUY,
            })
              .lean()
              .exec();
        }
      default:
        assertNever(args.typeProduct);
    }
    return null;
  }

  async createAd(ad: AdInput) {
    const { _id } = this.context.currentUser;
    if (!_id) {
      throw new AuthenticationError('Must login to post ad');
    }
    const {
      typeAd,
      typeProduct,
      content,
      address,
      harvest,
      abv,
      priceFrom,
      priceTo,
      ...restParams
    } = ad;
    let newAd = {
      typeAd: typeAd,
      typeProduct: typeProduct,
      content: content,
      address: address,
      harvest: harvest,
      abv: abv,
      priceFrom: priceFrom,
      priceTo: priceTo,
    };

    switch (newAd.typeProduct) {
      case TypeProduct.ADGRAPE:
        newAd = {
          ...newAd,
          ...parseGrapeAd(restParams),
        };
        break;
      case TypeProduct.ADWINE:
        newAd = {
          ...newAd,
          ...parseWineAd(restParams),
        };
        break;
      default:
        assertNever(newAd.typeProduct);
    }
    const createdAd = new Ad({
      ...newAd,
      postedBy: _id,
    });
    try {
      await createdAd.save();
    } catch (e) {
      throw new Error(e.message);
    }
    return createdAd;
  }

  async updateAdWine(ad: AdInputUpdate, id: string) {
    if (!this.context.currentUser) {
      throw new AuthenticationError('Must login to update ad');
    }
    let adToUpdate = { sottoZona: 'aaa' };

    const updatedAd = await Ad.findByIdAndUpdate(id, ad, { new: true })
      .lean()
      .exec();
    return updatedAd;
  }

  async deleteAdWine(id: string) {
    if (!this.context.currentUser) {
      throw new AuthenticationError('Must login to post ad');
    }
    const removedAd = await Ad.findByIdAndDelete(id).lean().exec();
    return removedAd;
  }
}
