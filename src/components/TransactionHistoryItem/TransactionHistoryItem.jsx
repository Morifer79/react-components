import PropTypes from 'prop-types';
import { TableData } from './TableData.styled';

export const TransactionHistoryItem = ({
  operation: { type, amount, currency },
}) => {
  return (
    <>
      <TableData>{type}</TableData>
      <TableData>{amount}</TableData>
      <TableData>{currency}</TableData>
    </>
  );
};

TransactionHistoryItem.propTypes = {
  operation: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};
