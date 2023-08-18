import {Friend} from "components/Friend/Friend";

export const FriendList = ({friends}) => {
	return (
		<ul className="friend-list">
			{friends.map(friend => {
				return (
					<li className="item" key={friend.id}>
						<Friend person={friend} />
					</li>
				);
			})}
		</ul>
	);
};