import { MongoDataSource } from 'apollo-datasource-mongodb';
import { LeanDocument, Types } from 'mongoose';
import { VineyardInput, VineyardInputUpdate } from '../generated/graphql';

// import { WineInput } from '../generated/graphql';
import { Errors } from '../types';
import { VineyardDocument, UserDocument } from '../interfaces/mongoose.gen';

interface Context {
  user: LeanDocument<UserDocument>;
  createToken(user: LeanDocument<UserDocument>): string;
}

interface Response {
  response: VineyardDocument | LeanDocument<VineyardDocument> | null;
  errors: Errors[];
}

export default class Vineyards extends MongoDataSource<
VineyardDocument,
Context
> {
  async getVineyardByName(
    vineyardName: string | undefined,
  ): Promise<LeanDocument<VineyardDocument> | null> {
    // return this.model.findById(ad.postedBy).lean().exec();
    return this.model.findOne({ name: vineyardName }).lean().exec();
  }

  async getVineyard(id: string): Promise<VineyardDocument | null | undefined> {
    return this.findOneById(id);
  }

  getVineyards(): Promise<LeanDocument<VineyardDocument>[] | null> {
    return this.model.find({}).lean().exec();
  }

  async createVineyard(vineyard: VineyardInput): Promise<Response> {
    const errors: Errors[] = [];
    const createdVineyard = new this.model({
      _id: new Types.ObjectId(),

      ...vineyard,
    });
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
      },
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
