/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { MongoDataSource } from 'apollo-datasource-mongodb';
import { Errors } from '../types';
import { IWineDoc, WineGraphQl } from '../models/wine';
import { UserGraphQl } from '../models/user';
import { WineInput, WineInputUpdate } from '../generated/graphql';

interface Context {
  user: UserGraphQl;
  createToken(user: UserGraphQl): string;
}

interface Response {
  response: IWineDoc | WineGraphQl | null;
  errors: Errors[];
}

export default class Wines extends MongoDataSource<IWineDoc, Context> {
  async getWineByName(
    wineName: string | undefined
  ): Promise<WineGraphQl | null> {
    //return this.model.findById(ad.postedBy).lean().exec();
    return this.model.findOne({ denominazioneVino: wineName }).lean().exec();
  }
  async getWine(id: string): Promise<IWineDoc | null | undefined> {
    return this.findOneById(id);
  }
  async getWines(): Promise<WineGraphQl[]> {
    return this.model.find({}).lean().exec();
  }

  async createWine(wine: WineInput): Promise<Response> {
    const errors: Errors[] = [];
    const createdWine = new this.model(wine);
    try {
      await createdWine.save();
    } catch (e) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      errors.push({ name: 'General Error', text: e.message });
      return {
        response: null,
        errors,
      };
    }
    return {
      response: createdWine,
      errors,
    };
  }

  async updateWine(wine: WineInputUpdate): Promise<Response> {
    const errors: Errors[] = [];
    const updatedWine = await this.model.findByIdAndUpdate(wine._id, wine, {
      new: true,
    });
    if (!updatedWine) {
      errors.push({
        name: 'General error',
        text: 'Errors during the wine update',
      });
      return {
        response: null,
        errors,
      };
    }
    return {
      response: updatedWine,
      errors,
    };
  }

  async deleteWine(wineId: string): Promise<Response> {
    const errors: Errors[] = [];
    const deletedWine = await this.model
      .findByIdAndDelete(wineId)
      .lean()
      .exec();
    if (!deletedWine) {
      errors.push({
        name: 'General error',
        text: 'Errors during the wine delete',
      });
      return {
        response: null,
        errors,
      };
    }
    return {
      response: deletedWine,
      errors,
    };
  }
}
