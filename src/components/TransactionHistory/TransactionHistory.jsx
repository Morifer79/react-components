import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';
import { TransactionHistoryItem } from 'components/TransactionHistoryItem/TransactionHistoryItem';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th className={css.theader}>Type</th>
          <th className={css.theader}>Amount</th>
          <th className={css.theader}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => {
          return (
            <tr className={css.trow} key={item.id}>
              <TransactionHistoryItem operation={item} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
