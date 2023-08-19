import PropTypes from 'prop-types';
import { ImUsers } from 'react-icons/im';
import { ImEye } from 'react-icons/im';
import { ImHeart } from 'react-icons/im';
import { UserProfile } from './UserProfile.styled';
import { UserDescription } from './UserDescription.styled';
import { UserAvatar } from './UserAvatar.styled';
import { UserName } from './UserName.styled';
import { UserTag } from './UserTag.styled';
import { UserLocation } from './UserLocation.styled';
import { UserStatsList } from './UserStatsList.styled';
import { UserStatsListItem } from './UserStatsListItem.styled';
import { UserLabel } from 'components/FriendList/UserLabel.styled';
import { UserQuantity } from './UserQuantity.styled';

export const Profile = ({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <UserProfile>
      <UserDescription>
        <UserAvatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </UserDescription>
      <UserStatsList>
        <UserStatsListItem>
          <UserLabel>
            <ImUsers size={30} />
          </UserLabel>
          <UserQuantity> {followers}</UserQuantity>
        </UserStatsListItem>
        <UserStatsListItem>
          <UserLabel>
            <ImEye size={30} />
          </UserLabel>
          <UserQuantity> {views}</UserQuantity>
        </UserStatsListItem>
        <UserStatsListItem>
          <UserLabel>
            <ImHeart size={30} />
          </UserLabel>
          <UserQuantity> {likes}</UserQuantity>
        </UserStatsListItem>
      </UserStatsList>
    </UserProfile>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
