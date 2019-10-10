const Student_Form = require("../models/student");

exports.get_student_form = (req,res,next) => {
  console.log("student");
    res.render('student-form');
}

exports.post_student_form = (req,res,next) => {
    try{
        const student_form  = new Student({
            Date_of_Registration: req.body.date_of_registration,
            Semester: req.body.semester,
            Form_Number: req.body.form_number,
            Id_number_of_student: req.body.id_number,
            Date_of_Birth : req.body.date_of_birth,
            Branch : req.body.branch,
            Name_of_student : req.body.name,
            Postal_address : req.body.postal_address,
            Name_of_institution : req.body.name_of_institution,
            Student_mobile_number : req.body.student_number,
            Blood_group : req.body.blood_group,
            Father_number : req.body.father_number,
            Residence_number : req.body.house_number,
            Route : req.body.route,
            Pick_up_stand : req.body.pick_up_stand,
            Fess_per_sem : req.body.fees,
            Deposit : req.body.deposit,
            Total : (req.body.deposit + req.body.fees),
            Receipt_number : req.body,
        }).save(async (err, student_form) => {
          if (err) {
            console.log("error");
            res.json({success: false, error: err});
            
            return;
          }
          const events = await Event.find({}, '-id').lean();
          console.log("success");
          res.redirect('index');

        });
      }
      catch(err) {
        console.log("error");
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
exports.update_student_form = (req,res,next) => {
  Student_Form.findByIdAndUpdate(
    // the id of the item to find
    req.params.todoId,
    
    // the change to be made. Mongoose will smartly combine your existing 
    // document with this change, which allows for partial updates too
    req.body,
    
    // an option that asks mongoose to return the updated version 
    // of the document instead of the pre-updated one.
    {new: true},
    
    // the callback function
    (err, todo) => {
    // Handle any possible database errors
        if (err) return res.status(500).send(err);
        return res.send(todo);
    }
)
}