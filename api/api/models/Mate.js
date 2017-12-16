var mongoose = require('mongoose');
var MateSchema = new mongoose.Schema({
  name: String,
  producer: String,
  liter: Number,
  price: Number,
  caffeine: Number,
});
mongoose.model('Mate', MateSchema);

module.exports = mongoose.model('Mate');
