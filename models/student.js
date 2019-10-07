const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentFormSchema = new Schema({
      Date_of_Registration: { type: Date, required: true },
      Semester: { type: Number, required: true },
      Form_Number: { type: Number, required: true },
      Id_number_of_student: { type: String, required: true },
      Date_of_Birth : { type: Date, required: true },
      Branch : { type: String, required: true },
      Name_of_student : { type: String, required: true },
      Postal_address : { type: String, required: true },
      Name_of_institution : { type: String, required: true },
      Student_mobile_number : { type: Number, required: true },
      Blood_group : { type: String, required: true },
      Father_number : { type: String, required: true },
      Residence_number : { type: String, required: true },
      Route : { type: String, required: true },
      Pick_up_stand : { type: String, required: true },
      Fess_per_sem : { type: Number, required: true },
      Deposit : { type: Number, required: true },
      Total : { type: Number, required: true },
      Receipt_number : { type: Number, required: true },

});

module.exports = mongoose.model('student_form', studentFormSchema);