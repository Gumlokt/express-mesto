const cardsRoutes = require('express').Router();
const { getCards, createCard, removeCard } = require('../controllers/cards');

cardsRoutes.get('/cards', getCards);

cardsRoutes.post('/cards', createCard);

cardsRoutes.delete('/cards/:cardId', removeCard);

module.exports = cardsRoutes;
