# React App - Finance Tracker

## Description

Application which allows you to track personal income and expenses. Automatically counts the sum of all incomes and all expenses and shows them to user.

## Instruction

To run the application in development mode you need to:

* Enter to the server catalog `cd server`
* Run the server `npm run-script dev`
* Enter to the client catalog `cd ../client`
* Run the frontend app `yarn start`

## License

This app is an my personal React exploratory and you can use it as you want to. I really hope it will have value for you.

## Technology Stack

### Both

* Node.js
* npm

### Backend

* Express
* MongoDB

### Frontend

* React
* React Context API

## Scope of the project

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
* [X] Make the app nice looking
* [X] Write the README.md description for this project
