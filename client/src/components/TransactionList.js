import React, { useContext } from 'react'
import { Transaction } from './Transaction';
import TransactionContext from '../context/TransactionContext';

export const TransactionList = () => {
  const { transactions } = useContext(TransactionContext);

  return (
    <div className="card justify-content-center align-items-center">
      <h3 className="card-title">History</h3>
      <ul className="list-unstyled">
        {transactions.map(transaction => (
          <Transaction key={transaction._id} transaction={transaction} />
        ))}
      </ul>
    </div>
  )
}
