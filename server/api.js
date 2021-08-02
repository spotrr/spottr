const express = require('express');
const userController = require('./userController');
const router = express.Router()
const path = require('path')

router.get('/', userController.getEvent,
(req, res) => res.status(200).json([...res.locals.event]));

router.post('/', userController.likeEvent, (req, res) => {
    return res.status(200);
})


module.exports = router;