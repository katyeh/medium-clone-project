const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { ValidationError } = require('sequelize');
const { environment } = require('./config');
const app = express();
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/api/users');
const responsesRouter = require('./routes/api/responses');
const storiesRouter = require('./routes/api/stories');
const cookieParser = require("cookie-parser");


app.set('view engine', 'pug');
// app.use(cookieParser());
// app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use(express.json());

app.use(indexRouter);
app.use('/api/stories', storiesRouter);
app.use('/api/users', usersRouter);
app.use('/api/responses', responsesRouter);

app.use((req, res, next) => {
  const err = new Error('The requested resource couldn\'t be found.');
  err.errors = ['The requested resource couldn\'t be found.'];
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  if (err instanceof ValidationError) {
    err.errors = err.errors.map(e => e.message);
    err.title = 'Sequelize Error';
  }
  next(err);
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500);
  const acceptHeader = req.get('Accept');
  const isProduction = environment === 'production';

  const errorData = {
    title: err.title || 'Server Error',
    message: err.message,
    stack: isProduction ? null : err.stack,
    errors: err.errors
  };

  if (acceptHeader.includes('text/html')) {
    res.render('errors', errorData);
  } else if (acceptHeader === 'application/json') {
    res.json(errorData);
  } else {
    res.send('Server Error');
  }
});


module.exports = app;
