import React, { useContext } from 'react'

import TransactionContext from '../context/TransactionContext';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(TransactionContext);

  const sign = (transaction.amount < 0) ? '-' : '+';
  const clz = (transaction.amount < 0) ? 'minus' : 'plus';

  return (
    <li className={clz}>
      {transaction.text}
      <span>{sign}${Math.abs(transaction.amount)}</span>
      <button onClick={() => deleteTransaction(transaction._id)} className="btn btn-danger">X</button>
    </li>
  )
}
