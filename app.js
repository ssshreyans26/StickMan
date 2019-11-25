var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var employeeRouter = require('./routes/employee');
var studentRouter = require('./routes/student');
const bodyParser = require('body-parser');
var passport = require("passport");
var multer =require("multer");
var gridFsStorage =require("multer-gridfs-storage");
var grid =require("gridfs-stream");
var User =require("./models/user");
var localStrategy = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");
//const PORT = 3000;
var mongo = require('mongodb');
mongoose.set('useFindAndModify',false); 
var app = express();


app.use(require("express-session")({
  secret:"Rusty is a Dog",
  resave:false,
  saveUninitialized:false

}));


// var multer = require('multer');
// var GridFsStorage = require('multer-gridfs-storage');
// var Grid = require('gridfs-stream');
// Grid.mongo = mongoose.mongo;
// var gfs = Grid(conn.db);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/student' ,studentRouter)
app.use('/employee' ,employeeRouter)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.send(err);
});

//Mongo URI
const mongoURI = "mongodb://localhost/file_upload_1";
//Mongo connection
const conn = mongoose.createConnection(mongoURI);

mongoose
  .connect(
//'mongodb+srv://admin:admin@cluster0-szwuh.mongodb.net/admin?retryWrites=true&w=majority'
'mongodb://localhost:27017/stickman'
  )
  .then(result => {
    console.log("Mongodb connection made.")
  })
  .catch(err => {
    console.log(err);
  });

// app.listen(PORT, function(e) {
//   console.log("App listening in port "+PORT)
// })


let gfs;

conn.once("open",()=>{
    //init stream
    gfs=grid(conn.db,mongoose.mongo);
    gfs.collection("file_upload_1");
});

//Create Storage Engine
const storage =new gridFsStorage({
    url:mongoURI,
    file:(req,file)=>{
        return new Promise((resolve,reject)=>{
            const filename =file.originalname;
            const fileInfo ={
                filename:filename,
                bucketName:"file_upload_1"
            }
            resolve(fileInfo);
        });
        
    }
});

const upload =multer({storage});




module.exports = app;
