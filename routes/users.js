var express = require('express');
const path = require('path');
const userController = require('../controllers/user');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', userController.user);

module.exports = router;
