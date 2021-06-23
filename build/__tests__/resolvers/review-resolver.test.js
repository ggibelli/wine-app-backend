"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const mockPublish = jest.fn();
const mongoose_1 = require("mongoose");
const resolvers_1 = __importDefault(require("../../resolvers"));
jest.mock('apollo-server-express', () => ({
    PubSub: jest.fn(() => ({
        publish: mockPublish,
    })),
    withFilter: jest.fn(),
}));
const mockContext = {
    dataSources: {
        ads: {
            getAd: jest.fn(),
            getAds: jest.fn(),
            createAd: jest.fn(),
            updateAd: jest.fn(),
            deleteAd: jest.fn(),
        },
        users: {
            getUser: jest.fn(),
        },
        negotiations: {
            getNegotiationsForUser: jest.fn(),
            getNegotiationsForAd: jest.fn(),
            getNegotiations: jest.fn(),
            getNegotiation: jest.fn(),
            createNegotiation: jest.fn(),
            deleteNegotiation: jest.fn(),
            deleteMany: jest.fn(),
            updateNegotiation: jest.fn(),
        },
        reviews: {
            getReviews: jest.fn(),
            getReview: jest.fn(),
            createReview: jest.fn(),
            updateReview: jest.fn(),
            deleteReview: jest.fn(),
        },
        vineyards: {
            getVineyards: jest.fn(),
            getVineyard: jest.fn(),
            getVineyardByName: jest.fn(),
        },
        wines: {
            getWines: jest.fn(),
            getWine: jest.fn(),
            getWineByName: jest.fn(),
        },
        messages: {
            getMessagesForNegotiation: jest.fn(),
            messageAdmin: jest.fn(),
        },
    },
    user: { id: 1, email: 'a@a.a' },
};
const { getNegotiation } = mockContext.dataSources.negotiations;
const { getUser } = mockContext.dataSources.users;
const { getReviews } = mockContext.dataSources.reviews;
const { getReview } = mockContext.dataSources.reviews;
const { createReview } = mockContext.dataSources.reviews;
const { updateReview } = mockContext.dataSources.reviews;
const { deleteReview } = mockContext.dataSources.reviews;
const { messageAdmin } = mockContext.dataSources.messages;
describe('Review resolvers', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    it('reviews calls getReviews from dataSource', async () => {
        getReviews.mockReturnValueOnce([
            {
                _id: '122',
                rating: 'Good',
                forUser: '123',
                createdBy: '321',
                negotiation: '322',
            },
        ]);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const res = await resolvers_1.default.Query?.reviews(null, null, mockContext);
        expect(res).toEqual([
            {
                _id: '122',
                rating: 'Good',
                forUser: '123',
                createdBy: '321',
                negotiation: '322',
            },
        ]);
    });
    it('review calls getReview from dataSource', async () => {
        getReview.mockReturnValueOnce({
            _id: '122',
            rating: 'Good',
            forUser: '123',
            createdBy: '321',
            negotiation: '322',
        });
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const res = await resolvers_1.default.Query?.review(null, { id: '123' }, mockContext);
        expect(res).toEqual({
            _id: '122',
            rating: 'Good',
            forUser: '123',
            createdBy: '321',
            negotiation: '322',
        });
    });
    it('createReview succeeds and calls datasource and subscription', async () => {
        createReview.mockReturnValueOnce({
            response: {
                _id: '507f1f77bcf86cd799439011',
                rating: '3',
                forUser: '123',
                createdBy: '507f1f77bcf86cd799439012',
                negotiation: '322',
                content: 'nice',
            },
            errors: [],
        });
        // @ts-ignore
        const res = await resolvers_1.default.Mutation?.createReview(null, {
            review: {
                rating: '3',
                forUser: '123',
                negotiation: '322',
                content: 'nice',
            },
        }, mockContext);
        expect(messageAdmin).toHaveBeenCalledWith(['123'], 'Hanno scritto di te nice');
        expect(mockPublish).toHaveBeenCalledTimes(1);
        expect(mockPublish).toHaveBeenCalledWith('REVIEW_CREATED', {
            reviewCreated: {
                _id: '507f1f77bcf86cd799439011',
                rating: '3',
                forUser: '123',
                createdBy: '507f1f77bcf86cd799439012',
                negotiation: '322',
                content: 'nice',
            },
        });
        expect(res).toStrictEqual({
            errors: [],
            response: {
                _id: '507f1f77bcf86cd799439011',
                rating: '3',
                forUser: '123',
                createdBy: '507f1f77bcf86cd799439012',
                negotiation: '322',
                content: 'nice',
            },
        });
    });
    it('createReview fails subscription not called', async () => {
        createReview.mockReturnValueOnce({
            response: null,
            errors: [{ name: 'error', text: 'error' }],
        });
        // @ts-ignore
        const res = await resolvers_1.default.Mutation?.createReview(null, {
            rating: 'Good',
            forUser: '123',
            negotiation: '322',
        }, mockContext);
        expect(mockPublish).toHaveBeenCalledTimes(0);
        expect(res).toEqual({
            response: null,
            errors: [{ name: 'error', text: 'error' }],
        });
    });
    // Negotiation update mutation test
    it('update review succeds', async () => {
        updateReview.mockReturnValueOnce({
            response: {
                _id: '122',
                rating: 'Poor',
                forUser: '123',
                createdBy: '321',
                negotiation: '322',
            },
            errors: [],
        });
        // @ts-ignore
        const res = await resolvers_1.default.Mutation?.updateReview(null, {
            _id: '122',
            rating: 'Poor',
            forUser: '123',
            negotiation: '322',
        }, mockContext);
        expect(res).toEqual({
            response: {
                _id: '122',
                rating: 'Poor',
                forUser: '123',
                createdBy: '321',
                negotiation: '322',
            },
            errors: [],
        });
    });
    it('delete review calls datasource', async () => {
        deleteReview.mockReturnValueOnce({
            response: {
                _id: '122',
                rating: 'Poor',
                forUser: '123',
                createdBy: '321',
                negotiation: '322',
            },
            errors: [],
        });
        // @ts-ignore
        const res = await resolvers_1.default.Mutation?.deleteReview(null, {
            _id: '122',
        }, mockContext);
        expect(res).toEqual({
            response: {
                _id: '122',
                rating: 'Poor',
                forUser: '123',
                createdBy: '321',
                negotiation: '322',
            },
            errors: [],
        });
    });
    it('Review createdBy calls getUser', async () => {
        getUser.mockReturnValueOnce({ id: 1 });
        // @ts-ignore
        const res = await resolvers_1.default.Review?.createdBy({ createdBy: new mongoose_1.Types.ObjectId('507f1f77bcf86cd799439012') }, null, mockContext);
        expect(res).toEqual({ id: 1 });
    });
    it('Review negotiation calls getNegotiation', async () => {
        getNegotiation.mockReturnValueOnce({
            _id: '122',
            typeAd: 'SELL',
            forUserAd: '123',
            createdBy: '321',
            ad: '322',
        });
        // @ts-ignore
        const res = await resolvers_1.default.Review?.negotiation({
            ad: '322',
            negotiation: new mongoose_1.Types.ObjectId('507f1f77bcf86cd799439013'),
        }, null, mockContext);
        expect(res).toEqual({
            _id: '122',
            typeAd: 'SELL',
            forUserAd: '123',
            createdBy: '321',
            ad: '322',
        });
    });
    it('Review forUser calls getUser', async () => {
        getUser.mockReturnValueOnce({ id: 1 });
        // @ts-ignore
        const res = await resolvers_1.default.Review?.forUser({ forUser: new mongoose_1.Types.ObjectId('507f1f77bcf86cd799439011') }, null, mockContext);
        expect(res).toEqual({ id: 1 });
    });
});
