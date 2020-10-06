const express = require('express');
const morgan = require('morgan');


const { ValidationError } = require('sequelize');
const { environment } = require('./config');

const usersRouter = require('./routes/api/users');


const app = express();

app.use(morgan('dev'));
app.use(express.json());


app.use('/users', usersRouter);


app.use((req, res, next) => {
  const err = new Error('The requested resource couldn\'t be found.');
  err.errors = ['The requested resource couldn\'t be found.'];
  err.status = 404;
  next(err);
})

app.use((err, req, res, next) => {
  if (err instanceof ValidationError) {
    err.errors = err.errors.map(e => e.message);
    err.title = 'Sequelize Error';
  }
  next(err);
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500);
  const acceptHeader = req.get('Accept');

  const isProduction = environment === 'production';

  const errorData = {
    title: err.title || 'Server Error',
    message: err.message,
    stack: isProduction ? null : err.stack
  };

  if (acceptHeader === 'text/html') {
    res.render('errors', errorData);
  } else if (acceptHeader === 'application/json') {
    res.json(errorData);
  } else {
    res.send('Server Error');
  }
});

module.exports = app;