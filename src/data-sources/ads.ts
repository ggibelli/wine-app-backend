import { MongoDataSource } from 'apollo-datasource-mongodb';
import { UserInputError } from 'apollo-server-express';
import { CronJob } from 'cron';
import { LeanDocument, Types } from 'mongoose';
import { TypeProduct, Errors, TypeAd } from '../types';
import assertNever from '../utils/helpersTypeScript';
import { AdDocument, UserDocument } from '../interfaces/mongoose.gen';
import {
  AdInput,
  AdInputUpdate,
  AdsResult,
  QueryAdsArgs,
  QueryAdsForUserArgs,
  QueryOrderBy,
} from '../generated/graphql';
import { sendMail } from '../utils/mailServer';
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
  response: AdDocument | LeanDocument<AdDocument> | null;
  errors: Errors[];
}

interface WineAdParams {
  wineName: string;
  litersFrom: number;
  litersTo: number;
}

interface Context {
  user: LeanDocument<UserDocument>;
  createToken(user: LeanDocument<UserDocument>): string;
}

export const sortQueryHelper = (orderBy: QueryOrderBy) => {
  let sortQuery;
  switch (orderBy) {
    case QueryOrderBy.CreatedAtASC:
      sortQuery = { _id: 1 };
      break;
    case QueryOrderBy.CreatedAtDESC:
      sortQuery = { _id: -1 };
      break;
    case QueryOrderBy.PriceASC:
      sortQuery = { priceFrom: 1 };
      break;
    case QueryOrderBy.priceDESC:
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

export default class Ads extends MongoDataSource<AdDocument, Context> {
  async getAd(adId: string): Promise<AdDocument | null | undefined> {
    // const user = this.context.user;
    const ad = await this.findOneById(adId);
    // if (user) {
    //   ad?.viewedBy?.addToSet(user._id);
    //   await ad?.save();
    // }
    // ad?.populate({ path: 'negotiations', select: 'createdBy' });
    return ad;
  }

  async getAdsUserType(user: string): Promise<LeanDocument<AdDocument>[]> {
    return this.model.find({ postedBy: user }).lean().exec();
  }

  async getAdsByUser({
    user,
    limit = 10,
    offset = 0,
    orderBy = QueryOrderBy.CreatedAtDESC,
    isActive,
  }: QueryAdsForUserArgs): Promise<AdsResult> {
    const LIMIT_MAX = 100;
    if (limit < 1 || offset < 0 || limit > LIMIT_MAX) {
      throw new UserInputError(
        `${limit} must be greater than 1 and less than 100 ${offset} must be positive `,
      );
    }
    const sortQuery = sortQueryHelper(orderBy);
    let pageCount = await this.model
      .countDocuments({
        postedBy: user,
      })
      .exec();
    if (isActive === true) {
      pageCount = await this.model
        .countDocuments({
          postedBy: user,
          isActive: true,
        })
        .exec();
      return {
        ads: await this.model
          .find({ postedBy: user, isActive: true })
          .skip(offset)
          .limit(limit)
          .sort(sortQuery)
          .lean()
          .exec(),
        pageCount,
      };
    }
    return {
      ads: await this.model
        .find({ postedBy: user })
        .skip(offset)
        .limit(limit)
        .sort(sortQuery)
        .lean()
        .exec(),
      pageCount,
    };
  }

  // un metodo solo con tipo prodotto e nome vino o nome vigna
  async getAds({
    limit = 10,
    offset = 0,
    orderBy = QueryOrderBy.CreatedAtDESC,
    vineyardName,
    wineName,
    typeAd,
    typeProduct,
  }: QueryAdsArgs): Promise<AdsResult> {
    const LIMIT_MAX = 100;
    if (limit < 1 || offset < 0 || limit > LIMIT_MAX) {
      throw new UserInputError(
        `${limit} must be greater than 1 and less than 100 ${offset} must be positive `,
      );
    }
    const sortQuery = sortQueryHelper(orderBy);
    if (vineyardName) {
      const pageCount = await this.model
        .countDocuments({
          typeAd,
          vineyardName,
          isActive: true,
        })
        .exec();
      return {
        pageCount,

        ads: await this.model
          .find({
            typeAd,
            vineyardName,
            isActive: true,
          })
          .skip(offset)
          .limit(limit)
          .sort(sortQuery)
          .lean()
          .exec(),
      };
    }
    if (wineName) {
      const pageCount = await this.model
        .countDocuments({
          typeAd,
          wineName,
          isActive: true,
        })
        .exec();
      return {
        pageCount,

        ads: await this.model
          .find({
            typeAd,
            wineName,
            isActive: true,
          })
          .skip(offset)
          .limit(limit)
          .sort(sortQuery)
          .lean()
          .exec(),
      };
    }
    const pageCount = await this.model
      .countDocuments({
        typeAd,
        typeProduct,
        isActive: true,
      })
      .exec();
    return {
      pageCount,

      ads: await this.model
        .find({
          typeAd,
          typeProduct,
          isActive: true,
        })
        .skip(offset)
        .limit(limit)
        .sort(sortQuery)
        .lean()
        .exec(),
    };
  }

  async createAd(ad: AdInput): Promise<AdResponse> {
    const errors: Errors[] = [];
    // eslint-disable-next-line @typescript-eslint/await-thenable
    const { user } = this.context;
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
      harvest,
      abv,
      priceFrom,
      priceTo,
      needsFollowUp,
      ...restParams
    } = ad;
    let newAd = {
      typeAd,
      typeProduct,
      content,
      harvest,
      abv,
      priceFrom,
      priceTo,
      needsFollowUp,
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
    const createdAd = new this.model({
      _id: new Types.ObjectId(),
      ...newAd,
      postedBy: _id,
    });

    try {
      await createdAd.save();
    } catch (e) {
      errors.push({ name: 'General Error', text: e.message });
      return {
        response: null,
        errors,
      };
      // throw new UserInputError(e.message);
    }
    let countDeliveryTries = 0;
    const followUpUsersToNotify: FollowUp[] = [];
    const SellOrBuy = createdAd.typeAd === TypeAd.SELL ? TypeAd.BUY : TypeAd.SELL;
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
    adsToFollow.map((a) => followUpUsersToNotify.push({
      userId: a.postedBy._id.toHexString(),
      userMail: a.postedBy.email,
      adId: a._id.toHexString(),
    }));
    const mailBody = {
      subject: 'New Ad',
      body: {
        intro: `It looks like there is a new ad that might interest you, here's the link ${createdAd._id}`,
      },
    };
    const recipients = followUpUsersToNotify
      .filter((userFollowUp) => userFollowUp.userMail !== user.email)
      .map((u) => u.userMail);
    const uniqueRecipients = [...new Set(recipients)];
    const uniqueUsersToNotifiy = [
      ...new Set(
        followUpUsersToNotify
          .map((u) => u.userId.toString())
          .filter((u) => u !== user._id.toString()),
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
    const { user } = this.context;
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
    const { user } = this.context;
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
