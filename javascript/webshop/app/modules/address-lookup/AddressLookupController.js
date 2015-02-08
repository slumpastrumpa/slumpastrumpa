var Klarna = require('klarna-nodejs')

var AddressLookupController = function(router, paymentServiceProviderService)
{
	router.get('/address/person/:identifier', function(request, response)
	{
		var identifier = request.params.identifier;
		getAddresses(identifier, false, paymentServiceProviderService, function(addresses)
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
		getAddresses(identifier, true, paymentServiceProviderService, function(addresses)
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

function getAddresses(identifier, isCompany, paymentServiceProviderService, success, failure)
{
	paymentServiceProviderService.getPaymentServiceProvider('klarna', function(paymentServiceProvider)
	{
		var serviceURL 		= paymentServiceProvider.getParameter('serviceURL');
		var eid		 		= paymentServiceProvider.getParameter('eid');
		var sharedSecret 	= paymentServiceProvider.getParameter('sharedSecret');

		var parameters =
		{
			eid: parseInt(eid),
			sharedSecret: sharedSecret,
			address: serviceURL
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
			console.log(error);
			var output =
			{
				code: error.code,
				message: error.faultString
			};
			failure(output);
		});

	}, function()
	{
		var output =
		{
			code: '???',
			message: 'Could not find Klarna configuration'
		};
		failure(output);
	});
}

AddressLookupController.$inject = [ 'Router', 'PaymentServiceProviderService' ];
module.exports = AddressLookupController;
