"use strict";

module.exports = function(sequelize, DataTypes)
{
	var Subscription = sequelize.define('Subscription',
	{
		subscriptionId: 		{ type: DataTypes.INTEGER, 		primaryKey: true, autoIncrement: true } 
	,	subscriptionNumber: 	{ type: DataTypes.STRING(30),	allowNull: false, unique: true }
	,	quantity:				{ type: DataTypes.INTEGER,		allowNull: false, validate: { min: 1 } }
	,	startDate:				{ type: DataTypes.DATE,			allowNull: false }
	,	orderInterval:			{ type: DataTypes.INTEGER,		allowNull: false }
	});

	return Subscription;
};
