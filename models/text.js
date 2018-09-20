const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const text = new Schema(
  {
    header: String,
    body: String
  },
  {
    timestamps: true
  }
);

text.set('toJSON', {
  virtuals: true
});

module.exports = mongoose.model('TextModel', text);
