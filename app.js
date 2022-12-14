const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('passport');
const rateLimit = require("express-rate-limit");

var cors = require('cors');


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const donutsRouter = require('./routes/api/v1/Donuts');

const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://DonutelloBackend2022:DonutelloBackend2022@donutellobackend.fwcd6xb.mongodb.net/?retryWrites=true&w=majority');

const apiRequestLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: "Je hebt te veel requests uitgevoerd. Probeer het over 15 minuten opnieuw."
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(apiRequestLimiter);
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
//app.use('/api/v1/donuts', passport.authenticate('jwt', {session: false}), donutsRouter);
app.use('/api/v1/donuts', donutsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
