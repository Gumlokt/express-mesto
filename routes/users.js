const usersRoutes = require('express').Router();
const { users } = require('../data/users');

// const fs = require('fs');
// const path = require('path');

// const filepath = path.join(__dirname, '../data/users.json');


// const users = fs.readFile(filepath, { encoding: 'utf8' }, (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }


//   return JSON.parse(data);
// });




usersRoutes.get('/users', (req, res) => {
  console.log(`users: ${users}`);
  res.send(users);
  // res.send(JSON.parse(users()));
});


usersRoutes.get('/users/:id', (req, res) => {
  const user = users.find((item) => {
    console.log(req.params.id);
    return item._id === req.params.id;
  });

  if (user) {
    res.send(user);
  } else {
    res.status(404).send({ "message": "Нет пользователя с таким id" });
  }
});


module.exports = usersRoutes;
