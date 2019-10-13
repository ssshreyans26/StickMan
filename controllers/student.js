const Student_Form = require("../models/student");
var mongoose = require('mongoose');

exports.get_student_data = async (req, res , next) => {  
  // const user = await Student_Form.find({}).lean();   
  //  //res.json(student);
  //  await res.render('student_data',{user});
  // }
  Student_Form.find({},async function (err, user) {
    // console.log(user);
    await res.render('student_data',{user:user});
    
});
}


exports.get_student_form = (req,res,next) => {
  console.log("student");
    res.render('student-form');
}



exports.post_student_form = (req,res,next) => {
    try{
        const Student_form  = new Student_Form({
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
            Receipt_number : 123,
        }).save(async (err, Student_form) => {
          if (err) {
            console.log(err);
            console.log("error");
            console.log(Student_form);
            res.json({success: false, error: err});
            
            return;
          }
          Student_Form.find({}, function (err, user) {
            console.log(user);
            
        });
    
    });
        console.log("success");
      }
      catch(err) {
        console.log(err);
        console.log(req.body);
        console.log("error");
        res.json({success: false, error: err});
      }
}



exports.delete_student_form = (req, res, next) => {
console.log("inside delete")
var id = mongoose.Types.ObjectId(req.params.id);
    Student_Form.findByIdAndRemove(id, (err, todo) => {
        if (err) return res.status(500).send(err);
        const response = {
            message: "Student Data  deleted successfully ",
            id: todo._id
        };
        return res.status(200).send(response);
    });
  }



exports.update_student_form = (req,res,next) => {
  console.log(req.params.id);
  var id = mongoose.Types.ObjectId(req.params.id);
  Student_Form.findByIdAndUpdate(
    // the id of the item to find
    id,
    
    // the change to be made. Mongoose will smartly combine your existing 
    // document with this change, which allows for partial updates too
    req.body,
    {new: true},
    
    // the callback function
    (err, todo) => {
    // Handle any possible database errors
        if (err) return res.status(500).send(err);
        return res.send(todo);
    }
)
}