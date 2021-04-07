/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { MongoDataSource } from 'apollo-datasource-mongodb';
import { AdGraphQl, IAdDoc } from '../models/ad';
import { QueryOrderBy, TypeProduct, Errors, TypeAd } from '../types';

import { assertNever } from '../utils/helpersTypeScript';
import {
  Ad,
  AdInput,
  AdInputUpdate,
  AdsResult,
  QueryAdsArgs,
  QueryAdsForUserArgs,
} from '../generated/graphql';
import { UserInputError } from 'apollo-server-express';
import { UserGraphQl } from '../models/user';
import { sendMail } from '../utils/mailServer';
import { CronJob } from 'cron';
import { loggerError } from '../utils/logger';

export interface FollowUp {
  userMail: string;
  userId: string;
  adId: string;
}

interface GrapeAdParams {
  vineyardName: string;
  kgFrom: number;
  kgTo: number;
}

type RestParams = Omit<
  AdInput,
  | 'typeAd'
  | 'typeProduct'
  | 'content'
  | 'address'
  | 'harvest'
  | 'abv'
  | 'priceFrom'
  | 'priceTo'
>;

export interface AdResponse {
  usersToNotify?: Array<FollowUp['userId']>;
  response: IAdDoc | AdGraphQl | null;
  errors: Errors[];
}

interface WineAdParams {
  wineName: string;
  litersFrom: number;
  litersTo: number;
}

export interface QueryAdsArgsPag extends QueryAdsArgs {
  limit: number;
  offset: number;
  orderBy: QueryOrderBy;
}

interface Context {
  user: UserGraphQl;
  createToken(user: UserGraphQl): string;
}

export const sortQueryHelper = (orderBy: QueryOrderBy) => {
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
  return sortQuery;
};

const parseGrapeAd = (params: RestParams, errors: Errors[]): GrapeAdParams => {
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
  } as GrapeAdParams;
};

const parseWineAd = (params: RestParams, errors: Errors[]): WineAdParams => {
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
  } as WineAdParams;
};

export default class Ads extends MongoDataSource<IAdDoc, Context> {
  async getAd(adId: string): Promise<IAdDoc | null | undefined> {
    //const user = this.context.user;
    const ad = await this.findOneById(adId);
    // if (user) {
    //   ad?.viewedBy?.addToSet(user._id);
    //   await ad?.save();
    // }
    //ad?.populate({ path: 'negotiations', select: 'createdBy' });
    return ad;
  }

  async getAdsUserType(user: string): Promise<AdGraphQl[]> {
    return this.model.find({ postedBy: user }).lean().exec();
  }

  async getAdsByUser({
    user,
    limit = 10,
    offset = 0,
    orderBy = QueryOrderBy.createdAt_DESC,
    isActive,
  }: QueryAdsForUserArgs): Promise<AdsResult> {
    const LIMIT_MAX = 100;
    if (limit < 1 || offset < 0 || limit > LIMIT_MAX) {
      throw new UserInputError(
        `${limit} must be greater than 1 and less than 100 ${offset} must be positive `
      );
    }
    const sortQuery = sortQueryHelper(orderBy);
    const pageCount = await this.model
      .countDocuments({
        postedBy: user,
      })
      .exec();
    if (isActive === true) {
      const pageCount = await this.model
        .countDocuments({
          postedBy: user,
          isActive: true,
        })
        .exec();
      return {
        ads: ((await this.model
          .find({ postedBy: user, isActive: true })
          .skip(offset)
          .limit(limit)
          .sort(sortQuery)
          .lean()
          .exec()) as unknown) as Ad[],
        pageCount,
      };
    }
    return {
      ads: ((await this.model
        .find({ postedBy: user })
        .skip(offset)
        .limit(limit)
        .sort(sortQuery)
        .lean()
        .exec()) as unknown) as Ad[],
      pageCount,
    };
  }

