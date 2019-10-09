const path = require('path');
var express = require('express');

const studentController = require('../controllers/student');
var router = express.Router();

router.get('/get_student_form', studentController.get_student_form);

router.post('/post_student_form', studentController.post_student_form);

router.post('/delete_student_form', studentController.delete_student_form);

router.post('/update_student_form', studentController.update_student_form);

module.exports = router;
