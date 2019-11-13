const path = require('path');
var express = require('express');

const userController = require('../controllers/user');
var router = express.Router();

router.get('/', userController.user);

router.get('/get_register',userController.get_register);

router.post('/post_register',userController.post_register);

router.get('/get_login',userController.get_login);

router.post('/post_login',userController.post_login);

router.get('/logout' , userController.get_logout);

module.exports = router;