  // un metodo solo con tipo prodotto e nome vino o nome vigna
  async getAds({
    limit = 10,
    offset = 0,
    orderBy = QueryOrderBy.createdAt_DESC,
    vineyardName,
    wineName,
    typeAd,
    typeProduct,
  }: QueryAdsArgs): Promise<AdsResult> {
    const LIMIT_MAX = 100;
    if (limit < 1 || offset < 0 || limit > LIMIT_MAX) {
      throw new UserInputError(
        `${limit} must be greater than 1 and less than 100 ${offset} must be positive `
      );
    }
    const sortQuery = sortQueryHelper(orderBy);
    if (vineyardName) {
      const pageCount = await this.model
        .countDocuments({
          typeAd: typeAd,
          vineyardName: vineyardName,
          isActive: true,
        })
        .exec();
      return {
        pageCount,

        ads: ((await this.model
          .find({
            typeAd: typeAd,
            vineyardName: vineyardName,
            isActive: true,
          })
          .skip(offset)
          .limit(limit)
          .sort(sortQuery)
          .lean()
          .exec()) as unknown) as Ad[],
      };
    } else if (wineName) {
      const pageCount = await this.model
        .countDocuments({
          typeAd: typeAd,
          wineName: wineName,
          isActive: true,
        })
        .exec();
      return {
        pageCount,

        ads: ((await this.model
          .find({
            typeAd: typeAd,
            wineName: wineName,
            isActive: true,
          })
          .skip(offset)
          .limit(limit)
          .sort(sortQuery)
          .lean()
          .exec()) as unknown) as Ad[],
      };
    }
    const pageCount = await this.model
      .countDocuments({
        typeAd: typeAd,
        typeProduct: typeProduct,
        isActive: true,
      })
      .exec();
    return {
      pageCount,

      ads: ((await this.model
        .find({
          typeAd: typeAd,
          typeProduct: typeProduct,
          isActive: true,
        })
        .skip(offset)
        .limit(limit)
        .sort(sortQuery)
        .lean()
        .exec()) as unknown) as Ad[],
    };
  }

  async createAd(ad: AdInput): Promise<AdResponse> {
    const errors: Errors[] = [];
    // eslint-disable-next-line @typescript-eslint/await-thenable
    const user = this.context.user;
    if (!user.isVerified) {
      errors.push({
        name: 'AuthorizationError',
        text: 'You need to verify your account',
      });
      return {
        response: null,
        errors,
      };
    }
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
      needsFollowUp,
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
      needsFollowUp: needsFollowUp,
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

    // If the Ad created was wine I look who wants a follow up about that wine and push the user id and mail into the array

    try {
      await createdAd.save();
    } catch (e) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      errors.push({ name: 'General Error', text: e.message });
      return {
        response: null,
        errors,
      };
      //throw new UserInputError(e.message);
    }
    let countDeliveryTries = 0;
    const followUpUsersToNotify: FollowUp[] = [];
    const SellOrBuy =
      createdAd.typeAd === TypeAd.SELL ? TypeAd.BUY : TypeAd.SELL;
    await this.collection.createIndex({ needsFollowUp: 1 });
    const adsToFollow = await this.model
      .find({
        $or: [
          {
            wineName: createdAd.wineName,
            vineyardName: createdAd.vineyardName,
          },
        ],
        $and: [{ needsFollowUp: true, typeAd: SellOrBuy, isActive: true }],
      })
      .populate('postedBy', { email: 1 })
      .lean()
      .exec();
    adsToFollow.map((ad) =>
      followUpUsersToNotify.push({
        userId: ad.postedBy._id,
        userMail: ad.postedBy.email,
        adId: ad._id,
      })
    );
    const mailBody = {
      subject: 'New Ad',
      body: {
        intro: `Looks like there is a new ad that might interest you, here the link ${createdAd._id}`,
      },
    };
    const recipients = followUpUsersToNotify
      .filter((userFollowUp) => userFollowUp.userMail !== user.email)
      .map((user) => user.userMail);
    const uniqueRecipients = [...new Set(recipients)];
    const uniqueUsersToNotifiy = [
      ...new Set(
        followUpUsersToNotify
          .map((user) => user.userId.toString())
          .filter((u) => u !== user._id.toString())
      ),
    ];
    const jobMail = new CronJob('*/3 * * * *', () => {
      if (countDeliveryTries >= 2) {
        jobMail.stop();
        return;
      }
      sendMail(mailBody, uniqueRecipients)
        .then(() => {
          jobMail.stop();
        })
        .catch((error) => {
          loggerError(error);
          countDeliveryTries += 1;
        });
    });
    if (recipients.length > 0) {
      jobMail.start();
    }
    return {
      usersToNotify: uniqueUsersToNotifiy,
      response: createdAd,
      errors,
    };
  }

  async updateAd(ad: AdInputUpdate): Promise<AdResponse> {
    const errors: Errors[] = [];
    const user = this.context.user;
    const updatedAd = await this.model

      .findOneAndUpdate({ _id: ad._id, postedBy: user._id }, ad, {
        new: true,
      })
      .populate('negotiations', { createdBy: 1 })
      .lean()
      .exec();
    if (!updatedAd) {
      errors.push({
        name: 'General error',
        text: 'Error during the update, only ad owner can update it',
      });
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

  async deleteAd(id: string): Promise<AdResponse> {
    const errors: Errors[] = [];
    const user = this.context.user;
    const removedAd = await this.model
      .findOneAndDelete({
        _id: id,
        postedBy: user._id,
      })
      .populate('negotiations', { createdBy: 1 })
      .lean()
      .exec();
    if (!removedAd) {
      errors.push({
        name: 'General error',
        text: 'Error during the delete, only ad owner can delete it',
      });
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
