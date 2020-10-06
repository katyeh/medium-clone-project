const express = require('express');
const morgan = require('morgan');

const app = express();
const storiesRouter = require('./routes/stories');

app.use(morgan('dev'));
app.use(express.json());
app.use('/stories', storiesRouter);










module.exports = app;
