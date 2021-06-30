require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const morgan = require("morgan");

const cors = require('cors');

const app = express();

//Import Routes
const authors = require('./routes/author');
const books = require('./routes/book');
const users = require('./routes/user');
const cart = require('./routes/cart');
const auth = require('./routes/auth');

const { db } = require('./models/User');

// Connect Database
connectDB();

app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use(morgan("tiny"));
app.use(express.json())
app.use('/api', users)
app.use('/api', auth)
app.use('/api', authors)
app.use('/api', books)
app.use('/api', cart)
app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server running on port ${port}`));