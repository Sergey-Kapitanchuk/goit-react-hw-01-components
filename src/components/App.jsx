import user from "dataJson/user.json";
import { Profile } from "components/Profile/profile";
import data from "dataJson/data.json";
import { Statistics } from "components/Statistics/statistics";
import friends from "dataJson/friends.json";
import { FriendList } from "components/FriendList/friendList";
import transactions from "dataJson/transactions.json";
import {TransactionHistory} from 'components/TransactionHistory/transactionHistory'

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};
