"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resolver = {
    Query: {
        async vineyards(_, __, { dataSources }) {
            return dataSources.vineyards.getVineyards();
        },
        async vineyard(_, { id }, { dataSources }) {
            return dataSources.vineyards.getVineyard(id);
        },
    },
    Mutation: {
        async createVineyard(_, { vineyard }, { dataSources }) {
            return dataSources.vineyards.createVineyard(vineyard);
        },
        async updateVineyard(_, { vineyard }, { dataSources }) {
            return dataSources.vineyards.updateVineyard(vineyard);
        },
        async deleteVineyard(_, { id }, { dataSources }) {
            return dataSources.vineyards.deleteVineyard(id);
        },
    },
};
exports.default = resolver;
