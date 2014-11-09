var models = require('../../../../commons/models');

module.exports = function(app)
{
	app.get('/mina-sidor', function(request, response)
	{
		// If we are not logged in, redirect to login page
		if (!request.session.user)
		{
			response.redirect('/logga-in');
			return;
		}

		response.render('my-pages/template', { message: '', error: '', customer: request.session.user });
	});
}