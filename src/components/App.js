import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendsList/FriendsList';
import { TransactionHistory } from './Transaction/TransactionHistory';
import user from './Profile/user';
import data from './Statistics/data';
import friends from './FriendsList/friends';
import transactions from './Transaction/transactions';

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
      <TransactionHistory items={transactions} />
    </div>
  );
};
