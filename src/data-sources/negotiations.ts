import { MongoDataSource } from 'apollo-datasource-mongodb';
import { CronJob } from 'cron';
import { UserInputError } from 'apollo-server-express';
import { LeanDocument, Types } from 'mongoose';
import { Errors } from '../types';
import {
  NegotiationDocument,
  PopulatedDocument,
  UserDocument,
} from '../interfaces/mongoose.gen';
import {
  NegotiationInput,
  NegotiationInputUpdate,
  NegotiationResult,
  QueryNegotiationsArgs,
  QueryOrderBy,
} from '../generated/graphql';
import { sendMail } from '../utils/mailServer';
import { loggerError } from '../utils/logger';
import { sortQueryHelper } from './ads';

interface Context {
  user: LeanDocument<UserDocument>;
  createToken(user: LeanDocument<UserDocument>): string;
}

interface Response {
  response: NegotiationDocument | LeanDocument<NegotiationDocument> | null;
  errors: Errors[];
}

interface NegotiationInputAndDate extends NegotiationInputUpdate {
  dateConcluded?: Date;
}

export default class Negotiations extends MongoDataSource<
NegotiationDocument,
Context
> {
  async getNegotiation(
    id: string,
  ): Promise<NegotiationDocument | null | undefined> {
    return this.findOneById(id);
  }

  async getNegotiationsForUserType(): Promise<
  LeanDocument<NegotiationDocument>[]
  > {
    const userCtx = this.context.user;
    return this.model
      .find({
        $or: [{ createdBy: userCtx._id }, { forUserAd: userCtx._id }],
      })
      .lean()
      .exec();
  }

  async getNegotiations({
    limit = 100,
    offset = 0,
    orderBy = QueryOrderBy.CreatedAtDESC,
    isConcluded = false,
  }: QueryNegotiationsArgs): Promise<NegotiationResult> {
    const userCtx = this.context.user;
    const LIMIT_MAX = 100;
    if (limit < 1 || offset < 0 || limit > LIMIT_MAX) {
      throw new UserInputError(
        `${limit} must be greater than 1 and less than 100 ${offset} must be positive `,
      );
    }
    const sortQuery = sortQueryHelper(orderBy);
    if (userCtx.isAdmin) {
      const pageCount = await this.model.countDocuments().exec();
      return {
        negotiations: await this.model
          .find({})
          .sort(sortQuery)
          .skip(offset)
          .limit(limit)
          .lean()
          .exec(),
        pageCount,
      };
    }

    const pageCount = await this.model
      .countDocuments({
        $or: [{ createdBy: userCtx._id }, { forUserAd: userCtx._id }],
        $and: [{ isConcluded }],
      })
      .exec();
    return {
      negotiations: await this.model
        .find({
          $or: [{ createdBy: userCtx._id }, { forUserAd: userCtx._id }],
          $and: [{ isConcluded }],
        })
        .lean()
        .sort(sortQuery)
        .skip(offset)
        .limit(limit)
        .exec(),
      pageCount,
    };
  }

  async getNegotiationsForUser(
    forUser: string,
  ): Promise<LeanDocument<NegotiationDocument>[]> {
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
    ad: Types.ObjectId | string,
  ): Promise<LeanDocument<NegotiationDocument>[]> {
    return this.model
      .find({
        ad,
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
    if (!userCtx.isVerified) {
      errors.push({
        name: 'AuthorizationError',
        text: 'You need to verify your account',
      });
      return {
        response: null,
        errors,
      };
    }
    const createdNegotiation = new this.model({
      _id: new Types.ObjectId(),
      ...negotiation,
      createdBy: userCtx,
    });

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
      function safePush(
        n: PopulatedDocument<NegotiationDocument, 'forUserAd'>,
      ) {
        recipient.push(n.forUserAd.email);
      }
      if (countDeliveryTries >= 2) {
        jobMail.stop();
        return;
      }
      createdNegotiation
        .populate({ path: 'forUserAd', select: 'email' })
        .execPopulate()
        .then((n) => safePush(n as PopulatedDocument<NegotiationDocument, 'forUserAd'>))
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
    negotiation: NegotiationInputAndDate,
  ): Promise<Response> {
    const userCtx = this.context.user;
    const errors: Errors[] = [];
    if (negotiation.isConcluded) {
      negotiation.dateConcluded = new Date(Date.now());
    }
    const updatedNegotiation = await this.model
      .findOneAndUpdate(
        {
          $or: [{ createdBy: userCtx._id }, { forUserAd: userCtx._id }],
          $and: [{ _id: negotiation._id }],
        },
        negotiation,
        {
          new: true,
        },
      )
      .lean()
      .exec();
    if (!updatedNegotiation) {
      errors.push({
        name: 'General error',
        text: 'Errors during the negotiation update, only creator can update negotiation',
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
      .findOneAndDelete({
        $or: [{ createdBy: userCtx._id }, { forUserAd: userCtx._id }],
        $and: [{ _id: negotiationId }],
      })
      .lean()
      .exec();
    if (!deletedNegotiation) {
      errors.push({
        name: 'General error',
        text: 'Errors during the negotiation delete, only creator can delete negotiation',
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

  async deleteMany(adId: Types.ObjectId): Promise<void> {
    try {
      await this.model.deleteMany({ ad: adId });
    } catch (e) {
      throw new Error('Error during delete many');
    }
  }
}
