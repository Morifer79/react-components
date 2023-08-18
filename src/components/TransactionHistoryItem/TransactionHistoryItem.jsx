import PropTypes from 'prop-types';
import css from './TransactionHistoryItem.module.css';

export const TransactionHistoryItem = ({
  operation: { type, amount, currency },
}) => {
  return (
    <>
      <td className={css.tdata}>{type}</td>
      <td className={css.tdata}>{amount}</td>
      <td className={css.tdata}>{currency}</td>
    </>
  );
};

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};