import React, { useState } from 'react'

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  return (
    <div className="card justify-content-center align-items-center">
      <h3 className="card-title">Add new transaction</h3>
      <form>
        <div className="form-group">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)}
            id="text" className="form-control" placeholder="Text..." />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount (negative - expense, positive - income)</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
            id="amount" className="form-control" placeholder="Amount..." />
        </div>
        <button className="btn btn-primary">Add transaction</button>
      </form>
    </div>
  )
}
