"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolver = void 0;
exports.resolver = {
    Query: {
        async wines(_, __, { dataSources }) {
            return dataSources.wines.getWines();
        },
        async wine(_, { id }, { dataSources }) {
            return dataSources.wines.getWine(id);
        },
    },
    Mutation: {
        async createWine(_, { wine }, { dataSources }) {
            return dataSources.wines.createWine(wine);
        },
        async updateWine(_, { wine }, { dataSources }) {
            return dataSources.wines.updateWine(wine);
        },
        async deleteWine(_, { id }, { dataSources }) {
            return dataSources.wines.deleteWine(id);
        },
    },
};
