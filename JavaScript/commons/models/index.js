var fs			= require("fs");
var path		= require("path");
var Sequelize	= require("sequelize");
var sequelize	= new Sequelize('slumpastrumpa_test', 'root', 'anton');
var models		= {};

// Find all models
fs
	.readdirSync(__dirname)
	.filter(function(file)
	{
    	return (file.indexOf(".") !== 0) && (file !== "index.js");
	})
	.forEach(function(file)
	{
		var model = sequelize.import(path.join(__dirname, file));
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

// Syncronize the database
sequelize.sync();

// Export
models.sequelize = sequelize;
models.Sequelize = Sequelize;
module.exports = models;
