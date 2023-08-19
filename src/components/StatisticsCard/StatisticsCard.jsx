import PropTypes from 'prop-types';
import {
  StatisticsCardTypeDoc,
  StatisticsCardPercentage,
} from './StatisticsCard.styled';

export const StatisticsCard = ({ item: { label, percentage } }) => {
  return (
    <>
      <StatisticsCardTypeDoc>{label}</StatisticsCardTypeDoc>
      <StatisticsCardPercentage>{percentage}%</StatisticsCardPercentage>
    </>
  );
};

StatisticsCard.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
