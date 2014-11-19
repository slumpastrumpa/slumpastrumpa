var intervenous	= require('intravenous')
,	webshop		= require('./classes')
,	common		= require('../commons/classes');

// Create IOC container
var container = intervenous.create();

// Register all classes
common.concat(webshop).forEach(function (item)
{
	var fullyQualifiedPath = item.path + '/' + item.name + '.js';

	console.log("Registering " + fullyQualifiedPath);
	container.register(item.name, require(fullyQualifiedPath), "singleton");
});

// Get the application
var app = container.get("App");

// Wire any non-wired classes
common.concat(webshop)
	.filter(function (item)
	{
		return item.auto;
	})
	.forEach(function (item)
	{
		container.get(item.name);
	});

// Start the main application
app.initialize();
app.start();
