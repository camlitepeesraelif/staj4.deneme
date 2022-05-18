const mongoose = require('mongoose');

const user = new mongoose.Schema({
    ıd: {
        type: String
      },
    Name: {
    type: String
  },
  SurName: {
    type: String
  }
});

module.exports = User = mongoose.model('user', user);