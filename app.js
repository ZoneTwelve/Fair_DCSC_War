var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var helmet = require('helmet');

var index = require('./routes/index');
var xssgame = require('./routes/xssgame');
var webHacker = require('./routes/webHacker');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.disable('x-powered-by');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(helmet());

app.use(session({
	secret: 'recommand 128 bytes random string',
	cookie: { maxAge: 2 * 60 * 60 * 1000 }
}));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/xss-game', xssgame);
app.use('/web-security', webHacker);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	var errMsg = err.message.replace(/C:\\Users\\ZTF/g,"")+"\r\n\t"+"|||發生錯誤|||,若此錯誤造成遊戲無法正常運行,請告知服務的同學";
	res.locals.message = errMsg;
	if(err.message!="Not Found"){	  
		console.log(err,err.message)
	}
	res.locals.error = req.app.get('env') === 'development' ? errMsg : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
