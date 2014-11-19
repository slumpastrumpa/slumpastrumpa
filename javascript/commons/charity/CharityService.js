var CharityService = function(models)
{
	this.models = models;	
};

CharityService.prototype.listCharities = function()
{
	// THIS NEEDS FIXING, IT IS NOT SYNCHRONOUS, SO UNDEFINED IS RETURNED.

	this.models.model("Charity").findAll().success(function (charities)
	{
		console.log("Retrieved charities:");
		console.log(charities);

		return charities;
	});
};

CharityService.$inject = [ "Models" ];
module.exports = CharityService;
