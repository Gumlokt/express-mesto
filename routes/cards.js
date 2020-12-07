const cardsRoutes = require('express').Router();

const path = require('path');
const { readFile } = require('../data/readFile');

const cardsFilePath = path.join(__dirname, '../data/cards.json');
const cards = readFile(cardsFilePath);

cardsRoutes.get('/cards', (req, res) => {
  res.send(cards);
});

module.exports = cardsRoutes;
