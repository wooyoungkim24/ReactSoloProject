'use strict';
module.exports = (sequelize, DataTypes) => {
  const Amenity = sequelize.define('Amenity', {
    reservations: DataTypes.BOOLEAN,
    takeout: DataTypes.BOOLEAN,
    delivery: DataTypes.BOOLEAN,
    vegetarianOptions: DataTypes.BOOLEAN,
    veganOptions: DataTypes.BOOLEAN,
    streetParking: DataTypes.BOOLEAN,
    acceptsCreditCards: DataTypes.BOOLEAN,
    noisy: DataTypes.BOOLEAN
  }, {});
  Amenity.associate = function(models) {
    // associations can be defined here
    Amenity.hasOne(models.Business, {foreignKey: "amenitiesId"});
  };
  return Amenity;
};
