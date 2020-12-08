const usersRoutes = require('express').Router();
const path = require('path');
const { readFile } = require('../data/readFile');

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = readFile(usersFilePath);

usersRoutes.get('/users', (req, res) => {
  res.send(users);
});

usersRoutes.get('/users/:id', (req, res) => {
  const user = users.find((item) => {
    const result = item._id === req.params.id;
    return result;
  });

  if (user) {
    res.send(user);
  } else {
    res.status(404).send({ message: 'Нет пользователя с таким id' });
  }
});

module.exports = usersRoutes;
