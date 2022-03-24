const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Configure CORS
// TODO - Change this to your own domain
const corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

// Configure body-parser to read JSON
app.use(bodyParser.json());

// TODO - Change your home page or disable it removing the entry point /
// Respond to GET requests to /
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

// TODO - Create your API endpoints starting here:
// Respond to GET requests to /customers
app.get('/customers', async (req, res) => {
  const customers = {};
  res.send(customers);
});

// Respond to POST requests to /customers
app.post('/customers', async (req, res) => {
  // TODO - Get fields from request body
  // const { ... } = req.body;

  // TODO Create the data in database

  res.send('Customer created');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
