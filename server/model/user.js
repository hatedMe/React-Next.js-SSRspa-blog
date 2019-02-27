const mongoose = require('mongoose');


let user = new mongoose.Schema({
  name: String,
  displayName: String,
  password: String,
  email: String
},{ versionKey: false })





let User = mongoose.model('users', user , 'users');

module.exports = User;