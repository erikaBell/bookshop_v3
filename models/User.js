// const CartSchema = require('../models/Cart');
const mongoose = require('mongoose');


//TODO: add validator for: username, password, email
// https://mongoosejs.com/docs/api.html#schematype_SchemaType-validate

const UserSchema = new mongoose.Schema({

    username: {
      type: String,
      minLength: [4, 'Username too short.'],
      maxLength: 15,
      unique: true,
      trim: true,
      required: true,
      lowercase: true
    },
    password: {
      type: String,
      minLength: [8, 'Password too short.'],
      maxLength: 20,
      trim: true,
      required: true
    },
    firstName:{
        type: String,
        trim: true,
        minLength: 2,
        maxLength: 20,
        required: [true, 'Please provide a first name.']
    },
    lastName: {
        type: String,
        trim: true,
        minLength: 2,
        maxLength: 20,
        required: [true, 'Please provide a last name.']
    },
    email: {
        type: String,
        trim: true,
        maxLength: 30,
        required: true,
        unique: [true, 'Please provide your e-mail.']
    },
    isAdmin: {
        type: Boolean,
        default: false,
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
    addressId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address'
    },
    cartId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cart"
    }
});

// module.exports = mongoose.model("cart", CartSchema);
module.exports = User = mongoose.model('user', UserSchema);