const cardsRoutes = require('express').Router();

const path = require('path');
const getDataFromFile = require('../helpers/files');

const cardsFilePath = path.join(__dirname, '..', 'data', 'cards.json');
const getCards = getDataFromFile(cardsFilePath);

cardsRoutes.get('/cards', (req, res) => {
  getCards
    .then((cards) => {
      res.status(200).send(cards);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = cardsRoutes;
