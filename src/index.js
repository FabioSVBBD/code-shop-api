const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const products = require('./routes/products');

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(
  cors({
    origin: ['http://localhost:3000', 'https://el-code-shop.herokuapp.com'],
  })
);
app.use(morgan('combined'));

app.use('/products', products);

app.get('/', (req, res) => {
  res.send({ amIOriginal: 'yea yea' });
});

app.get('*', (req, res) => {
  res.status(400).send({ error: 'This is an invalid endpoint' });
});

app.listen(3001, () => {
  console.log('listening on port 3001');
});
