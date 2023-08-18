import PropTypes from 'prop-types';
import { ImUsers } from 'react-icons/im';
import { ImEye } from 'react-icons/im';
import { ImHeart } from 'react-icons/im';
import css from './Profile.module.css';

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
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.stats}>
        <li className={css.item}>
          <span className={css.label}>
            <ImUsers className={css.img} />
          </span>
          <span className={css.quantity}> {followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>
            <ImEye className={css.img} />
          </span>
          <span className={css.quantity}> {views}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>
            <ImHeart className={css.img} />
          </span>
          <span className={css.quantity}> {likes}</span>
        </li>
      </ul>
    </div>
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
