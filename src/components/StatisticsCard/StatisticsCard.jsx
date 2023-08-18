import PropTypes from 'prop-types';

export const StatisticsCard = ({ item: { label, percentage } }) => {
  return (
    <>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </>
  );
};

StatisticsCard.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};