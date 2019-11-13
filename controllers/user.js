const User = require("../models/user");
var mongoose = require('mongoose');

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
        res.redirect("/secret");
    });
});
}

exports.get_login = (req, res,next) =>{
  res.render("login");
}


exports.post_login = (req, res,next) => {
  passport.authenticate("local",{
    successRedirect:"/secret",
    failureRedirect:"/login"
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