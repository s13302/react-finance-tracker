const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const PORT = process.env.PORT || 3000;
const app = express();

// Setup middlewares
app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

// Setup base route
app.get('/', (req, res) => {
  res.json({
    status: '👍👍 Server is working 👍👍',
  });
});

// Run server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
