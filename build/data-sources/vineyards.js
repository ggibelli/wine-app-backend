"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
const apollo_datasource_mongodb_1 = require("apollo-datasource-mongodb");
class Vineyards extends apollo_datasource_mongodb_1.MongoDataSource {
    async getVineyardByName(vineyardName) {
        //return this.model.findById(ad.postedBy).lean().exec();
        return this.model.findOne({ name: vineyardName }).lean().exec();
    }
    async getVineyard(id) {
        return this.findOneById(id);
    }
    getVineyards() {
        return this.model.find({}).lean().exec();
    }
    async createVineyard(vineyard) {
        const errors = [];
        const createdVineyard = new this.model(vineyard);
        try {
            await createdVineyard.save();
        }
        catch (e) {
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
    async updateVineyard(vineyard) {
        const errors = [];
        const updatedVineyard = await this.model.findByIdAndUpdate(vineyard._id, vineyard, {
            new: true,
        });
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
    async deleteVineyard(vineyardId) {
        const errors = [];
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
exports.default = Vineyards;
