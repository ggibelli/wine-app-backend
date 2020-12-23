/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { MongoDataSource } from 'apollo-datasource-mongodb';
import { VineyardInput, VineyardInputUpdate } from '../generated/graphql';

//import { WineInput } from '../generated/graphql';
import { Errors } from '../types';
import { UserGraphQl } from '../models/user';
import { IVineyardDoc, VineyardGraphQl } from '../models/vineyard';

interface Context {
  user: UserGraphQl;
  createToken(user: UserGraphQl): string;
}

interface Response {
  response: IVineyardDoc | VineyardGraphQl | null;
  errors: Errors[];
}

export default class Vineyards extends MongoDataSource<IVineyardDoc, Context> {
  async getVineyardByName(
    vineyardName: string | undefined
  ): Promise<VineyardGraphQl | null> {
    //return this.model.findById(ad.postedBy).lean().exec();
    return this.model.findOne({ name: vineyardName }).lean().exec();
  }

  async getVineyard(id: string): Promise<IVineyardDoc | null | undefined> {
    return this.findOneById(id);
  }

  getVineyards(): Promise<VineyardGraphQl[] | null> {
    return this.model.find({}).lean().exec();
  }

  async createVineyard(vineyard: VineyardInput): Promise<Response> {
    const errors: Errors[] = [];
    const createdVineyard = new this.model(vineyard);
    try {
      await createdVineyard.save();
    } catch (e) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      errors.push({ name: 'General Error', text: e.message });
      return {
        response: null,
        errors,
      };
    }
    return {
      response: createdVineyard,
      errors,
    };
  }

  async updateVineyard(vineyard: VineyardInputUpdate): Promise<Response> {
    const errors: Errors[] = [];
    const updatedVineyard = await this.model.findByIdAndUpdate(
      vineyard._id,
      vineyard,
      {
        new: true,
      }
    );
    if (!updatedVineyard) {
      errors.push({
        name: 'General error',
        text: 'Error during the vineyard update',
      });
      return {
        response: null,
        errors,
      };
    }
    return {
      response: updatedVineyard,
      errors,
    };
  }

  async deleteVineyard(vineyardId: string): Promise<Response> {
    const errors: Errors[] = [];
    const deletedVineyard = await this.model
      .findByIdAndDelete(vineyardId)
      .lean()
      .exec();
    if (!deletedVineyard) {
      errors.push({
        name: 'General error',
        text: 'Error during the vineyard delete',
      });
      return {
        response: null,
        errors,
      };
    }
    return {
      response: deletedVineyard,
      errors,
    };
  }
}
