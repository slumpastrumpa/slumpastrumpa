"use strict";

module.exports = function(sequelize, DataTypes)
{
	var Order = sequelize.define('Order',
	{
		orderId: 				{ type: DataTypes.INTEGER, 								primaryKey: true, autoIncrement: true } 
	,	orderNumber: 			{ type: DataTypes.STRING(30),							allowNull: false, unique: true }
	,	quantity:				{ type: DataTypes.INTEGER,								allowNull: false, validate: { min: 1 } }
	,	status:					{ type: DataTypes.ENUM('being_processed', 'placed'), 	allowNull: false }
	},
	{
		classMethods:
		{
			associate: function(models)
			{
				Order.belongsTo(models.Customer, { foreignKey: 'customerId', onDelete: "RESTRICT", onUpdate: "RESTRICT" });
			}
		}
	});

	return Order;
};
