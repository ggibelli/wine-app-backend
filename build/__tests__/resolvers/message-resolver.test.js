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
        vineyards: {
            getVineyardByName: jest.fn(),
        },
        wines: {
            getWineByName: jest.fn(),
        },
        messages: {
            getMessagesForNegotiation: jest.fn(),
            getMessagesTo: jest.fn(),
            getMessages: jest.fn(),
            getMessage: jest.fn(),
            createMessage: jest.fn(),
        },
    },
    user: { _id: '321', email: 'a@a.a' },
};
const { getNegotiation } = mockContext.dataSources.negotiations;
const { getUser } = mockContext.dataSources.users;
const { getMessagesForNegotiation } = mockContext.dataSources.messages;
const { getMessagesTo } = mockContext.dataSources.messages;
const { getMessages } = mockContext.dataSources.messages;
const { getMessage } = mockContext.dataSources.messages;
const { createMessage } = mockContext.dataSources.messages;
describe('Message resolvers', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    it('messageToUser calls getMessagesTo from dataSource', async () => {
        getMessagesTo.mockReturnValueOnce([
            {
                _id: '122',
                content: 'Ciao',
                sentTo: '123',
                sentBy: '321',
                negotiation: '322',
            },
        ]);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const res = await resolvers_1.default.Query?.messagesToUser(null, { sentTo: '123' }, mockContext);
        expect(res).toEqual([
            {
                _id: '122',
                content: 'Ciao',
                sentTo: '123',
                sentBy: '321',
                negotiation: '322',
            },
        ]);
    });
    it('messageForNegotiation calls getMessagesForNegotiation from dataSource', async () => {
        getMessagesForNegotiation.mockReturnValueOnce([
            {
                _id: '122',
                content: 'Ciao',
                sentTo: '123',
                sentBy: '321',
                negotiation: '322',
            },
        ]);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const res = await resolvers_1.default.Query?.messagesForNegotiation(null, { negotiation: '322' }, mockContext);
        expect(res).toEqual([
            {
                _id: '122',
                content: 'Ciao',
                sentTo: '123',
                sentBy: '321',
                negotiation: '322',
            },
        ]);
    });
    it('messages calls getMessages from dataSource', async () => {
        getMessages.mockReturnValueOnce([
            {
                _id: '122',
                content: 'Ciao',
                sentTo: '123',
                sentBy: '321',
                negotiation: '322',
            },
        ]);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const res = await resolvers_1.default.Query?.messages(null, null, mockContext);
        expect(res).toEqual([
            {
                _id: '122',
                content: 'Ciao',
                sentTo: '123',
                sentBy: '321',
                negotiation: '322',
            },
        ]);
    });
    it('message calls getMessage from dataSource', async () => {
        getMessage.mockReturnValueOnce({
            _id: '122',
            content: 'Ciao',
            sentTo: '123',
            sentBy: '321',
            negotiation: '322',
        });
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const res = await resolvers_1.default.Query?.message(null, { id: '123' }, mockContext);
        expect(res).toEqual({
            _id: '122',
            content: 'Ciao',
            sentTo: '123',
            sentBy: '321',
            negotiation: '322',
        });
    });
    it('createNegotiation succeeds and calls datasource and subscription', async () => {
        createMessage.mockReturnValueOnce({
            response: {
                _id: '122',
                content: 'Ciao',
                sentTo: '123',
                sentBy: '321',
                negotiation: '322',
            },
            errors: [],
        });
        getNegotiation.mockReturnValueOnce({
            _id: '122',
            typeAd: 'SELL',
            forUserAd: '123',
            createdBy: '321',
            ad: '322',
        });
        // @ts-ignore
        const res = await resolvers_1.default.Mutation?.createMessage(null, {
            message: { content: 'Ciao', sentTo: '123', negotiation: '322' },
        }, mockContext);
        expect(mockPublish).toHaveBeenCalledTimes(1);
        expect(mockPublish).toHaveBeenCalledWith('MESSAGE_SENT', {
            messageSent: {
                _id: '122',
                content: 'Ciao',
                sentTo: '123',
                sentBy: '321',
                negotiation: '322',
            },
        });
        expect(res).toEqual({
            errors: [],
            response: {
                _id: '122',
                content: 'Ciao',
                sentTo: '123',
                sentBy: '321',
                negotiation: '322',
            },
        });
    });
    it('createNegotiation fails because no negotiation, subscription not called, createMessage not called', async () => {
        getNegotiation.mockReturnValueOnce({
            _id: '122',
            typeAd: 'SELL',
            forUserAd: '999',
            createdBy: '777',
            ad: '322',
        });
        // @ts-ignore
        const res = await resolvers_1.default.Mutation?.createMessage(null, {
            message: { content: 'Ciao', sentTo: '123', negotiation: '322' },
        }, mockContext);
        expect(mockPublish).toHaveBeenCalledTimes(0);
        expect(createMessage).toHaveBeenCalledTimes(0);
        expect(res).toEqual({
            response: null,
            errors: [
                {
                    name: 'UserInputError',
                    text: 'You can only send messages if you own the negotiation',
                },
            ],
        });
    });
    it('createNegotiation fails and does not call subscription', async () => {
        createMessage.mockReturnValueOnce({
            response: null,
            errors: [{ name: 'error', text: 'error' }],
        });
        getNegotiation.mockReturnValueOnce({
            _id: '122',
            typeAd: 'SELL',
            forUserAd: '123',
            createdBy: '321',
            ad: '322',
        });
        // @ts-ignore
        const res = await resolvers_1.default.Mutation?.createMessage(null, {
            message: { content: 'Ciao', sentTo: '123', negotiation: '322' },
        }, mockContext);
        expect(mockPublish).toHaveBeenCalledTimes(0);
        expect(res).toEqual({
            response: null,
            errors: [{ name: 'error', text: 'error' }],
        });
    });
    it('Message sentBy calls getUser', async () => {
        getUser.mockReturnValueOnce({ id: 1 });
        // @ts-ignore
        const res = await resolvers_1.default.Message?.sentBy({ sentBy: new mongoose_1.Types.ObjectId('5fdd925d9cc5800455e1855e') }, null, mockContext);
        expect(res).toEqual({ id: 1 });
    });
    it('Message sentTo calls getUser', async () => {
        getUser.mockReturnValueOnce({ id: 1 });
        // @ts-ignore
        const res = await resolvers_1.default.Message?.sentTo({ sentTo: new mongoose_1.Types.ObjectId('5fdd925d9cc5800455e1855e') }, null, mockContext);
        expect(res).toEqual({ id: 1 });
    });
    it('Message negotiation calls getNegotiation', async () => {
        getNegotiation.mockReturnValueOnce({
            _id: '122',
            typeAd: 'SELL',
            forUserAd: '123',
            createdBy: '321',
            ad: '322',
        });
        // @ts-ignore
        const res = await resolvers_1.default.Message?.negotiation({ negotiation: new mongoose_1.Types.ObjectId('5fdd925d9cc5800455e1855e') }, null, mockContext);
        expect(res).toEqual({
            _id: '122',
            typeAd: 'SELL',
            forUserAd: '123',
            createdBy: '321',
            ad: '322',
        });
    });
});
