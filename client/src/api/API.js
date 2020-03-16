const API_URL = 'http://localhost:3000/api/transaction';

export const fetchTransactions = async () => {
  const response = await fetch(API_URL);
  const transactions = await response.json();
  return transactions;
};

export const addTransaction = async (transaction) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(transaction),
  });
  const result = await response.json();
  return result;
};

export const deleteTransaction = async (transactionId) => {
  const response = await fetch(API_URL, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      transactionId,
    }),
  });
  const result = await response.json();
  return result;
};