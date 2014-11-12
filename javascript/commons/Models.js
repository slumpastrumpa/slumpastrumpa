var Models = function()
{
	// Raw dependencies
	var fs			= require("fs")
	,	path		= require("path")
	,	Sequelize	= require("sequelize");

	// Set up the Sequelize connection
	var	sequelize	= new Sequelize('slumpastrumpa_test', 'root', 'anton',
	{
		logging: false
	});

	// Variables
	var	modelPath	= path.join(__dirname, "models")
	,	models		= {};

	// Find all models
	fs
		.readdirSync(modelPath)
		.forEach(function(file)
		{
			var model = sequelize.import(path.join(modelPath, file));
			models[model.name] = model;
		});

	// Create associations
	Object.keys(models).forEach(function(modelName)
	{
		if ("associate" in models[modelName])
		{
			models[modelName].associate(models);
		}
	});

	// Export
	this.Sequelize = Sequelize;
	this.model = function(modelName)
	{
		return models[modelName];
	};
};

module.exports = Models;