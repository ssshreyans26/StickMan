const path = require('path');
var express = require('express');

const userController = require('../controllers/user');
var router = express.Router();

router.get('/', userController.user);

module.exports = router;
