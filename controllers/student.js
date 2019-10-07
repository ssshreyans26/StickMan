const Student_Form = require("../models/student");

exports.get_student_form = (req,res,next) => {
    res.render('<filename>');
}

exports.post_student_form = (req,res,next) => {
    try{
        const student_form  = new Student({
            Date_of_Registration: req.body,
            Semester: req.body,
            Form_Number: req.body,
            Id_number_of_student: req.body,
            Date_of_Birth : req.body,
            Branch : req.body,
            Name_of_student : req.body,
            Postal_address : req.body,
            Name_of_institution : req.body,
            Student_mobile_number : req.body,
            Blood_group : req.body,
            Father_number : req.body,
            Residence_number : req.body,
            Route : req.body,
            Pick_up_stand : req.body,
            Fess_per_sem : req.body,
            Deposit : req.body,
            Total : req.body,
            Receipt_number : req.body,
        }).save(async (err, student_form) => {
          if (err) {
            res.json({success: false, error: err});
            return;
          }
          const events = await Event.find({}, '-id').lean();
          res.redirect('<filename>');
        });
      }
      catch(err) {
        res.json({success: false, error: err});
      }
}

