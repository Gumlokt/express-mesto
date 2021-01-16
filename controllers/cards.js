const Card = require('../models/card');

module.exports.getCards = (req, res) => {
  Card.find({})
    .then((cards) => res.send({ data: cards }))
    .catch((err) => res.status(500).send({ message: 'Ошибка при поиске всех карточек' }));
};

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;
  console.log(req.user._id);

  Card.create({ name, link, owner: req.user._id })
    .then((card) => res.send({ data: card }))
    .catch((err) => res.status(500).send({ message: 'Ошибка при создании карточки' }));
};

module.exports.removeCard = (req, res) => {
  Card.findByIdAndRemove(req.params.cardId)
    .then((card) => res.send({ data: card }))
    .catch((err) => res.status(500).send({ message: 'Ошибка при удалении карточки по ID' }));
};
