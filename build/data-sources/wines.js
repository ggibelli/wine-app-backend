"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_datasource_mongodb_1 = require("apollo-datasource-mongodb");
const mongoose_1 = require("mongoose");
class Wines extends apollo_datasource_mongodb_1.MongoDataSource {
    async getWineByName(wineName) {
        // return this.model.findById(ad.postedBy).lean().exec();
        return this.model.findOne({ denominazioneVino: wineName }).lean().exec();
    }
    async getWine(id) {
        return this.findOneById(id);
    }
    async getWines() {
        return this.model.find({}).lean().exec();
    }
    async createWine(wine) {
        const errors = [];
        const createdWine = new this.model({ _id: new mongoose_1.Types.ObjectId(), ...wine });
        try {
            await createdWine.save();
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
            response: createdWine,
            errors,
        };
    }
    async updateWine(wine) {
        const errors = [];
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
    async deleteWine(wineId) {
        const errors = [];
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
exports.default = Wines;
