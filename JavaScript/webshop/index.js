var express = require('express');

// Set up our router
var router = express.Router();

router.use(function(request, response, next)
{
	// Log our request
	console.log(request.method + ' ' + request.path);

	// Next interceptor
	next();
});

// Use our router
var app = express();
app.use('/', router);

// Index page
router.get('/', function(request, response)
{
	response.send("Index page...");
});

// Start application
app.listen(8181);
console.log("Application started on port 8181");
