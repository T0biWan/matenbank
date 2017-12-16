var express = require('express');
var bodyParser = require('body-parser');
var User = require('../models/User');
var router = express.Router();
router.use(bodyParser.urlencoded({extended: true}));

// CREATES A NEW USER
exports.createUser = function(req, res) {
  User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    },
    function(err, user) {
      if (err) return res.status(500).send("There was a problem adding the information to the database.");
      res.status(200).send(user);
    });
};

// RETURNS ALL THE USERS IN THE DATABASE
exports.getUsers = function(req, res) {
  User.find({}, function(err, users) {
    if (err) return res.status(500).send("There was a problem finding the users.");
    res.status(200).send(users);
  });
};

// GETS A SINGLE USER FROM THE DATABASE
exports.getUser = function(req, res) {
  User.findById(req.params.id, function(err, user) {
    if (err) return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(404).send("No user found.");
    res.status(200).send(user);
  });
};

// DELETES A USER FROM THE DATABASE
exports.deleteUser = function(req, res) {
  User.findByIdAndRemove(req.params.id, function(err, user) {
    if (err) return res.status(500).send("There was a problem deleting the user.");
    if (!user) return res.status(404).send("No user found.");
    res.status(200).send("User " + user.name + " was deleted.");
  });
};

// UPDATES A SINGLE USER IN THE DATABASE
exports.updateUser = function(req, res) {
  User.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  }, function(err, user) {
    if (err) return res.status(500).send("There was a problem updating the user.");
    if (!user) return res.status(404).send("No user found.");
    res.status(200).send(user);
  });
};
