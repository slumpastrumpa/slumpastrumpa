var models = require('../../../../commons/models')
,	bcrypt = require('bcrypt-nodejs')
,	session = require('express-session')

module.exports = function(app)
{
	app.get('/logga-in', function(request, response)
	{
		// If we are logged in already, redirect to my pages
		if (request.session.user)
		{
			response.redirect('/mina-sidor');
			return;
		}

		response.render('login/template', { error: '' });
	});

	app.post('/logga-in', function(request, response)
	{
		// If we are logged in already, redirect to my pages
		if (request.session.user)
		{
			response.redirect('/mina-sidor');
			return;
		}

		var identifier = request.param("identifier");
		var password = request.param("password");

		models.Customer
			.find(
			{
				where: models.Sequelize.or
				(
					{ email: identifier },
					{ customerNumber: identifier }
				)
			})
			.success(function(result)
			{
				if (!result)
				{
					response.render('login/template', { error: 'Felaktigt användarnamn eller lösenord' });
				}
				else
				{
					var correctPassword = bcrypt.compareSync(password, result.password);
					if (correctPassword)
					{
						request.session.user = result;
						response.redirect('/mina-sidor');
					}
					else
					{
						response.render('login/template', { error: 'Felaktigt användarnamn eller lösenord' });
					}
				}
			});
	});

	app.get('/logga-ut', function(request, response)
	{
		request.session.user = null;
		response.redirect("/");
	});
}
