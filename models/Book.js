const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    img:{
        type: String
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    feature: {
        type: Boolean,
        default: false
    },
    price: {
        type: Number,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    updatedDate: {
        type: Date,
        default: Date.now
    },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    }
});

module.exports = Book = mongoose.model('book', BookSchema);