"use strict";

module.exports = function(sequelize, DataTypes)
{
	var Customer = sequelize.define('Customer',
	{
		customerId: 			{ type: DataTypes.INTEGER, 		primaryKey: true, autoIncrement: true } 
	,	customerNumber: 		{ type: DataTypes.STRING(30),	allowNull: false, unique: true }
	,	person:					{ type: DataTypes.BOOLEAN,		allowNull: false }
	,	socialSecurityNumber:	{ type: DataTypes.STRING(15),	allowNull: true }
	,	firstName:				{ type: DataTypes.STRING(100),	allowNull: true }
	,	lastName:				{ type: DataTypes.STRING(100),	allowNull: true }
	,	organizationNumber:		{ type: DataTypes.STRING(15),	allowNull: true }
	,	companyName:			{ type: DataTypes.STRING(100),	allowNull: true }
	,	address:				{ type: DataTypes.STRING(100),	allowNull: false }
	,	addressDescription:		{ type: DataTypes.STRING(100),	allowNull: false }
	,	city:					{ type: DataTypes.STRING(100),	allowNull: false }
	,	zipcode:				{ type: DataTypes.STRING(10),	allowNull: false }
	,	email:					{ type: DataTypes.STRING(100),	allowNull: false, validate: { isEmail: true } }
	,	password:				{ type: DataTypes.STRING(100),	allowNull: true }
	,	phoneNumber:			{ type: DataTypes.STRING(100),	allowNull: false }
	},
	{
		classMethods:
		{
			associate: function(models)
			{
				// No associations
			}
		}
	});

	return Customer;
};
