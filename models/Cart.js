
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
        quantity: Number,
        title: String,
        img: String,
        price: Number
      }
    ],
    total: {
            type: Number,
            required: true,
            default: 0
    },
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