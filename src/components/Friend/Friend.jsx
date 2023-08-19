import PropTypes from 'prop-types';
import { FriendStatus } from './FriendStatus.styled';
import { FriendAvatar } from './FriendAvatar.styled';
import { FriendName } from './FriendName.styled';

export const Friend = ({ person: { avatar, name, isOnline } }) => {
  return (
    <>
      <FriendStatus isOnline={isOnline}></FriendStatus>
      <FriendAvatar src={avatar} alt="User avatar" />
      <FriendName>{name}</FriendName>
    </>
  );
};

Friend.propTypes = {
  person: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
