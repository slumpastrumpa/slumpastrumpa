"use strict";

module.exports = function(sequelize, DataTypes)
{
	var PaymentServiceProvider = sequelize.define('PaymentServiceProvider',
	{
		paymentServiceProviderId:		{ type: DataTypes.INTEGER, 		primaryKey: true }
	,	name: 							{ type: DataTypes.STRING(30),	allowNull: false, unique: true }
	},
	{
		classMethods:
		{
			associate: function(models)
			{
				PaymentServiceProvider.hasMany(models.PaymentServiceProviderParameter, { foreignKey: 'paymentServiceProviderId', onDelete: "CASCADE", onUpdate: "CASCADE" });
			}
		}
	});

	return PaymentServiceProvider;
};
