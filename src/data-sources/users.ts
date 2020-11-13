import { MongoDataSource } from 'apollo-datasource-mongodb';
import { ObjectId } from 'mongodb';
import { IUserDoc } from '../models/user';

export default class Users extends MongoDataSource<IUserDoc> {
  getUser(userId: ObjectId) {
    return this.findOneById(userId);
  }
  getUsers() {
    return this.collection.find().toArray();
  }
}
