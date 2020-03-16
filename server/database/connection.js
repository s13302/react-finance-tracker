const monk = require('monk');

const connectionString = process.env.DB_URL || 'localhost/finance-tracker';
const db = monk(connectionString);

module.exports = db;