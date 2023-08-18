import PropTypes from 'prop-types';
import { TransactionHistoryItem } from 'components/TransactionHistoryItem/TransactionHistoryItem';
import { TableHeader } from './TableHeader.styled';
import { TransactionTable } from './TransactionTable.styled';
import { TableRow } from './TableRow.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <thead>
        <tr>
          <TableHeader>Type</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Currency</TableHeader>
        </tr>
      </thead>
      <tbody>
        {items.map(item => {
          return (
            <TableRow key={item.id}>
              <TransactionHistoryItem operation={item} />
            </TableRow>
          );
        })}
      </tbody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
