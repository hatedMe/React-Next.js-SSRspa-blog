const mongoose = require('mongoose');


let user = new mongoose.Schema({
  name: String,
  displayName: String,
  password: String,
  email: String
})





let User = mongoose.model('user', user);

module.exports = User;