var PaymentServiceProviderService = function(models)
{
	this.models = models;
};

/**
 * Gets a payment service provider and its parameters by ts name.
 *
 * @param name The name of the service provider to find.
 */
PaymentServiceProviderService.prototype.getPaymentServiceProvider = function(name, success, failure)
{
	var PaymentServiceProviderParameter = this.models.model('PaymentServiceProviderParameter')
	var PaymentServiceProvider = this.models.model('PaymentServiceProvider');
	var query =
	{
		include: [ PaymentServiceProviderParameter ],
		where:
		{
			name: name
		}
	};

	PaymentServiceProvider.findOne(query)
		.done(function(error, paymentServiceProvider)
		{
			if (error)
			{
				failure(error);
			}
			else
			{
				paymentServiceProvider.getParameter = function(parameterKey)
				{
					for (var i = 0; i < paymentServiceProvider.PaymentServiceProviderParameters.length; i++)
					{
						var parameter = paymentServiceProvider.PaymentServiceProviderParameters[i];
						if (parameter.parameterKey === parameterKey)
						{
							return parameter.parameterValue;
						}
					}

					return '';
				}
				success(paymentServiceProvider);
			}
		});
};

PaymentServiceProviderService.$inject = [ 'Models' ];
module.exports = PaymentServiceProviderService;
