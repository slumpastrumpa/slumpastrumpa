"use strict";

module.exports = function(sequelize, DataTypes)
{
	var PaymentMethod = sequelize.define('PaymentMethod',
	{
		paymentMethodId:		{ type: DataTypes.INTEGER, 		primaryKey: true, autoIncrement: true } 
	,	name: 					{ type: DataTypes.STRING(30),	allowNull: false, unique: true }
	,	paymentCode:			{ type: DataTypes.STRING(30),	allowNull: false }
	},
	{
		classMethods:
		{
			associate: function(models)
			{
				PaymentMethod.hasMany(models.Order, { foreignKey: 'paymentMethodId', onDelete: "RESTRICT", onUpdate: "RESTRICT" });
				PaymentMethod.hasMany(models.Subscription, { foreignKey: 'paymentMethodId', onDelete: "RESTRICT", onUpdate: "RESTRICT" });
				PaymentMethod.belongsTo(models.PaymentServiceProvider, { foreignKey: 'paymentServiceProviderId', onDelete: "RESTRICT", onUpdate: "RESTRICT" });
			}
		}
	});

	return PaymentMethod;
};
