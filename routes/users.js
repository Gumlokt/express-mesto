const usersRoutes = require('express').Router();
const { getUser, getUsers, createUser } = require('../controllers/users');

usersRoutes.get('/users/:userId', getUser);

usersRoutes.get('/users', getUsers);

usersRoutes.post('/users', createUser);

module.exports = usersRoutes;
