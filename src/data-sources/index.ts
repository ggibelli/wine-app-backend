import { Ad } from '../models/ad';
import { Message } from '../models/message';
import { Negotiation } from '../models/negotiation';
import { Review } from '../models/review';
import { User } from '../models/user';
import { Vineyard } from '../models/vineyard';
import { Wine } from '../models/wine';

import Ads from './ads';
import Messages from './messages';
import Negotiations from './negotiations';
import Reviews from './reviews';
import Users from './users';
import Vineyards from './vineyards';
import Wines from './wines';

export default () => ({
  ads: Ad,
  messages: new Messages(Message),
  negotiations: new Negotiations(Negotiation),
  reviews: new Reviews(Review),
  users: new Users(User),
  vineyards: new Vineyards(Vineyard),
  wines: new Wines(Wine),
});
