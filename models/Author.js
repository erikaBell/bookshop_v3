// const BookSchema = require('../models/Book');
const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
  fullName: {
    type: String,
    maxLength: 45,
    required: true,
    unique: [true, 'This book title already exists.']
  },
  description: {
    type: String
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  updatedDate: {
    type: Date,
    default: Date.now
  },
  books: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    }]
});

// module.exports = Book = mongoose.model('Book', BookSchema);
module.exports = Author = mongoose.model('author', AuthorSchema);