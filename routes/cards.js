const cardsRoutes = require('express').Router();
const { cards } = require('../data/cards');


cardsRoutes.get('/cards', (req, res) => {
  res.send(cards);
});


module.exports = cardsRoutes;
