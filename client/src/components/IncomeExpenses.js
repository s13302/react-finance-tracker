import React from 'react'

export const IncomeExpenses = () => {
  return (
    <div className="card justify-content-center align-items-center">
      <div className="row alert alert-light rounded">
        <div className="span6">
          <h4>Income</h4>
          <p className="money plus">+ $0.00</p>
        </div>
        <div className="divider"></div>
        <div className="span6">
          <h4>Expense</h4>
          <p className="money minus">- $0.00</p>
        </div>
      </div>
    </div>
  )
}
