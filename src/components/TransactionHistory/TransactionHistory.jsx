import {TransactionHistoryItem} from "components/TransactionHistoryItem/TransactionHistoryItem";

export const TransactionHistory = ({ items }) => {
	return (
		<table className="transaction-history">
		<thead>
			<tr>
			<th>Type</th>
			<th>Amount</th>
			<th>Currency</th>
			</tr>
		</thead>
		<tbody>
			{items.map(item => {
			return (
				<tr key={item.id}>
					<TransactionHistoryItem operation={item} />
				</tr>
			);
			})}
		</tbody>
		</table>
	);
};
