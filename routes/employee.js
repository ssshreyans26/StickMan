const path = require('path');
var express = require('express');

const employeeController = require('../controllers/employee');
var router = express.Router();

router.get('/get_employee_form',employeeController.get_employee_form);

router.post('/post_employee_form',employeeController.post_employee_form);

module.exports = router;
