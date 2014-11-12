var bcrypt = require('bcrypt-nodejs')

var LoginController = function(router, models)
{
	router.get('/logga-in', function(request, response)
	{
		// If we are logged in already, redirect to my pages
		if (request.session.user)
		{
			response.redirect('/mina-sidor');
			return;
		}

		response.render('login/login', { error: '' });
	});

	router.post('/logga-in', function(request, response)
	{
		// If we are logged in already, redirect to my pages
		if (request.session.user)
		{
			response.redirect('/mina-sidor');
			return;
		}

		var identifier = request.param("identifier");
		var password = request.param("password");

		models.model("Customer")
			.find(
			{
				include: [ models.model("Order"), models.model("Subscription") ],
				where: models.Sequelize.or
				(
					{ email: identifier },
					{ customerNumber: identifier }
				)
			})
			.then(function(result)
			{
				if (!result)
				{
					response.render('login/login', { error: 'Felaktigt användarnamn eller lösenord' });
				}
				else if (result.password)
				{
					var correctPassword = bcrypt.compareSync(password, result.password);
					if (correctPassword)
					{
						request.session.user = result;
						response.redirect('/mina-sidor');
					}
					else
					{
						response.render('login/login', { error: 'Felaktigt användarnamn eller lösenord' });
					}
				}
				else
				{
					response.render('login/login', { error: 'Felaktigt användarnamn eller lösenord' });
				}
			});
	});

	router.get('/logga-ut', function(request, response)
	{
		request.session.user = null;
		response.redirect("/");
	});
}

LoginController.$inject = [ "Router", "Models" ];
module.exports = LoginController;