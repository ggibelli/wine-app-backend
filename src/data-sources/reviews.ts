/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { MongoDataSource } from 'apollo-datasource-mongodb';
import { Errors } from '../types';
import { IReviewDoc, ReviewGraphQl } from '../models/review';
import { UserGraphQl } from '../models/user';
import { ReviewInput, ReviewInputUpdate } from '../generated/graphql';
import { sendMail } from '../utils/mailServer';
import { CronJob } from 'cron';
import { loggerError } from '../utils/logger';

interface Context {
  user: UserGraphQl;
  createToken(user: UserGraphQl): string;
}

interface Response {
  response: IReviewDoc | ReviewGraphQl | null;
  errors: Errors[];
}

export default class Reviews extends MongoDataSource<IReviewDoc, Context> {
  async getReview(id: string): Promise<IReviewDoc | null | undefined> {
    return this.findOneById(id);
  }
  async getReviews(): Promise<ReviewGraphQl[]> {
    const userCtx = this.context.user;
    if (userCtx.isAdmin) {
      return this.model.find({}).lean().exec();
    }
    await this.collection.createIndex({ createdBy: 1 });
    await this.collection.createIndex({ forUser: 1 });
    return this.model
      .find({
        $or: [{ createdBy: userCtx._id }, { forUser: userCtx._id }],
      })
      .lean()
      .exec();
  }

  async createReview(review: ReviewInput): Promise<Response> {
    const userCtx = this.context.user;
    const errors: Errors[] = [];
    const createdReview = new this.model({
      ...review,
      createdBy: userCtx,
    });
    if (
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      createdReview.forUser.toString() == userCtx._id.toHexString()
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
      if (countDeliveryTries >= 2) {
        jobMail.stop();
        return;
      }
      createdReview
        .populate({ path: 'forUser', select: 'email' })
        .execPopulate()
        .then((review) => {
          recipient.push(review.forUser.email);
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
      response: createdReview,
      errors,
    };
  }

  async updateReview(review: ReviewInputUpdate): Promise<Response> {
    const userCtx = this.context.user;

    const errors: Errors[] = [];
    const updatedReview = await this.model.findOneAndUpdate(
      { createdBy: userCtx, _id: review._id },
      review,
      {
        new: true,
      }
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
      .findOneAndDelete({ _id: reviewId, createdBy: userCtx })
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
