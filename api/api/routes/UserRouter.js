var express = require('express');
var bodyParser = require('body-parser');
var User = require('../models/User');
var UserController = require('../controllers/UserController');
var router = express.Router();
router.use(bodyParser.urlencoded({extended: true}));

router.route('/')
  .post(UserController.createUser)
  .get(UserController.getUsers);

router.route('/:id')
  .get(UserController.getUser)
  .delete(UserController.deleteUser)
  .put(UserController.updateUser);

module.exports = router;
