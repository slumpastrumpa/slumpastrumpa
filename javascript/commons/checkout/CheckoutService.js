var CheckoutService = function(models)
{
	this.models = models;	
};

CheckoutService.prototype.getCharitiesAndPaymentMethods = function(callback)
{
	var result = {};

	var Charity = this.models.model("Charity");
	var PaymentMethod = this.models.model("PaymentMethod");

	Charity.findAll().success(function (charities)
	{
		result.charities = charities;
		PaymentMethod.findAll().success(function (paymentMethods)
		{
			result.paymentMethods = paymentMethods;
			callback(result);
		});
	});
};

CheckoutService.$inject = [ "Models" ];
module.exports = CheckoutService;
