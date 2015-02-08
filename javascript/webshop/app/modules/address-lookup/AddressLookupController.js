var Klarna = require('klarna-nodejs')

var AddressLookupController = function(router, models)
{
	router.get('/address/person/:identifier', function(request, response)
	{
		var identifier = request.params.identifier;
		getAddresses(identifier, false, function(addresses)
		{
			response.status(200);
			response.json(addresses);
		}, function(error)
		{
			response.status(400);
			response.json(error);
		});
	});

	router.get('/address/company/:identifier', function(request, response)
	{
		var identifier = request.params.identifier;
		getAddresses(identifier, true, function(addresses)
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

function getAddresses(identifier, isCompany, success, failure)
{
	var parameters =
	{
		eid: 123,
		sharedSecret: '...',
		address: 'https://payment.testdrive.klarna.com:443'
	};

	var klarna = new Klarna(parameters);
	klarna.getAddresses(identifier, function(addresses)
	{
		var output = [];
		addresses.forEach(function(address)
		{
			if (address.isCompany === isCompany)
			{
				delete address.isCompany;
				output.push(address);
			}
		});
		success(output);
	}, function(error)
	{
		failure(error);
	});
}

AddressLookupController.$inject = [ "Router" ];
module.exports = AddressLookupController;
