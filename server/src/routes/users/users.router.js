const express = require('express');
const userRouter = express.Router();
const {
  httpCreateUser,
  httpDeleteUser,
  httpUpdateUser,
  httpGetAllUsers,
  httpSignInUser,
} = require('./users.controller');

userRouter.get('/', httpGetAllUsers);
userRouter.post('/signup', httpCreateUser);
userRouter.post('/signin', httpSignInUser);
userRouter.put('/id', httpUpdateUser);
userRouter.delete('/:id', httpDeleteUser);

module.exports = userRouter;
