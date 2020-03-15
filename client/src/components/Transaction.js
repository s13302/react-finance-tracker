import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = (transaction.amount < 0) ? '-' : '+';
  const clz = (transaction.amount < 0) ? 'minus' : 'plus';

  return (
    <li className={clz}>
      {transaction.text}
      <span>{sign}${Math.abs(transaction.amount)}</span>
      <button onClick={() => deleteTransaction(transaction.id)} className="btn btn-danger">X</button>
    </li>
  )
}
