import PropTypes from 'prop-types';
import { ImUsers } from 'react-icons/im';
import { ImEye } from 'react-icons/im';
import { ImHeart } from 'react-icons/im';

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
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>
      <ul className="stats">
        <li>
          <span className="label">
            <ImUsers />
          </span>
          <span className="quantity"> {followers}</span>
        </li>
        <li>
          <span className="label">
            <ImEye />
          </span>
          <span className="quantity"> {views}</span>
        </li>
        <li>
          <span className="label">
            <ImHeart />
          </span>
          <span className="quantity"> {likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    })
  ),
};
