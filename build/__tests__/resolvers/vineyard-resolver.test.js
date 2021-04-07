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
const mockContext = {
    dataSources: {
        vineyards: {
            getVineyards: jest.fn(),
            getVineyard: jest.fn(),
            getVineyardByName: jest.fn(),
            createVineyard: jest.fn(),
            updateVineyard: jest.fn(),
            deleteVineyard: jest.fn(),
        },
    },
    user: { id: 1, email: 'a@a.a' },
};
const { getVineyards } = mockContext.dataSources.vineyards;
const { getVineyard } = mockContext.dataSources.vineyards;
const { createVineyard } = mockContext.dataSources.vineyards;
const { updateVineyard } = mockContext.dataSources.vineyards;
const { deleteVineyard } = mockContext.dataSources.vineyards;
describe('Review resolvers', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    it('vineyards calls getReviews from dataSource', async () => {
        getVineyards.mockReturnValueOnce([
            {
                _id: '122',
                vineyardName: 'Uva',
            },
        ]);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const res = await resolvers_1.default.Query?.vineyards(null, null, mockContext);
        expect(res).toEqual([
            {
                _id: '122',
                vineyardName: 'Uva',
            },
        ]);
    });
    it('vineyard calls getReview from dataSource', async () => {
        getVineyard.mockReturnValueOnce({
            _id: '122',
            vineyardName: 'Uva',
        });
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const res = await resolvers_1.default.Query?.vineyard(null, { id: '122' }, mockContext);
        expect(res).toEqual({
            _id: '122',
            vineyardName: 'Uva',
        });
    });
    it('createVineyard succeeds and calls datasource', async () => {
        createVineyard.mockReturnValueOnce({
            response: {
                _id: '122',
                vineyardName: 'Uva',
            },
            errors: [],
        });
        //@ts-ignore
        const res = await resolvers_1.default.Mutation?.createVineyard(null, {
            vineyardName: 'Uva',
        }, mockContext);
        expect(res).toEqual({
            errors: [],
            response: {
                _id: '122',
                vineyardName: 'Uva',
            },
        });
    });
    it('updateVineyard succeeds and calls datasource', async () => {
        updateVineyard.mockReturnValueOnce({
            response: {
                _id: '122',
                vineyardName: 'Uvetta',
            },
            errors: [],
        });
        //@ts-ignore
        const res = await resolvers_1.default.Mutation?.updateVineyard(null, {
            _id: '122',
            vineyardName: 'Uvetta',
        }, mockContext);
        expect(res).toEqual({
            errors: [],
            response: {
                _id: '122',
                vineyardName: 'Uvetta',
            },
        });
    });
    it('deleteVineyard succeeds and calls datasource', async () => {
        deleteVineyard.mockReturnValueOnce({
            response: {
                _id: '122',
                vineyardName: 'Uvetta',
            },
            errors: [],
        });
        //@ts-ignore
        const res = await resolvers_1.default.Mutation?.deleteVineyard(null, {
            _id: '122',
        }, mockContext);
        expect(res).toEqual({
            errors: [],
            response: {
                _id: '122',
                vineyardName: 'Uvetta',
            },
        });
    });
});
