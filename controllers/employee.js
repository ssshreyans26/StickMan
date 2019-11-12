const Employee_Form = require("../models/employee");
var mongoose = require('mongoose');

exports.get_employee_form = (req,res,next) => {
    console.log("employee");
      res.render('employee-form');
  }

exports.post_employee_form = (req,res,next) => {
      try{
        const Employee_Form = new Employee_Form({
          Joining_date: req.body.Joining_date,
          Marital_status: req.body.Marital_status,
          Emergency_contact: req.body.Emergency_contact,
          Employee_number: req.body.Employee_number,
          Date_of_Birth : { type: Date, required: true },
          Name : { type: String, required: true },
          Postal_address : { type: String, required: true },
          Pin_Code : {type: Number, required: true},
          Post : { type: String, required: true },
          Mobile_number : { type: Number, required: true },
          Gender : {type: String, required: true},
          Salary: {type:Number,required:true},
          License_number:{type:String,required:false},
          Assigned_route: {type:String,required:false},
          Assigned_organisation: {type:String,required:false},
          Vehicle_number: {type:String,required:false}
        })
      }
}