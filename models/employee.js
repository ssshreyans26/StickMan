const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeFormSchema = new Schema({
      Joining_date: { type: Date, required: true },
      Marital_status: { type: Boolean, required: false},
      Emergency_contact: { type: Number, required: true },
      Employee_number: { type: Number, required: true },
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
});

module.exports = mongoose.model('employee_form', employeeFormSchema);