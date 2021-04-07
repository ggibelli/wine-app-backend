"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/ban-ts-comment */
const publish = jest.fn();
const filter = jest.fn();
jest.mock('apollo-server-express', () => ({
    PubSub: jest.fn(() => ({
        publish,
    })),
    withFilter: filter,
}));
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const resolvers_1 = __importDefault(require("../../resolvers"));
const mongodb_1 = require("mongodb");
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
        vineyards: {
            getVineyardByName: jest.fn(),
        },
        wines: {
            getWineByName: jest.fn(),
        },
        messages: {
            getMessagesForNegotiation: jest.fn(),
        },
    },
    user: { _id: '1', email: 'a@a.a' },
};
const { getAd } = mockContext.dataSources.ads;
const { getNegotiationsForUser } = mockContext.dataSources.negotiations;
const { getNegotiationsForAd } = mockContext.dataSources.negotiations;
const { getNegotiations } = mockContext.dataSources.negotiations;
const { getNegotiation } = mockContext.dataSources.negotiations;
const { createNegotiation } = mockContext.dataSources.negotiations;
const { deleteNegotiation } = mockContext.dataSources.negotiations;
const { updateNegotiation } = mockContext.dataSources.negotiations;
const { getUser } = mockContext.dataSources.users;
const { getMessagesForNegotiation } = mockContext.dataSources.messages;
describe('Negotiation resolvers', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    it('negotiationsWithUser calls getNegotiationsForUser from dataSource', async () => {
        getNegotiationsForUser.mockReturnValueOnce([
            {
                _id: '122',
                typeAd: 'SELL',
                forUserAd: '123',
                createdBy: '321',
                ad: '322',
            },
        ]);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const res = await resolvers_1.default.Query?.negotiationsWithUser(null, { forUserAd: '123' }, mockContext);
        expect(res).toEqual([
            {
                _id: '122',
                typeAd: 'SELL',
                forUserAd: '123',
                createdBy: '321',
                ad: '322',
            },
        ]);
    });
    it('negotiationsForAd calls getNegotiationsForAd from dataSource', async () => {
        getNegotiationsForAd.mockReturnValueOnce([
            {
                _id: '122',
                typeAd: 'SELL',
                forUserAd: '123',
                createdBy: '321',
                ad: '322',
            },
        ]);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const res = await resolvers_1.default.Query?.negotiationsForAd(null, { ad: '322' }, mockContext);
        expect(res).toEqual([
            {
                _id: '122',
                typeAd: 'SELL',
                forUserAd: '123',
                createdBy: '321',
                ad: '322',
            },
        ]);
    });
    it('negotiations calls getNegotiations from dataSource', async () => {
        getNegotiations.mockReturnValueOnce([
            {
                _id: '122',
                typeAd: 'SELL',
                forUserAd: '123',
                createdBy: '321',
                ad: '322',
            },
        ]);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const res = await resolvers_1.default.Query?.negotiations(null, null, mockContext);
        expect(res).toEqual([
            {
                _id: '122',
                typeAd: 'SELL',
                forUserAd: '123',
                createdBy: '321',
                ad: '322',
            },
        ]);
    });
    it('negotiation calls getNegotiation from dataSource', async () => {
        getNegotiation.mockReturnValueOnce({
            _id: '122',
            typeAd: 'SELL',
            forUserAd: '123',
            createdBy: '321',
            ad: '322',
        });
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const res = await resolvers_1.default.Query?.negotiation(null, { id: '123' }, mockContext);
        expect(res).toEqual({
            _id: '122',
            typeAd: 'SELL',
            forUserAd: '123',
            createdBy: '321',
            ad: '322',
        });
    });
    it('createNegotiation succeeds and calls datasource and subscription', async () => {
        createNegotiation.mockReturnValueOnce({
            response: {
                _id: '122',
                typeAd: 'SELL',
                forUserAd: '123',
                createdBy: '321',
                ad: '322',
            },
            errors: [],
        });
        //@ts-ignore
        const res = await resolvers_1.default.Mutation?.createNegotiation(null, {
            typeAd: 'SELL',
            forUserAd: '123',
            ad: '322',
        }, mockContext);
        expect(publish).toHaveBeenCalledTimes(1);
        expect(publish).toHaveBeenCalledWith('NEGOTIATION_CREATED', {
            negotiationCreated: {
                _id: '122',
                typeAd: 'SELL',
                forUserAd: '123',
                createdBy: '321',
                ad: '322',
            },
        });
        expect(res).toEqual({
            errors: [],
            response: {
                _id: '122',
                typeAd: 'SELL',
                forUserAd: '123',
                createdBy: '321',
                ad: '322',
            },
        });
    });
    it('createNegotiation fails subscription not called', async () => {
        createNegotiation.mockReturnValueOnce({
            response: null,
            errors: [{ name: 'error', text: 'error' }],
        });
        //@ts-ignore
        const res = await resolvers_1.default.Mutation?.createNegotiation(null, {
            typeAd: 'SELL',
            forUserAd: '123',
            ad: '322',
        }, mockContext);
        expect(publish).toHaveBeenCalledTimes(0);
        expect(res).toEqual({
            response: null,
            errors: [{ name: 'error', text: 'error' }],
        });
    });
    // Negotiation update mutation test
    it('update negotiation close succeds and subscription called', async () => {
        updateNegotiation.mockReturnValueOnce({
            response: {
                id: 1,
                typeAd: 'SELL',
                ad: 3,
                createdBy: 2,
                isConcluded: true,
            },
            errors: [],
        });
        getAd.mockReturnValueOnce({
            _id: new mongodb_1.ObjectId('5fdd925d9cc5800455e1855e'),
            typeAd: 'SELL',
            typeProduct: 'AdWine',
            wineName: 'wine',
            createdBy: 2,
        });
        getNegotiationsForAd.mockReturnValueOnce([
            {
                id: 3,
                createdBy: 4,
                forUserAd: 5,
            },
            { id: 5, createdBy: 7, forUserAd: 8 },
        ]);
        //@ts-ignore
        const res = await resolvers_1.default.Mutation?.updateNegotiation(null, {
            id: 1,
            isConcluded: true,
        }, mockContext);
        expect(publish).toHaveBeenCalledTimes(1);
        expect(publish).toHaveBeenCalledWith('NEGOTIATION_CLOSED', {
            negotiationClosed: {
                _id: new mongodb_1.ObjectId('5fdd925d9cc5800455e1855e'),
                typeAd: 'SELL',
                typeProduct: 'AdWine',
                wineName: 'wine',
                createdBy: 2,
            },
            usersToNotify: ['4', '5', '7', '8'],
            userToNotNotify: '1',
        });
        expect(res).toEqual({
            response: {
                id: 1,
                typeAd: 'SELL',
                ad: 3,
                createdBy: 2,
                isConcluded: true,
            },
            errors: [],
        });
    });
    it('update negotiation close fails and subscription not called', async () => {
        updateNegotiation.mockReturnValueOnce({
            response: null,
            errors: [{ name: 'error', text: 'text' }],
        });
        //@ts-ignore
        const res = await resolvers_1.default.Mutation?.updateNegotiation(null, {
            id: 1,
            isConcluded: true,
        }, mockContext);
        expect(publish).toHaveBeenCalledTimes(0);
        expect(getAd).toHaveBeenCalledTimes(0);
        expect(getNegotiationsForAd).toHaveBeenCalledTimes(0);
        expect(res).toEqual({
            response: null,
            errors: [{ name: 'error', text: 'text' }],
        });
    });
    // Negotiation update mutation test
    it('delete negotiation calls datasource', async () => {
        deleteNegotiation.mockReturnValueOnce({
            response: {
                id: 1,
                typeAd: 'SELL',
                ad: 3,
                createdBy: 2,
                isConcluded: true,
            },
            errors: [],
        });
        //@ts-ignore
        const res = await resolvers_1.default.Mutation?.deleteNegotiation(null, {
            id: 1,
        }, mockContext);
        expect(res).toEqual({
            response: {
                id: 1,
                typeAd: 'SELL',
                ad: 3,
                createdBy: 2,
                isConcluded: true,
            },
            errors: [],
        });
    });
    it('Negotiation createdBy calls getUser', async () => {
        getUser.mockReturnValueOnce({ id: 1 });
        //@ts-ignore
        const res = await resolvers_1.default.Negotiation?.createdBy({ postedBy: '123' }, null, mockContext);
        expect(res).toEqual({ id: 1 });
    });
    it('Negotiation ad calls getAd', async () => {
        getAd.mockReturnValueOnce({
            wineName: 'vino',
            typeAd: 'SELL',
            postedBy: '123',
        });
        //@ts-ignore
        const res = await resolvers_1.default.Negotiation?.ad({ ad: '123' }, null, mockContext);
        expect(res).toEqual({ wineName: 'vino', typeAd: 'SELL', postedBy: '123' });
    });
    it('Negotiation forUserAd calls getUser', async () => {
        getUser.mockReturnValueOnce({ id: 1 });
        //@ts-ignore
        const res = await resolvers_1.default.Negotiation?.forUserAd({ forUserAd: { _id: '123' } }, null, mockContext);
        expect(res).toEqual({ id: 1 });
    });
    it('Negotiation messages calls getMessagesForNegotiation', async () => {
        getMessagesForNegotiation.mockReturnValueOnce([{ id: 1 }, { id: 2 }]);
        //@ts-ignore
        const res = await resolvers_1.default.Negotiation?.messages({ _id: '123' }, null, mockContext);
        expect(res).toEqual([{ id: 1 }, { id: 2 }]);
    });
});
