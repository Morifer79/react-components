import PropTypes from 'prop-types';
import { StatisticsCardTypeDoc } from './StatisticsCardTypeDoc.styled';
import { StatisticsCardPercentage } from './StatisticsCardPercentage.styled';

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
