const path = require('path');
var express = require('express');

const studentController = require('../controllers/student');
var router = express.Router();
console.log(studentController.get_student_data)

router.get('/get_student_form', studentController.get_student_form);

router.post('/post_student_form', studentController.post_student_form);

router.post('/delete_student_form', studentController.delete_student_form);

router.post('/update_student_form', studentController.update_student_form);

router.get('/get_student_data', studentController.get_student_data);
// router.get('/get_student_data', (req, res) => res.send("hi"));
module.exports = router;
