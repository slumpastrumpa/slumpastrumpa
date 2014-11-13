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
	},
	{
		classMethods:
		{
			associate: function(models)
			{
				Subscription.belongsTo(models.Customer, { foreignKey: 'customerId', onDelete: "RESTRICT", onUpdate: "RESTRICT" });
				Subscription.belongsTo(models.PaymentMethod, { foreignKey: 'paymentMethodId', onDelete: "RESTRICT", onUpdate: "RESTRICT" });
				Subscription.belongsTo(models.Charity, { foreignKey: 'charityId', onDelete: "RESTRICT", onUpdate: "RESTRICT" });
			}
		}
	});

	return Subscription;
};
