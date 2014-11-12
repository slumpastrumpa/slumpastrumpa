var bcrypt = require('bcrypt-nodejs')
,	uuid = require('node-uuid');

var ForgotPasswordController = function(router, models)
{
	router.get('/glomt-losenord', function(request, response)
	{
		// If we are logged in already, redirect to my pages
		if (request.session.user)
		{
			response.redirect('/mina-sidor');
			return;
		}

		response.render('forgot-password/forgot-password', { message: '', error: '' });
	});

	router.post('/glomt-losenord', function(request, response)
	{
		// If we are logged in already, redirect to my pages
		if (request.session.user)
		{
			response.redirect('/mina-sidor');
			return;
		}

		var identifier = request.body.identifier;

		models.model("Customer")
			.find(
			{
				where: models.Sequelize.or
				(
					{ email: identifier },
					{ customerNumber: identifier }
				)
			})
			.success(function (result)
			{
				if (!result)
				{
					response.render('forgot-password/forgot-password', { message: '', error: 'Ingen användare hittades.' });
				}
				else
				{
					// Generate a new token that expires in 12 hours
					var token = uuid.v1();
					var expiresAt = new Date();
					expiresAt.setHours(expiresAt.getHours() + 12);

					models.model("ResetPasswordToken").create(
					{
						token: token,
						expiresAt: expiresAt,
						customerId: result.customerId
					}).success(function(token)
					{
						// TODO: SEND MAIL :)))

						var message = 'Ett mail kommer inom kort att skickas till dig med information om hur du byter ditt lösenord.'
						response.render('forgot-password/forgot-password', { message: message, error: '' });
					});
				}
			});
	});

	router.get('/glomt-losenord/:token', function(request, response)
	{
		var token = request.params.token;

		models.model("ResetPasswordToken").find(
		{
			where:
			{
				token: token,
				expiresAt: { gte: new Date() }
			}
		}).done(function (error, token)
		{
			if (token)
			{
				response.render('forgot-password/set-password', { token: token, message: '', error: '' });
			}
			else
			{
				response.status(404).end();
			}
		});
	});

	router.post('/glomt-losenord/:token', function(request, response)
	{
		var token = request.params.token;
		var newPassword = request.body.newPassword;
		var newPasswordRepeat = request.body.newPasswordRepeat;

		if (!newPassword)
		{
				response.render('forgot-password/set-password', { message: '', error: 'Ange lösenord.' });
				return;
		}

		if (newPassword !== newPasswordRepeat)
		{
				response.render('forgot-password/set-password', { message: '', error: 'De anvigna lösenorden är inte likadana.' });
				return;
		}

		models.model("ResetPasswordToken").find(
		{
			include: [ models.model("Customer") ],
			where:
			{
				token: token,
				expiresAt: { gte: new Date() }
			}
		}).done(function (error, object)
		{
			if (object)
			{
				var hashedPassword = bcrypt.hashSync(newPassword);
				object.Customer.password = hashedPassword;
				object.Customer.save([ 'password' ]);
				object.destroy();

				response.render('forgot-password/set-password', { message: 'Ditt lösenord har uppdateras!', error: '' });
			}
			else
			{
				response.status(404).end();
			}
		});
	});
}

ForgotPasswordController.$inject = [ "Router", "Models" ];
module.exports = ForgotPasswordController;
