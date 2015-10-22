var express      = require('express');
var path         = require('path');
var favicon      = require('serve-favicon');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var mongo        = require('mongodb');
var db_username  = process.env.DB_USER;
var db_password  = process.env.DB_USER;
var db           = require('monk')(db_username + ':' + db_password + '@ds033217.mongolab.com:33217/zelda-bingo');

var routes = require('./routes/index');
var app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon(__dirname + '/public/images/favicon.png'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Make our db accessible to our router
app.use(function(req,res,next) {
	req.db = db;
	next();
});

// Add routes
app.use('/', routes);

// Catch 404 and forwarding to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// Make HTML pretty
app.locals.pretty = true;

// Error handlers

// Development error handler (will print stacktrace)
if (app.get('env') === 'development') {
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	});
}

// Production error handler (no stacktraces leaked to user)
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});

// Import the bingo JavaScript so that we can calculate boards later on
var fs = require('fs');
var vm = require('vm');
var includeInThisContext = function(path) {
	var code = fs.readFileSync(path);
	vm.runInThisContext(code, path);
}.bind(this);
includeInThisContext(__dirname + '/js/seedrandom-min.js');
includeInThisContext(__dirname + '/js/goallist_v8.4.js');
includeInThisContext(__dirname + '/js/generator_v8.2.js');

module.exports = app;
