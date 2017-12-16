var express = require('express');
var bodyParser = require('body-parser');
var Mate = require('../models/Mate');
var MateController = require('../controllers/MateController');
var router = express.Router();
router.use(bodyParser.urlencoded({extended: true}));

router.route('/')
  .post(MateController.createMate)
  .get(MateController.getMates);

router.route('/:id')
  .get(MateController.getMate)
  .delete(MateController.deleteMate)
  .put(MateController.updateMate);

module.exports = router;
