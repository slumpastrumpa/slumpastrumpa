var PlaceOrderController = function(router, checkoutService)
{
	router.get('/bestall', function(request, response)
	{
		checkoutService.getCharitiesAndPaymentMethods(function (result)
		{
			var model =
			{
				charities: result.charities,
				paymentMethods: result.paymentMethods
			};

			response.render('place-order/form', model);
		});
	});
};

PlaceOrderController.$inject = [ "Router", "CheckoutService" ];
module.exports = PlaceOrderController;
