var App = function(router)
{
	this.router = router;
};

// Starts the application
App.prototype.start = function()
{
	this.router.listen(8181);
};

// Initializes handler routes
App.prototype.initialize = function()
{
	// 404
	this.router.app.use(function(request, response, next)
	{
		response.status(404);

		if (request.accepts('html'))
		{
			response.render('error/404');
			return;
		}

		if (request.accepts('json'))
		{
			response.send({ error: "Not found" });
			return;
		}

		response.type('text').send("Not found");
	});
};

App.$inject = [ "Router" ];
module.exports = App;
