import React, { useContext } from 'react'

import TransactionContext from '../context/TransactionContext';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(TransactionContext);

  const sign = (transaction.amount < 0) ? '-' : '+';
  const clz = (transaction.amount < 0) ? 'danger' : 'success';

  return (
    <div className={`alert alert-${clz}`}>
      {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
      <button onClick={() => deleteTransaction(transaction._id)} className="close">&times;</button>
    </div>
  )
}
