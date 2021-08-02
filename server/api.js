const express = require('express');
const userController = require('./userController');
const authController = require('./authController');
const router = express.Router()

router.get('/', userController.getUser,
(req, res) => res.status(200).json(res.locals.user));

router.get('/', userController.getEvent,
(req, res) => res.status(200).json([...res.locals.event]));

router.post('/google/auth', authController.authToken, authController.userCheck, (req, res) => {
  if (res.locals.newUser) res.status(200).redirect('/signup')
  res.status(200).redirect('/mainpage');
});





module.exports = router;