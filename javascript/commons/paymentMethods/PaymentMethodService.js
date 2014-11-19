var PaymentMethodService = function(models)
{
	this.models = models;	
};

PaymentMethodService.prototype.listPaymentMethods = function()
{
	this.models.model("Charity").findAll().success(function (charities)
	{
		console.log("Retrieved charities:");
		console.log(charities);

		return charities;
	});
};

PaymentMethodService.$inject = [ "Models" ];
module.exports = PaymentMethodService;
