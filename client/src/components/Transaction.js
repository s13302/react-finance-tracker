import React from 'react'

export const Transaction = ({ transaction }) => {
  const sign = (transaction.amount < 0) ? '-' : '+';
  const clz = (transaction.amount < 0) ? 'minus' : 'plus';

  return (
    <li className={clz}>
      {transaction.text}
      <span>{sign}${Math.abs(transaction.amount)}</span>
      <button className="btn btn-danger">X</button>
    </li>
  )
}
