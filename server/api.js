const express = require('express');
const userController = require('./userController');
const authController = require('./authController');
const router = express.Router();
const path = require('path');

router.get('/', userController.getEvent, (req, res) =>
  res.status(200).json([...res.locals.event])
);

router.post('/', userController.likeEvent, (req, res) => {
  return res.status(200);
});

router.post('/delete', userController.deleteEvent, (req, res) => {
  return res.status(200);
});

// Authenticates google token and adds new user
router.post('/google/auth', authController.authToken, (req, res) => {
  res.status(200).json(res.locals.data);
});

//Updates the user information with the signup form info
router.post('/form', userController.updateUser, (req, res) => {
  res.status(200).json(res.locals.data);
});

module.exports = router;
