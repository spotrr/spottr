const express = require('express');
const userController = require('./userController');
const router = express.Router()
const path = require('path')
// const index = path.join(__dirname, '../client/index.html');
// router.get('/', userController.getUser,
// (req, res) => res.status(200).json(res.locals.user));

//changed from event to main
router.get('/', userController.getEvent,
(req, res) => res.status(200).json([...res.locals.event]));



module.exports = router;