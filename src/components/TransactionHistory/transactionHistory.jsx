import PropTypes from 'prop-types';
import css from "components/TransactionHistory/transactionHistory.module.css"

export const TransactionHistory = ({items}) => {
    return (
    <table className={css.table}>
        <thead className={css.head}>
            <tr>
            <th className={css.title}>Type</th>
            <th className={css.title}>Amount</th>
            <th className={css.title}>Currency</th>
            </tr>
        </thead>

        <tbody>
            {items.map(item =>(
                    <tr className={css.row} key={item.id}>
                        <td className={css.column}>{item.type}</td>
                        <td className={css.column}>{item.amount}</td>
                        <td className={css.column}>{item.currency}</td>
                </tr>
            ))}
        </tbody>
    </table>
)
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};