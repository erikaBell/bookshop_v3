const mongoose = require('mongoose');
const config = require('config');
const bodyParser = require('body-parser');
require('dotenv').config();
// const db = config.get('mongoURI');

const connectDB = async () => {
  try {
      await mongoose.connect( process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true, //newly added 
        useFindAndModify: false
      }
    );
    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;