var IndexController = function(router)
{
	router.get('/', function(request, response)
	{
		response.render('index/index');
	});
}

IndexController.$inject = [ "Router" ];
module.exports = IndexController;