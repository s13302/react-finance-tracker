const Joi = require('joi');

const db = require('./connection');

const transactions = db.get('transactions');

const schema = Joi.object().keys({
  text: Joi.string().required(),
  amount: Joi.number().required(),
});

function getAllTransactions() {
  return transactions.find();
}

function insertTransaction(transaction) {
  const result = Joi.validate(transaction, schema);
  if (! result.error) {
    transaction.created_at = new Date();
    return transactions.insert(transaction);
  }
  return Promise.reject(result.error);
}

function deleteTransaction(transactionId) {
  if (transactionId) {
    return transactions.remove({
      _id: transactionId
    });
  }
  return Promise.reject('transactionId should not be null or undefined');
}

module.exports = {
  getAllTransactions,
  insertTransaction,
  deleteTransaction
}