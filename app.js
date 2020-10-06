const express = require('express');
const morgan = require('morgan');
const usersRouter = require('./routes/api/users');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/users', usersRouter);

module.exports = app;