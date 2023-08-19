import PropTypes from 'prop-types';
import { ImUsers, ImEye, ImHeart } from 'react-icons/im';
import {
  UserProfile,
  UserDescription,
  UserAvatar,
  UserName,
  UserTag,
  UserLocation,
  UserStatsList,
  UserStatsListItem,
  UserQuantity,
  UserLabel,
} from './Profile.styled';

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
