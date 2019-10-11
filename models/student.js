const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentFormSchema = new Schema({
      Date_of_Registration: { type: Date, required: false },
      Semester: { type: Number, required: false },
      Form_Number: { type: Number, required: false },
      Id_number_of_student: { type: String, required: false },
      Date_of_Birth : { type: Date, required: false },
      Branch : { type: String, required: false },
      Name_of_student : { type: String, required: false },
      Postal_address : { type: String, required: false },
      Name_of_institution : { type: String, required: false },
      Student_mobile_number : { type: Number, required: false },
      Blood_group : { type: String, required: false },
      Father_number : { type: String, required: false },
      Residence_number : { type: String, required: false },
      Route : { type: String, required: false },
      Pick_up_stand : { type: String, required: false },
      Fess_per_sem : { type: Number, required: false },
      Deposit : { type: Number, required: false },
      Total : { type: Number, required: false },
      Receipt_number : { type: Number, required: false },

});

module.exports = mongoose.model('student_form', studentFormSchema);