
// const User = require('../models/User');
const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    //TODO: should books ref: "Book" ? 
    books: [
      {
        bookId: Number,
        title: String,
        img: String,
        price: Number
      }
    ],
    active: {
      type: Boolean,
      default: true
    },
    modifiedOn: {
      type: Date,
      default: Date.now
    }
  },

  { timestamps: true }
);

module.exports = mongoose.model("cart", CartSchema);
// module.exports = mongoose.model("User", UserSchema);