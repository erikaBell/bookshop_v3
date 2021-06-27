// const UserSchema = require('../models/User');
const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({  
  userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
  street: {
    required: true,
    type: String,
    maxLength: 40
  },
  city: {
    required: true,
    type: String,
    maxLength: 30
  },
  state: {
    required: true,
    type: String,
    maxLength: 30
  },
  postalCode: {
    required: true,
    type: String,
    maxLength: 15
  },
  phoneNumber: {
    required: true, 
    type: String,
    maxLength: 35
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

module.exports = Author = mongoose.model('address', AddressSchema);
// module.exports = mongoose.model("User", UserSchema);