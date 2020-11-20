import { MongoDataSource } from 'apollo-datasource-mongodb';
import { IAdDoc, Ad } from '../models/ad';
import { TypeProduct } from '../types';
//import { ObjectId } from 'mongodb';

import { assertNever } from '../utils/helpersTypeScript';
import { AdInput, AdInputUpdate, QueryAdsArgs } from '../generated/graphql';
import { UserInputError } from 'apollo-server-express';

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

export default class Ads extends MongoDataSource<IAdDoc> {
  async getAd(adId: string) {
    return this.findOneById(adId);
    //let asd = Ad.findById(adId).lean().exec();
  }

  // un metodo solo con tipo prodotto e nome vino o nome vigna
  async getAds(args: QueryAdsArgs) {
    if (args.vineyardName) {
      return Ad.find({
        typeAd: args.typeAd,
        vineyardName: args.vineyardName,
      })
        .lean()
        .exec();
    } else if (args.wineName) {
      return Ad.find({
        typeAd: args.typeAd,
        wineName: args.wineName,
      })
        .lean()
        .exec();
    }
    return Ad.find({
      typeAd: args.typeAd,
      typeProduct: args.typeProduct,
    })
      .lean()
      .exec();
  }
  async createAd(ad: AdInput) {
    const { _id } = this.context.current;
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
      throw new UserInputError(e.message);
    }
    return createdAd;
  }

  async updateAdWine(ad: AdInputUpdate, id: string) {
    const updatedAd = await Ad.findOneAndUpdate(
      { _id: id, postedBy: this.context.user._id },
      ad,
      { new: true }
    )
      .lean()
      .exec();
    return updatedAd;
  }

  async deleteAdWine(id: string) {
    const removedAd = await Ad.findOneAndDelete({
      _id: id,
      postedBy: this.context.user._id,
    })
      .lean()
      .exec();
    return removedAd;
  }
}
