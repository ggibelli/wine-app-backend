import { MongoDataSource } from 'apollo-datasource-mongodb';
import { CronJob } from 'cron';
import { UserInputError } from 'apollo-server-express';
import { LeanDocument, Types } from 'mongoose';

import { Errors, QueryOrderBy } from '../types';
import {
  PopulatedDocument,
  ReviewDocument,
  UserDocument,
} from '../interfaces/mongoose.gen';
import {
  QueryReviewsArgs,
  ReviewInput,
  ReviewInputUpdate,
  ReviewResult,
  UserReviewsArgs,
} from '../generated/graphql';
import { sendMail } from '../utils/mailServer';
import { loggerError } from '../utils/logger';
import { sortQueryHelper } from './ads';

interface Context {
  user: LeanDocument<UserDocument>;
  createToken(user: LeanDocument<UserDocument>): string;
}

interface Response {
  response: ReviewDocument | LeanDocument<ReviewDocument> | null;
  errors: Errors[];
}

export default class Reviews extends MongoDataSource<ReviewDocument, Context> {
  async getReview(id: string): Promise<ReviewDocument | null | undefined> {
    return this.findOneById(id);
  }

  async getReviewForUser(): Promise<LeanDocument<ReviewDocument>[]> {
    const userCtx = this.context.user;
    return this.model
      .find({
        $or: [{ createdBy: userCtx._id }, { forUser: userCtx._id }],
      })
      .lean()
      .exec();
  }

  async getReviewForNegotiation(
    id: string,
  ): Promise<LeanDocument<ReviewDocument>[]> {
    return this.model
      .find({
        negotiation: id,
      })
      .lean()
      .exec();
  }

  async getReviews({
    limit = 10,
    offset = 0,
    orderBy = QueryOrderBy.CreatedAtDESC,
  }: UserReviewsArgs | QueryReviewsArgs): Promise<ReviewResult> {
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
        reviews: await this.model
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
        $or: [{ createdBy: userCtx._id }, { forUser: userCtx._id }],
      })
      .exec();
    return {
      reviews: await this.model
        .find({
          $or: [{ createdBy: userCtx._id }, { forUser: userCtx._id }],
        })
        .sort(sortQuery)
        .skip(offset)
        .limit(limit)
        .lean()
        .exec(),
      pageCount,
    };
  }

  async createReview(review: ReviewInput): Promise<Response> {
    const userCtx = this.context.user;
    const errors: Errors[] = [];
    const createdReview = new this.model({
      _id: new Types.ObjectId(),

      ...review,
      createdBy: userCtx,
    });
    if (
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      createdReview.forUser.toString() === userCtx._id.toHexString()
    ) {
      errors.push({
        name: 'General Error',
        text: 'You cannot review yourself',
      });
      return {
        response: null,
        errors,
      };
    }
    try {
      await createdReview.save();
    } catch (e) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      errors.push({ name: 'General Error', text: e.message });
      return {
        response: null,
        errors,
      };
    }
    const mailBody = {
      subject: 'New Review',
      body: {
        intro: `User ${userCtx.firstName} wrote a review. \n
          for your negotiation,click on the <a href="${createdReview._id}">link</a> to see it`,
      },
    };
    let countDeliveryTries = 0;
    const jobMail = new CronJob('*/1 * * * *', () => {
      const recipient: string[] = [];
      function safePush(r: PopulatedDocument<ReviewDocument, 'forUser'>) {
        recipient.push(r.forUser.email);
      }
      if (countDeliveryTries >= 2) {
        jobMail.stop();
        return;
      }
      createdReview
        .populate({ path: 'forUser', select: 'email' })
        .execPopulate()
        .then((r) => safePush(r as PopulatedDocument<ReviewDocument, 'forUser'>))
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
      response: createdReview,
      errors,
    };
  }

  async updateReview(review: ReviewInputUpdate): Promise<Response> {
    const userCtx = this.context.user;

    const errors: Errors[] = [];
    const updatedReview = await this.model.findOneAndUpdate(
      { createdBy: userCtx._id.toHexString(), _id: review._id },
      review,
      {
        new: true,
      },
    );
    if (!updatedReview) {
      errors.push({
        name: 'General error',
        text: 'Errors during the review update, only creator can update review',
      });
      return {
        response: null,
        errors,
      };
    }
    return {
      response: updatedReview,
      errors,
    };
  }

  async deleteReview(reviewId: string): Promise<Response> {
    const userCtx = this.context.user;

    const errors: Errors[] = [];
    const deletedReview = await this.model
      .findOneAndDelete({ _id: reviewId, createdBy: userCtx._id.toHexString() })
      .lean()
      .exec();
    if (!deletedReview) {
      errors.push({
        name: 'General error',
        text: 'Errors during the review delete, only creator can delete review',
      });
      return {
        response: null,
        errors,
      };
    }
    return {
      response: deletedReview,
      errors,
    };
  }
}
