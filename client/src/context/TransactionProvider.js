import React, { Component } from 'react';

import TransactionContext from './TransactionContext';
import { fetchTransactions, addTransaction, deleteTransaction } from '../api/API';

export class TransactionProvider extends Component {

  state = {
    transactions: [],
  };

  constructor({ children }) {
    super();
    this.children = children;
  }

  deleteTransaction = async (transactionId) => {
    deleteTransaction(transactionId).then(() => {
      this.refresh();
    });
  };

  addTransaction = async (transaction) => {
    addTransaction(transaction).then(() => {
      this.refresh();
    });
  };

  componentDidMount() {
    this.refresh();
  }

  refresh() {
    fetchTransactions().then((transactions) => {
      this.setState({
        transactions
      });
    });
  }

  render() {
    return (
      <TransactionContext.Provider
        value={{
          transactions: this.state.transactions,
          deleteTransaction: this.deleteTransaction,
          addTransaction: this.addTransaction,
        }}>
        {this.children}
      </TransactionContext.Provider>
    );
  }

}