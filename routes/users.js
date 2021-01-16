const usersRoutes = require('express').Router();
// const path = require('path');
// const getDataFromFile = require('../helpers/files');

const { getUser, getUsers, createUser } = require('../controllers/users');

// const usersFilePath = path.join(__dirname, '..', 'data', 'users.json');
// const getUsers = getDataFromFile(usersFilePath);

// usersRoutes.get('/users', (req, res) => {
//   getUsers
//     .then((users) => {
//       res.status(200).send(users);
//     })
//     .catch((err) => {
//       res.status(400).send(err);
//     });
// });

// usersRoutes.get('/users/:id', (req, res) => {
//   getUsers
//     .then((users) => {
//       const user = users.find((item) => item._id === req.params.id);

//       if (user) {
//         res.status(200).send(user);
//       } else {
//         res.status(404).send({ message: 'Нет пользователя с таким id' });
//       }
//     })
//     .catch((err) => {
//       res.status(400).send(err);
//     });
// });

usersRoutes.get('/users/:id', getUser);

usersRoutes.get('/users', getUsers);

usersRoutes.post('/users', createUser);

module.exports = usersRoutes;
