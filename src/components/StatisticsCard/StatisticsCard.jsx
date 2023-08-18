import PropTypes from 'prop-types';
import css from './StatisticsCard.module.css';

export const StatisticsCard = ({ item: { label, percentage } }) => {
  return (
    <>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </>
  );
};

StatisticsCard.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};