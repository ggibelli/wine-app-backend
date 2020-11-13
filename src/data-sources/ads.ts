import { MongoDataSource } from 'apollo-datasource-mongodb';
import { IAdDoc } from '../models/ad';
import { TypeProduct } from '../types';
import {
  AdInputWine,
  QueryAdsVineyardArgs,
  QueryAdsWineArgs,
} from '../generated/graphql';

export default class Ads extends MongoDataSource<IAdDoc> {
  getAd(adId: string) {
    return this.findOneById(adId);
  }

  getAdsWine(args: QueryAdsWineArgs) {
    return this.collection.find({}).toArray();
  }

  getAdsVineyard(args: QueryAdsVineyardArgs) {
    return this.collection
      .find({
        typeProduct: TypeProduct.ADGRAPE,
        vineyardName: args.vineyardName,
      })
      .toArray();
  }

  createAdWine(adWine: AdInputWine) {
    this.collection.insertOne(adWine);
    return adWine;
  }
}
