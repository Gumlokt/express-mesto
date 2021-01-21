const User = require('../models/user');

module.exports.getUser = (req, res) => {
  User.findById(req.params.userId)
    .then((user) => {
      if (!user) {
        res.status(404).send({ message: 'Пользователя с указанным ID нет в базе' });
      }

      res.status(200).send({ data: user });
    })
    .catch((err) => res.status(404).send({ message: 'Пользователя с указанным ID нет в базе (задан не корректный ID)' }));
};

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => res.status(200).send({ data: users }))
    .catch((err) => res.status(404).send({ message: 'Ошибка поиска всех пользователей' }));
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.status(200).send({ data: user }))
    .catch((err) => res.status(400).send({ message: err.message }));
};

module.exports.updateUserProfile = (req, res) => {
  const { name, about } = req.body;

  if (name && about) {
    User.findByIdAndUpdate(req.user._id, { name, about })
      .then((user) => {
        if (!user) {
          res.status(404).send({ message: 'Пользователь с указанным ID отсутствует' });
        }

        res.status(200).send({ data: user });
      })
      .catch((err) => res.status(404).send({ message: 'Пользователь с указанным ID отсутствует (задан не корректный ID)' }));
  } else {
    res.status(400).send({ message: 'Ошибка при обновлении профиля пользователя (не полные данные)' });
  }
};

module.exports.updateUserAvatar = (req, res) => {
  const { avatar } = req.body;

  if (avatar) {
    User.findByIdAndUpdate(req.user._id, { avatar })
      .then((user) => {
        if (!user) {
          res.status(404).send({ message: 'Пользователь с указанным ID отсутствует' });
        }

        res.status(200).send({ data: user });
      })
      .catch((err) => res.status(404).send({ message: 'Пользователь с указанным ID отсутствует (задан не корректный ID)' }));
  } else {
    res.status(400).send({ message: 'Ошибка при обновлении аватара пользователя (не задана ссылка)' });
  }
};
