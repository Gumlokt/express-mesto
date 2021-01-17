const cardsRoutes = require('express').Router();
const {
  getCards,
  createCard,
  removeCard,
  setCardLike,
  unsetCardLike,
} = require('../controllers/cards');

cardsRoutes.get('/cards', getCards);

cardsRoutes.post('/cards', createCard);

cardsRoutes.delete('/cards/:cardId', removeCard);

cardsRoutes.put('/cards/:cardId/likes', setCardLike);

cardsRoutes.delete('/cards/:cardId/likes', unsetCardLike);

module.exports = cardsRoutes;
