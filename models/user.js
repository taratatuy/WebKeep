const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
  login: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});
