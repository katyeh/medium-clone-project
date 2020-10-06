const express = require('express');
const morgan = require('morgan');
const usersRouter = require('./routes/api/users');

const app = express();
const storiesRouter = require('./routes/stories');

app.use(morgan('dev'));
app.use(express.json());
app.use('/stories', storiesRouter);










app.use('/users', usersRouter);

module.exports = app;