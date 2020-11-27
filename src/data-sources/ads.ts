import { MongoDataSource } from 'apollo-datasource-mongodb';
import { IAdDoc } from '../models/ad';
import { QueryOrderBy, TypeProduct, Error } from '../types';
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

const parseGrapeAd = (params: any, errors: Error[]): GrapeAdParams => {
  if (!params.vineyardName) {
    errors.push({
      name: 'UserInputError',
      text: 'The vineyard name is mandatory',
    });
    // throw new UserInputError('All the parameters are mandatory', {
    //   invalidArgs: params,
    // });
  }
  if (!params.kgFrom) {
    errors.push({
      name: 'UserInputError',
      text: 'The kg from is mandatory',
    });
    // throw new UserInputError('All the parameters are mandatory', {
    //   invalidArgs: params,
    // });
  }
  if (!params.kgTo) {
    errors.push({
      name: 'UserInputError',
      text: 'The kg to is mandatory',
    });
    // throw new UserInputError('All the parameters are mandatory', {
    //   invalidArgs: params,
    // });
  }
  return {
    vineyardName: params.vineyardName,
    kgFrom: params.kgFrom,
    kgTo: params.kgTo,
  };
};

const parseWineAd = (params: any, errors: Error[]): WineAdParams => {
  if (!params.wineName) {
    errors.push({
      name: 'UserInputError',
      text: 'The wine name is mandatory',
    });
    // throw new UserInputError('All the parameters are mandatory', {
    //   invalidArgs: params,
    // });
  }
  if (!params.litersFrom) {
    errors.push({
      name: 'UserInputError',
      text: 'The liters from is mandatory',
    });
    // throw new UserInputError('All the parameters are mandatory', {
    //   invalidArgs: params,
    // });
  }
  if (!params.litersTo) {
    errors.push({
      name: 'UserInputError',
      text: 'The liters to is mandatory',
    });
    // throw new UserInputError('All the parameters are mandatory', {
    //   invalidArgs: params,
    // });
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

  async getAdsByUser(userId: string) {
    return this.model.find({ postedBy: userId }).lean().exec();
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
    const errors: Error[] = [];
    const { _id } = this.context.user;
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
          ...parseGrapeAd(restParams, errors),
        };
        break;
      case TypeProduct.ADWINE:
        newAd = {
          ...newAd,
          ...parseWineAd(restParams, errors),
        };
        break;
      default:
        assertNever(newAd.typeProduct);
    }
    if (errors.length !== 0) {
      return {
        response: null,
        errors,
      };
    }

    const createdAd = new this.model({ ...newAd, postedBy: _id });
    try {
      await createdAd.save();
    } catch (e) {
      errors.push({ name: 'General Error', text: e.message });
      return {
        response: null,
        errors,
      };
      //throw new UserInputError(e.message);
    }
    return {
      response: createdAd,
      errors,
    };
  }

  async updateAd(ad: AdInputUpdate) {
    const errors: Error[] = [];
    const updatedAd = await this.model
      .findOneAndUpdate({ _id: ad._id, postedBy: this.context.user._id }, ad, {
        new: true,
      })
      .lean()
      .exec();
    if (!updatedAd) {
      errors.push({ name: 'General error', text: 'Error during the update' });
      return {
        response: null,
        errors,
      };
    }
    return {
      response: updatedAd,
      errors,
    };
  }

  async deleteAdWine(id: string) {
    const errors: Error[] = [];
    const removedAd = await this.model
      .findOneAndDelete({
        _id: id,
        postedBy: this.context.user._id,
      })
      .lean()
      .exec();
    if (!removedAd) {
      errors.push({ name: 'General error', text: 'Error during the delete' });
      return {
        response: null,
        errors,
      };
    }
    return {
      response: removedAd,
      errors,
    };
  }
}
