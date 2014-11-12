var App = function(router)
{
	this.router = router;
};

	// Starts the application
App.prototype.start = function()
{
	this.router.listen(8181);
}

App.$inject = [ "Router" ];
module.exports = App;
