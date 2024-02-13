require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
require('./passport/passport');
const passport = require('passport');
const configs = require('./configs');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(require('cors')());
app.use(require('morgan')('dev'));
app.use(passport.initialize());

// Connect to MongoDB
mongoose.connect(configs.dbURL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use('/auth', require('./routes/auth'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
