// import mongoose from 'mongoose';

var userSchema = require('../schemas/user');
var mongoose = require('mongoose');
module.exports = mongoose.model('User', userSchema);

//const User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications