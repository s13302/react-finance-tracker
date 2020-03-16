const express = require('express');

const transactionsApi = require('../database/transaction');

const router = express.Router();

router.route('/transaction')
  .get((req, res) => {
    transactionsApi.getAllTransactions().then((transactions) => {
      res.json(transactions);
    });
  })
  .post((req, res) => {
    transactionsApi.insertTransaction(req.body).then((transaction) => {
      res.json(transaction);
    }).catch((error) => {
      res.status(422);
      res.json({
        error
      });
    });
  })
  .delete((req, res) => {
    transactionsApi.deleteTransaction(req.body.transactionId).then((transaction) => {
      res.json(transaction);
    }).catch((error) => {
      res.status(422);
      res.json({
        error
      });
    })
  });

module.exports = router;