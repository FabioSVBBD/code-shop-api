const express = require('express');
const data = require('../../data/mock');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(400).send({ error: 'pass in a language parameter' });
});

router.get('/:language', (req, res) => {
  res.send(data);
});

module.exports = router;
