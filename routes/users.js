var express = require('express');
const path = require('path');
const userController = require('../controllers/user');
var router = express.Router();

router.get('/', userController.user);

module.exports = router;
