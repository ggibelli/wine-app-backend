import { MongoDataSource } from 'apollo-datasource-mongodb';
import { IAdDoc } from '../models/ad';
import { QueryOrderBy, TypeProduct } from '../types';
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

export interface QueryAdsArgsPag extends QueryAdsArgs {
  limit: number;
  skip: number;
  orderBy: QueryOrderBy;
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
    return this.model.findById(adId).lean().exec();
    //let asd = Ad.findById(adId).lean().exec();
  }

  // un metodo solo con tipo prodotto e nome vino o nome vigna
  async getAds({
    limit = 10,
    skip = 0,
    orderBy = QueryOrderBy.createdAt_DESC,
    vineyardName,
    wineName,
    typeAd,
    typeProduct,
  }: QueryAdsArgs) {
    const LIMIT_MAX = 100;
    if (limit < 1 || skip < 0 || limit > LIMIT_MAX) {
      throw new UserInputError(
        `${limit} must be greater than 1 and less than 100 ${skip} must be positive `
      );
    }
    let sortQuery;
    switch (orderBy) {
      case QueryOrderBy.createdAt_ASC:
        sortQuery = { _id: 1 };
        break;
      case QueryOrderBy.createdAt_DESC:
        sortQuery = { _id: -1 };
        break;
      case QueryOrderBy.price_ASC:
        sortQuery = { priceFrom: 1 };
        break;
      case QueryOrderBy.price_DESC:
        sortQuery = { priceFrom: -1 };
        break;
      default:
        assertNever(orderBy);
    }
    if (vineyardName) {
      return this.model
        .find({
          typeAd: typeAd,
          vineyardName: vineyardName,
        })
        .skip(skip)
        .limit(limit)
        .sort(sortQuery)
        .lean()
        .exec();
    } else if (wineName) {
      return this.model
        .find({
          typeAd: typeAd,
          wineName: wineName,
        })
        .skip(skip)
        .limit(limit)
        .sort(sortQuery)
        .lean()
        .exec();
    }
    return this.model
      .find({
        typeAd: typeAd,
        typeProduct: typeProduct,
      })
      .skip(skip)
      .limit(limit)
      .sort(sortQuery)
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

    const createdAd = new this.model({ ...newAd, postedBy: _id });
    try {
      await createdAd.save();
    } catch (e) {
      throw new UserInputError(e.message);
    }
    return createdAd;
  }

  async updateAdWine(ad: AdInputUpdate) {
    const updatedAd = await this.model
      .findOneAndUpdate({ _id: ad._id, postedBy: this.context.user._id }, ad, {
        new: true,
      })
      .lean()
      .exec();
    return updatedAd;
  }

  async deleteAdWine(id: string) {
    const removedAd = await this.model
      .findOneAndDelete({
        _id: id,
        postedBy: this.context.user._id,
      })
      .lean()
      .exec();
    return removedAd;
  }
}
