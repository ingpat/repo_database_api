var mongoose = require('mongoose');

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1 
    //, index: { unique: true }
  }
});

module.exports = {User} 
