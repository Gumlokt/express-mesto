const usersRoutes = require('express').Router();
const {
  getUser,
  getUsers,
  createUser,
  updateUserProfile,
  updateUserAvatar,
} = require('../controllers/users');

usersRoutes.get('/users/:userId', getUser);

usersRoutes.get('/users', getUsers);

usersRoutes.post('/users', createUser);

usersRoutes.patch('/users/me', updateUserProfile);

usersRoutes.patch('/users/me/avatar', updateUserAvatar);

module.exports = usersRoutes;
