const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeFormSchema = new Schema({
      Joining_date: { type: Date, required: false },
      Marital_status: { type: Boolean, required: false},
      Emergency_contact: { type: Number, required: false },
      Employee_number: { type: Number, required: false },
      Date_of_Birth : { type: Date, required: false },
      Name : { type: String, required: false },
      Postal_address : { type: String, required: false },
      Pin_Code : {type: Number, required: false},
      Post : { type: String, required: false },
      Mobile_number : { type: Number, required: false },
      Gender : {type: String, required: false},
      Salary: {type:Number,required:false},
      License_number:{type:String,required:false},
      Assigned_route: {type:String,required:false},
      Assigned_organisation: {type:String,required:false},
      Vehicle_number: {type:String,required:false},
      files: [{
          fileId: {type:String,required:false},
          filename: {type:String,required:false}
      }]                                
});

module.exports = mongoose.model('employee_form', employeeFormSchema);