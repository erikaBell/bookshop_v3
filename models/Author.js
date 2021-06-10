const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
  _id: new mongoose.Schema.Types.ObjectId,

  firstName: {
    type: String,
    maxLength: 30,
    required: true
  },
  lastName: {
    type: String,
    maxLength: 30
  },
  description: {
    type: Date
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  updatedDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = Author = mongoose.model('author', AuthorSchema);