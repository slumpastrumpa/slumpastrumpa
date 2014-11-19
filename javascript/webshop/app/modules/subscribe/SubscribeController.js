var SubscribeController = function(router, checkoutService)
{
	router.get('/abonnera', function(request, response)
	{
		checkoutService.getCharitiesAndPaymentMethods(function (result)
		{
			var model =
			{
				charities: result.charities,
				paymentMethods: result.paymentMethods
			};

			response.render('subscribe/form', model);
		});
	});
};

SubscribeController.$inject = [ "Router", "CheckoutService" ];
module.exports = SubscribeController;
