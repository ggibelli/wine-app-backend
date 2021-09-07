/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { gql } from 'apollo-server-express';
import { LeanDocument, Types } from 'mongoose';
import {
  testClient,
  connectToDb,
  dropTestDb,
  closeDbConnection,
} from '../../tests/integrationSetup';
// import { ObjectId } from 'mongodb';
import { User } from '../../models/user';
import { Ad } from '../../models/ad';
import { users, ads } from '../../tests/mocksTests';
import { MessageInput } from '../../generated/graphql';

import { Negotiation } from '../../models/negotiation';
import { Message } from '../../models/message';
import {
  NegotiationDocument,
  MessageDocument,
} from '../../interfaces/mongoose.gen';

const { query, mutate, setOptions } = testClient;

const MESSAGES_USER = gql`
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

const MESSAGES_NEGOTIATION = gql`
  query GetMessagesNegotiation($negotiation: ID!) {
    messagesForNegotiation(negotiation: $negotiation) {
      messages {
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
  }
`;

const MESSAGES = gql`
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

const MESSAGE = gql`
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

const CREATE_MESSAGE = gql`
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

const LOGIN_VALID = gql`
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

const LOGIN_VALID_OTHER = gql`
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
  await connectToDb();
  await dropTestDb();
  const usersMock = users();
  const adsMock = ads();
  const user = new User({ ...usersMock[0], _id: new Types.ObjectId() });
  const otherUser = new User({ ...usersMock[1], _id: new Types.ObjectId() });
  const thirdUser = new User({ ...usersMock[2], _id: new Types.ObjectId() });
  const ad = new Ad({
    ...adsMock[0],
    postedBy: otherUser,
    _id: new Types.ObjectId(),
  });
  const negotiation = new Negotiation({
    createdBy: user,
    ad,
    forUserAd: ad.postedBy,
    type: ad.typeAd,
    _id: new Types.ObjectId(),
  });
  const otherNegotiation = new Negotiation({
    createdBy: thirdUser,
    ad,
    forUserAd: ad.postedBy,
    type: ad.typeAd,
    _id: new Types.ObjectId(),
  });
  const message = new Message({
    negotiation,
    sentBy: negotiation.createdBy,
    sentTo: negotiation.forUserAd,
    content: 'ciao',
    _id: new Types.ObjectId(),
  });
  const otherMessage = new Message({
    negotiation: otherNegotiation,
    sentBy: otherNegotiation.createdBy,
    sentTo: otherNegotiation.forUserAd,
    content: 'ciao di nuovo',
    _id: new Types.ObjectId(),
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
    const negotiation: LeanDocument<NegotiationDocument>[] =
      await Negotiation.find({}).lean().exec();
    const res = await query(MESSAGES_USER, {
      variables: { user: negotiation[0].forUserAd.toString() },
    });
    expect(res).toMatchSnapshot();
  });

  it('query messageForNegotiation fails if not logged in', async () => {
    const negotiation: LeanDocument<NegotiationDocument>[] =
      await Negotiation.find({}).lean().exec();
    const res = await query(MESSAGES_NEGOTIATION, {
      variables: { negotiation: negotiation[0]._id.toString() },
    });
    expect(res).toMatchSnapshot();
  });

  it('query single message fails if not logged', async () => {
    const message: LeanDocument<MessageDocument>[] = await Message.find({})
      .lean()
      .exec();
    const res = await query(MESSAGE, {
      variables: { id: message[0]._id.toString() },
    });
    expect(res).toMatchSnapshot();
  });

  it('create message mutation fails if not logged in', async () => {
    const negotiation: LeanDocument<NegotiationDocument>[] =
      await Negotiation.find({}).lean().exec();
    const message: MessageInput = {
      negotiation: negotiation[0]._id.toString(),
      sentTo: negotiation[0].forUserAd.toString(),
      content: 'prova prova',
    };
    const res = await mutate(CREATE_MESSAGE, {
      variables: { message },
    });
    expect(res).toMatchSnapshot();
  });

  it('create message mutation successfull', async () => {
    const data: any = await mutate(LOGIN_VALID);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const { token } = data.data.login.response;
    setOptions({
      request: {
        headers: {
          authorization: token,
        },
      },
    });
    const negotiation: LeanDocument<NegotiationDocument>[] =
      await Negotiation.find({}).lean().exec();
    const message: MessageInput = {
      negotiation: negotiation[0]._id.toString(),
      sentTo: negotiation[0].forUserAd.toString(),
      content: 'prova prova',
    };
    const res = await mutate(CREATE_MESSAGE, {
      variables: { message },
    });
    expect(res).toMatchSnapshot();
  });

  it('create message mutation fails if user does not own the negotiation', async () => {
    const negotiation: LeanDocument<NegotiationDocument>[] =
      await Negotiation.find({}).lean().exec();
    const message: MessageInput = {
      negotiation: negotiation[1]._id.toString(),
      sentTo: negotiation[1].forUserAd.toString(),
      content: 'prova prova',
    };
    const res = await mutate(CREATE_MESSAGE, {
      variables: { message },
    });
    expect(res).toMatchSnapshot();
  });

  it('create message mutation fails if recipient same as sender', async () => {
    const user = await User.findOne({ firstName: 'Giovanni' }).lean().exec();
    if (!user) throw new Error();
    const negotiation: LeanDocument<NegotiationDocument>[] =
      await Negotiation.find({}).lean().exec();
    const message: MessageInput = {
      negotiation: negotiation[0]._id.toString(),
      sentTo: user._id.toString(),
      content: 'prova prova',
    };
    const res = await mutate(CREATE_MESSAGE, {
      variables: { message },
    });
    expect(res).toMatchSnapshot();
  });

  it('query messages succeds if logged in and admin, all are shown', async () => {
    const res = await query(MESSAGES);
    expect(res).toMatchSnapshot();
  });

  it('query messagesToUser succeds if logged in', async () => {
    const negotiation = await Negotiation.find({}).lean().exec();
    const res = await query(MESSAGES_USER, {
      variables: { user: negotiation[0].forUserAd.toString() },
    });
    expect(res).toMatchSnapshot();
  });

  it('query messagesForNegotiation succeds if logged in', async () => {
    const negotiation: LeanDocument<NegotiationDocument>[] =
      await Negotiation.find({}).lean().exec();
    const res = await query(MESSAGES_NEGOTIATION, {
      variables: { negotiation: negotiation[0]._id.toString() },
    });
    expect(res).toMatchSnapshot();
  });

  it('query single message succeds if logged', async () => {
    const message: LeanDocument<MessageDocument>[] = await Message.find({})
      .lean()
      .exec();
    const res = await query(MESSAGE, {
      variables: { id: message[0]._id.toString() },
    });
    expect(res).toMatchSnapshot();
  });

  it('query negotiations succeds if logged in and not admin, only user message shown', async () => {
    const data: any = await mutate(LOGIN_VALID_OTHER);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const { token } = data.data.login.response;
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
  await dropTestDb();
  await closeDbConnection();
});
