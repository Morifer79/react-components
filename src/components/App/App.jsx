import {Container} from 'components/App/App.styled';
import {Profile} from 'components/Profile/Profile';
import {Statistics} from 'components/Statistics/Statistics';
import {FriendList} from 'components/FriendList/FriendList';
import {TransactionHistory} from 'components/TransactionHistory/TransactionHistory';

import dataUser from '../Data/user.json';
import dataStatistics from '../Data/data.json';
import dataFriend from '../Data/friends.json';
import dataTransactions from '../Data/transactions.json';

export const App = () => {
	return (
		<Container>
		<Profile user={dataUser} />
		<Statistics stats={dataStatistics} />
		<FriendList friends={dataFriend} />
		<TransactionHistory items={dataTransactions} />
		</Container>
	);
};
