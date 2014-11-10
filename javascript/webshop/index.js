var express = require('express')
,	bodyParser = require('body-parser')
,	cookieParser = require('cookie-parser')
,	session = require('express-session')
,	gaikan = require('gaikan')
,	fs = require('fs');

// Create application
var app = express();
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session(
{
	secret: "1234567ABC",
	name: "SlumpaStrumpaSession"
}));
console.log(__dirname);
app.use('/static', express.static(__dirname + '/app/static'))

// Set up view engine
app.engine('html', gaikan);
app.set('view engine', '.html');
app.set('views', __dirname + '/app/modules');

// Bootstrap controllers
var modulesPath = __dirname + '/app/modules/';
var modules = fs.readdirSync(modulesPath);
modules.forEach(function(module)
{
	var path = modulesPath + module + '/controller.js';
	var fileStat = fs.statSync(path);

	if (fileStat.isFile())
	{
		console.log("Loading controller '" + path + "'");
		require(path)(app);
	}
});

// Log requests
app.use(function(request, response, next)
{
	console.log(request.method + ' ' + request.path);
	next();
});

// Start server
app.listen(8181);
