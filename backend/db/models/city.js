'use strict';
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('City', {
    latitude: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    }
  }, {});
  City.associate = function(models) {
    // associations can be defined here
  };
  return City;
};
