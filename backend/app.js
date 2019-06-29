var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var login = require('./routes/login');
var signUp = require('./routes/signUp');
var users = require('./routes/users');
var show = require('./routes/show');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var basket = require('./routes/basket');
var buy = require('./routes/buy');
var list = require('./routes/list');
var mybag = require('./routes/mybag');
var input = require('./routes/input');
var public = require('./routes/public');
var app = express();
app.use(require('connect-history-api-fallback')());


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/', routes);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
//app.use('/index', indexRouter);
//app.use('/users', usersRouter);
app.use('/api/login', login);
app.use('/api/signUp', signUp);
app.use('/api/mypage', users);
app.use('/api/list', list);
app.use('/api/show', show);
app.use('/api/buy', buy);
app.use('/api/basket', basket);
app.use('/api/mybag', mybag);
app.use('/api/input', input);
app.use('/api/public', public);

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
