const express = require('express');
const connectDB = require('./config/db');
const morgan = require("morgan");
const cors = require('cors');

const app = express();

const authors = require('./routes/author');
const books = require('./routes/book');
const users = require('./routes/user');

// Connect Database
connectDB();

app.use(cors({ origin: true, credentials: true }));
app.use(morgan("tiny"));
app.use(express.json())
app.use('/api', authors)
app.use('/api', books)
app.use('/api', users)
app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server running on port ${port}`));