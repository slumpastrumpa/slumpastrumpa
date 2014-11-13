"use strict";

module.exports = function(sequelize, DataTypes)
{
	var Charity = sequelize.define('Charity',
	{
		charityId: 				{ type: DataTypes.INTEGER, 		primaryKey: true, autoIncrement: true } 
	,	charityName: 			{ type: DataTypes.STRING(100),	allowNull: false, unique: true }
	},
	{
		classMethods:
		{
			associate: function(models)
			{
				Charity.hasMany(models.Order, { foreignKey: 'charityId', onDelete: "RESTRICT", onUpdate: "RESTRICT" });
				Charity.hasMany(models.Subscription, { foreignKey: 'charityId', onDelete: "RESTRICT", onUpdate: "RESTRICT" });
			}
		}
	});

	return Charity;
};
