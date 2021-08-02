const express = require('express');
const userController = require('./userController');
const router = express.Router()
const path = require('path')
const authController = require('./authController');


//changed from event to main
router.get('/', userController.getEvent,
(req, res) => res.status(200).json([...res.locals.event]));

router.post('/google/auth', authController.authToken, (req, res) => {
  // if it's a new user, redirect to signup form
  return res.status(200).json(res.locals.googleInfo);
  // if an existing user, redirect to main page
  // res.status(200).redirect('/main');
});

router.get('/signup', (req, res) => {


})


module.exports = router;