var Router = function()
{
	// Raw dependencies
	var express			= require('express')
	,	bodyParser		= require('body-parser')
	,	cookieParser	= require('cookie-parser')
	,	session			= require('express-session')
	,	gaikan			= require('gaikan')
	,	fs				= require('fs');

	// Create application
	this.app = express();
	this.app.use(bodyParser.urlencoded());
	this.app.use(cookieParser());
	this.app.use(session(
	{
		secret: "1234567ABC",
		name: "SlumpaStrumpaSession"
	}));
	this.app.use('/static', express.static(__dirname + '/static'))
	this.app.use(function (request, response, next)
	{
		response.locals.session = request.session;
		next();
	});

	// Set up view engine
	gaikan.options.layout = 'app/layout';
	this.app.engine('html', gaikan);
	this.app.set('view engine', '.html');
	this.app.set('views', __dirname + '/modules');

	// Log requests
	this.app.use(function(request, response, next)
	{
		console.log(request.method + ' ' + request.path);
		next();
	});
};

// Listens on given port
Router.prototype.listen = function(port)
{
	this.app.listen(port);
}

// Provide GET request handlers
Router.prototype.get = function(path, handler)
{
	this.app.get(path, handler);
}

// Provide POST request handlers
Router.prototype.post = function(path, handler)
{
	this.app.post(path, handler);
}

module.exports = Router;
