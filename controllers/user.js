const User = require("../models/user");
var mongoose = require('mongoose');
var passport = require("passport");
var localStrategy = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
exports.user = (req, res, next) => {
    res.send('respond with a resource');
  };

exports.get_register = (req,res,next) => {
  res.render("register");
}

exports.post_register = (req,res,next) => {
  User.register(new User({username:req.body.username}),req.body.password,function(err,user){
    if(err){
        console.log(err);
        return res.render(err);
    }
    passport.authenticate("local")(req,res,function(){
        res.redirect("/users/get_secret");
    });
});
}

exports.get_login = (req, res,next) =>{
  res.render("login");
}

exports.get_secret = (req, res , next ) =>{
  res.render("secret");
}


exports.post_login = (req, res,next) => {
  console.log("inside post login")
  // passport.authenticate("local",{
  //   successRedirect:("/users/get_login"),
  //   failureRedirect:("/users/get_login")
  // });
  // passport.authenticate('local', { failureRedirect: '/users/get_login' }),
  //   function(req, res) {
  //   res.redirect('/users/get_secret');
  //   console.log("success");
  // }
  passport.authenticate('local')(req, res, function () {
    res.redirect('/users/get_secret');
});
}

exports.get_logout = (req,res,next) => {
  req.logOut();
  res.redirect("/");
}

function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
      return next();
  }
  res.redirect("/login");
}