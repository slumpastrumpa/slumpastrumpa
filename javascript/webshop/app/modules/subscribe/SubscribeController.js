var SubscribeController = function(router, charityService, paymentMethodService)
{
	router.get('/abonnera', function(request, response)
	{
		var charities = charityService.listCharities();
		response.render('subscribe/form', { charities: charities });
	});
};

SubscribeController.$inject = [ "Router", "CharityService", "PaymentMethodService" ];
module.exports = SubscribeController;
