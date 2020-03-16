import React, { useContext } from 'react'

import TransactionContext from '../context/TransactionContext';

export const IncomeExpenses = () => {
  const { transactions } = useContext(TransactionContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const incomeTotal = amounts.filter(amount => amount >= 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
  const expensesTotal = (amounts.filter(amount => amount < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

  return (
    <div className="card justify-content-center align-items-center">
      <div className="row alert alert-light rounded">
        <div className="span6">
          <h4>Income</h4>
          <p className="money plus">+ ${incomeTotal}</p>
        </div>
        <div className="divider"></div>
        <div className="span6">
          <h4>Expense</h4>
          <p className="money minus">- ${expensesTotal}</p>
        </div>
      </div>
    </div>
  )
}
