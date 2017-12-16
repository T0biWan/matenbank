var express = require('express');
var bodyParser = require('body-parser');
var Mate = require('../models/Mate');
var router = express.Router();
router.use(bodyParser.urlencoded({extended: true}));

exports.createMate = function(req, res) {
  Mate.create({
      name: req.body.name,
      producer: req.body.producer,
      liter: req.body.liter,
      price: req.body.price,
      caffeine: req.body.caffeine
    },
    function(err, mate) {
      if (err) return res.status(500).send("There was a problem adding the information to the database.");
      res.status(200).send(mate);
    });
};

exports.getMates = function(req, res) {
  Mate.find({}, function(err, mates) {
    if (err) return res.status(500).send("There was a problem finding the mates.");
    res.status(200).send(mates);
  });
};

exports.getMate = function(req, res) {
  Mate.findById(req.params.id, function(err, mate) {
    if (err) return res.status(500).send("There was a problem finding the mate.");
    if (!mate) return res.status(404).send("No mate found.");
    res.status(200).send(mate);
  });
};

exports.deleteMate = function(req, res) {
  Mate.findByIdAndRemove(req.params.id, function(err, mate) {
    if (err) return res.status(500).send("There was a problem deleting the mate.");
    if (!mate) return res.status(404).send("No mate found.");
    res.status(200).send("Mate " + mate.name + " was deleted.");
  });
};

exports.updateMate = function(req, res) {
  Mate.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  }, function(err, mate) {
    if (err) return res.status(500).send("There was a problem updating the mate.");
    if (!mate) return res.status(404).send("No mate found.");
    res.status(200).send(mate);
  });
};
