const Card = require('../models/card');

module.exports.getCards = (req, res) => {
  Card.find({})
    .then((cards) => res.status(200).send({ data: cards }))
    .catch((err) => res.status(404).send({ message: 'Ошибка поиска всех карточек' }));
};

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;

  Card.create({ name, link, owner: req.user._id })
    .then((card) => res.status(200).send({ data: card }))
    .catch((err) => res.status(400).send({ message: err.message }));
};

module.exports.removeCard = (req, res) => {
  Card.findByIdAndRemove(req.params.cardId)
    .then((card) => {
      if (!card) {
        res.status(404).send({ message: 'Карточка с указанным ID отсутствует' });
      }

      res.status(200).send({ data: card, message: 'Карточка удалена' });
    })
    .catch((err) => res.status(404).send({ message: 'Карточка не найдена (задан не корректный ID)' }));
};

module.exports.setCardLike = (req, res) => {
  Card.findByIdAndUpdate(req.params.cardId, { $addToSet: { likes: req.user._id } }, { new: true })
    .then((card) => {
      if (!card) {
        res.status(404).send({ message: 'Карточка с указанным ID отсутствует, поставить лайк карточке не удалось' });
      }

      res.status(200).send({ data: card });
    })
    .catch((err) => res.status(404).send({ message: 'Карточка не найдена (задан не корректный ID), поставить лайк карточке не удалось' }));
};

module.exports.unsetCardLike = (req, res) => {
  Card.findByIdAndUpdate(req.params.cardId, { $pull: { likes: req.user._id } }, { new: true })
    .then((card) => res.status(200).send({ data: card }))
    .catch((err) => res.status(404).send({ message: 'Карточка не найдена (задан не корректный ID), убрать лайк с карточки не удалось' }));
};
