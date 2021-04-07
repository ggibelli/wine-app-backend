"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const apollo_server_express_1 = require("apollo-server-express");
const integrationSetup_1 = require("../../tests/integrationSetup");
//import { ObjectId } from 'mongodb';
const user_1 = require("../../models/user");
const ad_1 = require("../../models/ad");
const mocksTests_1 = require("../../tests/mocksTests");
const negotiation_1 = require("../../models/negotiation");
const message_1 = require("../../models/message");
//import { ObjectId } from 'mongodb';
const { query, mutate, setOptions } = integrationSetup_1.testClient;
const MESSAGES_USER = apollo_server_express_1.gql `
  query GetMessagesUser($user: ID!) {
    messagesToUser(sentTo: $user) {
      sentBy {
        firstName
      }
      sentTo {
        firstName
      }
      content
    }
  }
`;
const MESSAGES_NEGOTIATION = apollo_server_express_1.gql `
  query GetMessagesNegotiation($negotiation: ID!) {
    messagesForNegotiation(negotiation: $negotiation) {
      sentBy {
        firstName
      }
      sentTo {
        firstName
      }
      content
      negotiation {
        createdBy {
          firstName
        }
        forUserAd {
          firstName
        }
      }
    }
  }
`;
const MESSAGES = apollo_server_express_1.gql `
  {
    messages {
      sentBy {
        firstName
      }
      sentTo {
        firstName
      }
      content
    }
  }
`;
const MESSAGE = apollo_server_express_1.gql `
  query GetMessage($id: ID!) {
    message(id: $id) {
      sentBy {
        firstName
      }
      sentTo {
        firstName
      }
      content
    }
  }
`;
const CREATE_MESSAGE = apollo_server_express_1.gql `
  mutation CreateMessage($message: MessageInput!) {
    createMessage(message: $message) {
      response {
        sentBy {
          firstName
        }
        sentTo {
          firstName
        }
        content
        negotiation {
          forUserAd {
            firstName
          }
          createdBy {
            firstName
          }
        }
      }
      errors {
        name
        text
      }
    }
  }
`;
const LOGIN_VALID = apollo_server_express_1.gql `
  mutation {
    login(email: "gio@prova.it", password: "giovanni") {
      response {
        token
      }
      errors {
        name
        text
      }
    }
  }
`;
const LOGIN_VALID_OTHER = apollo_server_express_1.gql `
  mutation {
    login(email: "gio2@prova.it", password: "giovanni") {
      response {
        token
      }
      errors {
        name
        text
      }
    }
  }
`;
beforeAll(async () => {
    await integrationSetup_1.connectToDb();
    await integrationSetup_1.dropTestDb();
    const usersMock = mocksTests_1.users();
    const adsMock = mocksTests_1.ads();
    const user = new user_1.User(usersMock[0]);
    const otherUser = new user_1.User(usersMock[1]);
    const thirdUser = new user_1.User(usersMock[2]);
    const ad = new ad_1.Ad({ ...adsMock[0], postedBy: otherUser });
    const negotiation = new negotiation_1.Negotiation({
        createdBy: user,
        ad: ad,
        forUserAd: ad.postedBy,
        type: ad.typeAd,
    });
    const otherNegotiation = new negotiation_1.Negotiation({
        createdBy: thirdUser,
        ad: ad,
        forUserAd: ad.postedBy,
        type: ad.typeAd,
    });
    const message = new message_1.Message({
        negotiation: negotiation,
        sentBy: negotiation.createdBy,
        sentTo: negotiation.forUserAd,
        content: 'ciao',
    });
    const otherMessage = new message_1.Message({
        negotiation: otherNegotiation,
        sentBy: otherNegotiation.createdBy,
        sentTo: otherNegotiation.forUserAd,
        content: 'ciao di nuovo',
    });
    await message.save();
    await otherMessage.save();
    await user.save();
    await otherUser.save();
    await thirdUser.save();
    await ad.save();
    await negotiation.save();
    await otherNegotiation.save();
});
describe('Integration test messages', () => {
    it('query message fails if not logged in', async () => {
        const res = await query(MESSAGES);
        expect(res).toMatchSnapshot();
    });
    it('query messagesToUser fails if not logged in', async () => {
        const negotiation = await negotiation_1.Negotiation.find({})
            .lean()
            .exec();
        const res = await query(MESSAGES_USER, {
            variables: { user: negotiation[0].forUserAd.toString() },
        });
        expect(res).toMatchSnapshot();
    });
    it('query messageForNegotiation fails if not logged in', async () => {
        const negotiation = await negotiation_1.Negotiation.find({})
            .lean()
            .exec();
        const res = await query(MESSAGES_NEGOTIATION, {
            variables: { negotiation: negotiation[0]._id.toString() },
        });
        expect(res).toMatchSnapshot();
    });
    it('query single message fails if not logged', async () => {
        const message = await message_1.Message.find({}).lean().exec();
        const res = await query(MESSAGE, {
            variables: { id: message[0]._id.toString() },
        });
        expect(res).toMatchSnapshot();
    });
    it('create message mutation fails if not logged in', async () => {
        const negotiation = await negotiation_1.Negotiation.find({})
            .lean()
            .exec();
        const message = {
            negotiation: negotiation[0]._id.toString(),
            sentTo: negotiation[0].forUserAd.toString(),
            content: 'prova prova',
        };
        const res = await mutate(CREATE_MESSAGE, {
            variables: { message: message },
        });
        expect(res).toMatchSnapshot();
    });
    it('create message mutation successfull', async () => {
        const data = await mutate(LOGIN_VALID);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        const token = data.data.login.response.token;
        setOptions({
            request: {
                headers: {
                    authorization: token,
                },
            },
        });
        const negotiation = await negotiation_1.Negotiation.find({})
            .lean()
            .exec();
        const message = {
            negotiation: negotiation[0]._id.toString(),
            sentTo: negotiation[0].forUserAd.toString(),
            content: 'prova prova',
        };
        const res = await mutate(CREATE_MESSAGE, {
            variables: { message: message },
        });
        expect(res).toMatchSnapshot();
    });
    it('create message mutation fails if user does not own the negotiation', async () => {
        const negotiation = await negotiation_1.Negotiation.find({})
            .lean()
            .exec();
        const message = {
            negotiation: negotiation[1]._id.toString(),
            sentTo: negotiation[1].forUserAd.toString(),
            content: 'prova prova',
        };
        const res = await mutate(CREATE_MESSAGE, {
            variables: { message: message },
        });
        expect(res).toMatchSnapshot();
    });
    it('create message mutation fails if recipient same as sender', async () => {
        const user = await user_1.User.findOne({ firstName: 'Giovanni' }).lean().exec();
        const negotiation = await negotiation_1.Negotiation.find({})
            .lean()
            .exec();
        const message = {
            negotiation: negotiation[0]._id.toString(),
            sentTo: user?._id.toString(),
            content: 'prova prova',
        };
        const res = await mutate(CREATE_MESSAGE, {
            variables: { message: message },
        });
        expect(res).toMatchSnapshot();
    });
    it('query messages succeds if logged in and admin, all are shown', async () => {
        const res = await query(MESSAGES);
        expect(res).toMatchSnapshot();
    });
    it('query messagesToUser succeds if logged in', async () => {
        const negotiation = await negotiation_1.Negotiation.find({}).lean().exec();
        const res = await query(MESSAGES_USER, {
            variables: { user: negotiation[0].forUserAd.toString() },
        });
        expect(res).toMatchSnapshot();
    });
    it('query messagesForNegotiation succeds if logged in', async () => {
        const negotiation = await negotiation_1.Negotiation.find({})
            .lean()
            .exec();
        const res = await query(MESSAGES_NEGOTIATION, {
            variables: { negotiation: negotiation[0]._id.toString() },
        });
        expect(res).toMatchSnapshot();
    });
    it('query single message succeds if logged', async () => {
        const message = await message_1.Message.find({}).lean().exec();
        const res = await query(MESSAGE, {
            variables: { id: message[0]._id.toString() },
        });
        expect(res).toMatchSnapshot();
    });
    it('query negotiations succeds if logged in and not admin, only user message shown', async () => {
        const data = await mutate(LOGIN_VALID_OTHER);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        const token = data.data.login.response.token;
        setOptions({
            request: {
                headers: {
                    authorization: token,
                },
            },
        });
        const res = await query(MESSAGES);
        expect(res).toMatchSnapshot();
    });
});
afterAll(async () => {
    await integrationSetup_1.dropTestDb();
    await integrationSetup_1.closeDbConnection();
});
