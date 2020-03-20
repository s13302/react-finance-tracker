import React, { useContext } from 'react'
import { Transaction } from './Transaction';
import TransactionContext from '../context/TransactionContext';

export const TransactionList = () => {
  const { transactions } = useContext(TransactionContext);

  return (
    <div>
      <h3>History</h3>
      <ul className="list-unstyled">
        {transactions.map(transaction => (
          <Transaction key={transaction._id} transaction={transaction} />
        ))}
      </ul>
    </div>
  )
}
