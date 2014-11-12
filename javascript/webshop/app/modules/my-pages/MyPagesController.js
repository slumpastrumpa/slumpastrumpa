var MyPagesController = function(router)
{
	router.get('/mina-sidor', function(request, response)
	{
		// If we are not logged in, redirect to login page
		if (!request.session.user)
		{
			response.redirect('/logga-in');
			return;
		}

		response.render('my-pages/my-pages', { message: '', error: '', customer: request.session.user });
	});
}

MyPagesController.$inject = [ "Router" ];
module.exports = MyPagesController