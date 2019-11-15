const Employee_Form = require("../models/employee");
var mongoose = require('mongoose');
var multer =require("multer");
var gridFsStorage =require("multer-gridfs-storage");
var grid =require("gridfs-stream");
//Mongo URI
const mongoURI = "mongodb://localhost/stickman";
//Mongo connection
const conn = mongoose.createConnection(mongoURI);
let gfs;
mongoose.connect(
//'mongodb+srv://admin:admin@cluster0-szwuh.mongodb.net/admin?retryWrites=true&w=majority'
'mongodb://localhost:27017/stickman'
  )
  .then(result => {
    console.log("Mongodb connection made.")
  })
  .catch(err => {
    console.log(err);
  });

conn.once("open",()=>{
    //init stream
    gfs=grid(conn.db,mongoose.mongo);
    gfs.collection("upload");
});
const storage = new gridFsStorage({
  url:mongoURI,
  file:(req,file)=>{
      return new Promise((resolve,reject)=>{
          const filename =file.originalname;
          const fileInfo ={
              filename:filename,
              bucketName:"upload"
          }
          resolve(fileInfo);
      });
      
  }
});

const upload =multer({storage});

exports.get_employee_form = (req,res,next) => {
    console.log("employee");
      res.render('employee-form');
  }

exports.post_employee_form =  upload.fields([ { name: 'Aadhar_card', maxCount: 1 },{ name: 'License_file', maxCount: 1 },{ name: 'Profile_Picture', maxCount: 1 }]),(req,res,next) => {
      try{
        const Employee_form = new Employee_Form({
          Joining_date: req.body.Joining_date,
          Marital_status: req.body.Marital_status,
          Emergency_contact: req.body.Emergency_contact,
          Employee_number: req.body.Employee_number,
          Date_of_Birth : req.body.Date_of_Birth,
          Name : req.body.Name,
          Postal_address : req.body.Postal_address,
          Pin_Code : req.body.Pin_Code,
          Post : req.body.Post,
          Mobile_number : req.body.Mobile_number,
          Gender : req.body.Gender,
          Salary: req.body.Salary,
          License_number:req.body.License_number,
          Assigned_route: req.body.Assigned_route,
          Assigned_organisation: req.body.Assigned_organisation,
          Vehicle_number: req.body.Vehicle_number
        }).save(async (err, Employee_form) => {
          if (err) {
            console.log(err);
            console.log("error");
            console.log(Student_form);
            res.json({success: false, error: err});
            
            return;
          }
          
          Employee_Form.find({}, function (err, user) {
            console.log(user);
            
        });
        
        console.log(req.file);
    
    });
        console.log("success");
      }
      catch(err) {
        console.log(err);
        console.log(req.body);
        console.log("error");
        res.json({success: false, error: err});
      }
      ;
      }
