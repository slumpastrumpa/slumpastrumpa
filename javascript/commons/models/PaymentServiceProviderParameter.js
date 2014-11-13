"use strict";

module.exports = function(sequelize, DataTypes)
{
	var PaymentServiceProviderParameter = sequelize.define('PaymentServiceProviderParameter',
	{
		paymentServiceProviderConfigId:		{ type: DataTypes.INTEGER, 		primaryKey: true, autoIncrement: true } 
	,	paymentServiceProviderId:			{ type: DataTypes.INTEGER, 		allowNull: false } 
	,	parameterKey: 						{ type: DataTypes.STRING(100),	allowNull: false }
	,	parameterValue: 					{ type: DataTypes.STRING(255),	allowNull: false }
	},
	{
		classMethods:
		{
			associate: function(models)
			{
				PaymentServiceProviderParameter.belongsTo(models.PaymentServiceProvider, { foreignKey: 'paymentServiceProviderId', onDelete: "CASCADE", onUpdate: "CASCADE" });
			}
		}
	});

	return PaymentServiceProviderParameter;
};
