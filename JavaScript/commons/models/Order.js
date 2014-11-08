"use strict";

module.exports = function(sequelize, DataTypes)
{
	var Order = sequelize.define('Order',
	{
		orderId: 				{ type: DataTypes.INTEGER, 		primaryKey: true, autoIncrement: true } 
	,	orderNumber: 			{ type: DataTypes.STRING(30),	allowNull: false, unique: true }
	,	quantity:				{ type: DataTypes.INTEGER,		allowNull: false, validate: { min: 1 } }
	});

	return Order;
};
