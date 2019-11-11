const Employee_Form = require("../models/employee");
var mongoose = require('mongoose');

exports.get_student_form = (req,res,next) => {
    console.log("student");
      res.render('employee-form');
  }