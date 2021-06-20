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
        name: String,
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

module.exports = mongoose.model("Cart", CartSchema);