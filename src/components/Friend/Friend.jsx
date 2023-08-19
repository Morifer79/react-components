import PropTypes from 'prop-types';
import { FriendStatus, FriendAvatar, FriendName } from './Friend.styled';

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
