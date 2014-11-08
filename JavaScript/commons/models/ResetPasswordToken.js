"use strict";

module.exports = function(sequelize, DataTypes)
{
	var ResetPasswordToken = sequelize.define('ResetPasswordToken',
	{
		tokenId: 				{ type: DataTypes.INTEGER, 		primaryKey: true, autoIncrement: true } 
	,	token: 					{ type: DataTypes.STRING(100),	allowNull: false, unique: true }
	,	expiresAt:				{ type: DataTypes.DATE,			allowNull: false }
	},
	{
		classMethods:
		{
			associate: function(models)
			{
				ResetPasswordToken.belongsTo(models.Customer, { foreignKey: 'customerId', onDelete: "RESTRICT", onUpdate: "RESTRICT" });
			}
		}
	});

	return ResetPasswordToken;
};
