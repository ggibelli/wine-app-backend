/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { MongoDataSource } from 'apollo-datasource-mongodb';
import { Errors, QueryOrderBy } from '../types';
import { INegotiationDoc, NegotiationGraphQl } from '../models/negotiation';
import { UserGraphQl } from '../models/user';
import {
  Negotiation,
  NegotiationInput,
  NegotiationInputUpdate,
  NegotiationResult,
  UserNegotiationsArgs,
} from '../generated/graphql';
import { sendMail } from '../utils/mailServer';
import { CronJob } from 'cron';
import { loggerError } from '../utils/logger';
import { ObjectId } from 'mongodb';
import { UserInputError } from 'apollo-server-express';
import { sortQueryHelper } from './ads';

interface Context {
  user: UserGraphQl;
  createToken(user: UserGraphQl): string;
}

interface Response {
  response: INegotiationDoc | NegotiationGraphQl | null;
  errors: Errors[];
}

export default class Negotiations extends MongoDataSource<
  INegotiationDoc,
  Context
> {
  async getNegotiation(
    id: string
  ): Promise<INegotiationDoc | null | undefined> {
    return this.findOneById(id);
  }
  async getNegotiations({
    limit = 100,
    offset = 0,
    orderBy = QueryOrderBy.createdAt_DESC,
  }: UserNegotiationsArgs): Promise<NegotiationResult> {
    const userCtx = this.context.user;
    const LIMIT_MAX = 100;
    if (limit < 1 || offset < 0 || limit > LIMIT_MAX) {
      throw new UserInputError(
        `${limit} must be greater than 1 and less than 100 ${offset} must be positive `
      );
    }
    const sortQuery = sortQueryHelper(orderBy);
    if (userCtx.isAdmin) {
      const pageCount = await this.model.countDocuments().exec();
      return {
        negotiations: (this.model
          .find({})
          .sort(sortQuery)
          .skip(offset)
          .limit(limit)
          .lean()
          .exec() as unknown) as Negotiation[],
        pageCount,
      };
    }

    await this.collection.createIndex({ createdBy: 1 });
    await this.collection.createIndex({ forUserAd: 1 });
    const pageCount = await this.model
      .countDocuments({
        $or: [{ createdBy: userCtx._id }, { forUserAd: userCtx._id }],
      })
      .exec();
    return {
      negotiations: (this.model
        .find({
          $or: [{ createdBy: userCtx._id }, { forUserAd: userCtx._id }],
        })
        .lean()
        .sort(sortQuery)
        .skip(offset)
        .limit(limit)
        .exec() as unknown) as Negotiation[],
      pageCount,
    };
  }

  async getNegotiationsForUser(forUser: string): Promise<NegotiationGraphQl[]> {
    const userCtx = this.context.user;

    return this.model
      .find({
        createdBy: userCtx._id,
        forUserAd: forUser,
      })
      .lean()
      .exec();
  }

  async getNegotiationsForAd(
    ad: ObjectId | string
  ): Promise<NegotiationGraphQl[]> {
    return this.model
      .find({
        ad: ad,
      })
      .lean()
      .exec();
  }

  async negotiationsActive(id: string): Promise<number> {
    return this.model.countDocuments({ ad: id, isConcluded: false });
  }

  async createNegotiation(negotiation: NegotiationInput): Promise<Response> {
    const userCtx = this.context.user;
    const errors: Errors[] = [];
    const createdNegotiation = new this.model({
      ...negotiation,
      createdBy: userCtx,
    });
    const populatedNegotiation = await createdNegotiation
      .populate({ path: 'forUserAd', select: 'isVerified' })
      .execPopulate();
    if (!userCtx.isVerified || !populatedNegotiation.forUserAd.isVerified) {
      errors.push({
        name: 'AuthorizationError',
        text: 'You need to verify your account',
      });
      return {
        response: null,
        errors,
      };
    }
    try {
      await createdNegotiation.save();
    } catch (e) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      errors.push({ name: 'General Error', text: e.message });
      return {
        response: null,
        errors,
      };
    }
    const mailBody = {
      subject: 'New Negotiation',
      body: {
        intro: `User ${userCtx.firstName} opened a negotiation. \n
          for your ad,click on the <a href="${createdNegotiation.ad}">link</a> to see it`,
      },
    };
    let countDeliveryTries = 0;
    const jobMail = new CronJob('*/1 * * * *', () => {
      const recipient: string[] = [];
      if (countDeliveryTries >= 2) {
        jobMail.stop();
        return;
      }
      createdNegotiation
        .populate({ path: 'forUserAd', select: 'email' })
        .execPopulate()
        .then((negotiation) => {
          recipient.push(negotiation.forUserAd.email);
        })
        .catch((e) => {
          loggerError(e);
        });
      sendMail(mailBody, recipient)
        .then(() => {
          jobMail.stop();
        })
        .catch((e) => {
          loggerError(e);
          countDeliveryTries += 1;
        });
    });
    jobMail.start();
    return {
      response: createdNegotiation,
      errors,
    };
  }

  async updateNegotiation(
    negotiation: NegotiationInputUpdate
  ): Promise<Response> {
    const userCtx = this.context.user;
    const errors: Errors[] = [];
    const updatedNegotiation = await this.model.findOneAndUpdate(
      {
        $or: [{ createdBy: userCtx }, { forUserAd: userCtx }],
        $and: [{ _id: negotiation._id }],
      },
      negotiation,
      {
        new: true,
      }
    );
    if (!updatedNegotiation) {
      errors.push({
        name: 'General error',
        text:
          'Errors during the negotiation update, only creator can update negotiation',
      });
      return {
        response: null,
        errors,
      };
    }
    return {
      response: updatedNegotiation,
      errors,
    };
  }

  async deleteNegotiation(negotiationId: string): Promise<Response> {
    const userCtx = this.context.user;
    const errors: Errors[] = [];
    const deletedNegotiation = await this.model
      .findOneAndDelete({ _id: negotiationId, createdBy: userCtx })
      .lean()
      .exec();
    if (!deletedNegotiation) {
      errors.push({
        name: 'General error',
        text:
          'Errors during the negotiation delete, only creator can delete negotiation',
      });
      return {
        response: null,
        errors,
      };
    }
    return {
      response: deletedNegotiation,
      errors,
    };
  }

  async deleteMany(adId: ObjectId): Promise<void> {
    try {
      await this.model.deleteMany({ ad: adId });
    } catch (e) {
      throw new Error('Error during delete many');
    }
  }
}
