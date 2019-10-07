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

exports.delete_student_form = (req, res, next) => {
    //console.log(req.body.data)
    var id = req.body.data;
    Student_Form.findByIdAndRemove(req.params.todoId, (err, todo) => {
        // As always, handle any potential errors:
        if (err) return res.status(500).send(err);
        // We'll create a simple object to send back with a message and the id of the document that was removed
        // You can really do this however you want, though.
        const response = {
            message: "Student Data  deleted successfully ",
            id: todo._id
        };
        return res.status(200).send(response);
    });
  }