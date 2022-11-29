import PropTypes from 'prop-types';
import css from './Friends.module.css';

export const Friend = ({ friend: { isOnline, name, avatar } }) => {
  return (
    <div className={css.item}>
      <span className={isOnline ? css.status__true : css.status__false}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </div>
  );
};
Friend.propTypes = {
  friend: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
