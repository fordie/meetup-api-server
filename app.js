var express = require('express');
var nunjucks = require('nunjucks')
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var express = require('express');
var sassMiddleware = require('node-sass-middleware')
require('dotenv').config();

var indexRouter = require('./routes/index');
var events = require('./routes/events');


// Import the plugin
var nunjucksDate = require('nunjucks-date');
 
// Define a custom default date format. Any valid format works.
// The date format defaults to "YYYY"
// http://momentjs.com/docs/#/displaying/format/
nunjucksDate.setDefaultFormat('MMMM Do YYYY, h:mm:ss a');
 
// Initialize your Nunjucks enironment
var env = new nunjucks.Environment();
nunjucksDate.install(env);


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: false, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

nunjucks.configure('views', {
  autoescape: true,
  express   : app
});

app.use('/', indexRouter);
app.use('/events', events);

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

env.express(app);

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
