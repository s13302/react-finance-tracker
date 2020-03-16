# React App - Finance Tracker

## Scope

* [X] Setup base server app
  * [X] Install all dependencies
    * express
    * monk
    * body-parser
    * cors
    * morgan
    * joi
    * nodemon
* [X] Setup react app
  * [X] Basic cleanup:
    * Remove serviceWorker.js
    * Remove logo.svg
    * Remove index.css
    * Remove test related files (eg App.test.js)
    * Clean App.css file
    * Remove unused code from App.js and index.js
    * Add `Superhero` bootswatch theme
* [X] Create components
  * [X] Header component
  * [X] Balance component
  * [X] Income / Expense component
  * [X] Transaction list component
    * [X] Transaction component
  * [X] Add transaction component
  * [X] Add global context
* [X] MVP Product
  * [X] Adding the transaction to the list
  * [X] Removing the transaction from list
  * [X] Show current balance
  * [X] Show whole Income
  * [X] Show whole Expenses
* [X] Backend
  * [X] Setup the MongoDB database
  * [X] Setup server routes:
    * GET /api/transaction - gets all transactions from server
    * POST /api/transaction - uploads new transaction to the server (payload: new transaction without id)
    * DELETE /api/transaction - removes the transaction (payload: id of transaction)
  * [X] Fetch the transaction list from server
  * [X] Upload new transaction to the server
  * [X] Remove the transaction from the server
* [ ] Make the app nice looking
* [ ] Write the README.md description for this project