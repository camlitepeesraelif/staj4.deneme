const mongoose = require('mongoose');

const URI ="mongodb+srv://esraelif:1234@stajdeneme.5smrz.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('db connected..!');
};

module.exports = connectDB;