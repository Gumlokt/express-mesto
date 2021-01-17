const Card = require('../models/card');

module.exports.getCards = (req, res) => {
  Card.find({})
    .then((cards) => res.send({ data: cards }))
    .catch((err) => res.status(500).send({ message: 'Ошибка при поиске всех карточек' }));
};

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;

  Card.create({ name, link, owner: req.user._id })
    .then((card) => {
      if (card.message === 'incorrectURL') {
        res.status(400).send({ message: 'Переданы некорректные данные' });
      }

      res.send({ data: card });
    })
    .catch((err) => {
      console.log(err.errors);

      res.status(500).send({ message: 'Ошибка при создании карточки' });
    });
};

module.exports.removeCard = (req, res) => {
  Card.findByIdAndRemove(req.params.cardId)
    .orFail(new Error('CardError'))
    .then((card) => {
      res.send({ data: card, message: 'Карточка удалена' });
    })
    .catch((err) => {
      if (err.message === 'CardError') {
        res.status(404).send({ message: 'Такой карточки нет в базе' });
      }

      res.status(500).send({ message: 'Ошибка при удалении карточки по ID' });
    });
};

module.exports.setCardLike = (req, res) => {
  Card.findByIdAndUpdate(req.params.cardId, { $addToSet: { likes: req.user._id } }, { new: true })
    .then((card) => res.send({ data: card }))
    .catch((err) => res.status(500).send({ message: 'Ошибка установки лайка карточке' }));
};

module.exports.unsetCardLike = (req, res) => {
  Card.findByIdAndUpdate(req.params.cardId, { $pull: { likes: req.user._id } }, { new: true })
    .then((card) => res.send({ data: card }))
    .catch((err) => res.status(500).send({ message: 'Ошибка удаления лайка карточки' }));
};
