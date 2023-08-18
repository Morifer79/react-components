import PropTypes from 'prop-types';
import css from './Friend.module.css';

export const Friend = ({ person: { avatar, name, isOnline } }) => {
  return (
    <>
      <span className={css.status}>{isOnline}</span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
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
