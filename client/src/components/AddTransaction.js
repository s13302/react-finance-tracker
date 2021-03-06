import React, { useState, useContext } from 'react'
import TransactionContext from '../context/TransactionContext';

export const AddTransaction = () => {
  const { addTransaction } = useContext(TransactionContext);

  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      text,
      amount: parseFloat(amount),
    };
    addTransaction(newTransaction);
    setText('');
    setAmount(0);
  };

  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)}
            id="text" className="form-control" placeholder="Text..." />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <small className="text-muted">(negative - expense, positive - income)</small>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">$</div>
            </div>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
              id="amount" className="form-control" placeholder="Amount..." />
          </div>
        </div>
        <button className="btn btn-primary">Add transaction</button>
      </form>
    </div>
  )
}
