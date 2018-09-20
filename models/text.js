const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var text = new Schema(
  {
    text: String
  },
  {
    timestamps: true
  }
);

text.set('toJSON', {
  virtuals: true
});

module.exports = mongoose.model('TextModel', text);
