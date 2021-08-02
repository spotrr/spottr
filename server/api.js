const express = require('express');
const userController = require('./userController');
const router = express.Router();
const path = require('path');
const authController = require('./authController');

//changed from event to main
router.get('/', userController.getEvent, (req, res) =>
  res.status(200).json([...res.locals.event])
);

// Authenticates google token and adds new user
router.post('/google/auth', authController.authToken, (req, res) => {
  res.status(200).json(res.locals.data);
});

//Updates the user information with the signup form info
router.post('/form', userController.updateUser, (req, res) => {
  res.status(200).json(res.locals.data);
});

module.exports = router;
