var Klarna = require('klarna-nodejs')

var AddressLookupController = function(router, models)
{
	router.get('/address-lookup/:identifier', function(request, response)
	{
		var parameters =
		{
			eid: 123,
			sharedSecret: '...',
			address: 'https://payment.testdrive.klarna.com:443'
		};

		var klarna = new Klarna(parameters);
		klarna.getAddresses(request.params.identifier, function(addresses)
		{
			response.status(200);
			response.json(addresses);
		}, function(error)
		{
			response.status(400);
			response.json(error);
		});
	});
}

AddressLookupController.$inject = [ "Router" ];
module.exports = AddressLookupController;
