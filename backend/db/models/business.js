'use strict';
module.exports = (sequelize, DataTypes) => {
  const Business = sequelize.define('Business', {
    title: DataTypes.STRING,
    ownerId: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    webAddress: DataTypes.STRING,
    address: DataTypes.STRING,
    latitude: DataTypes.DECIMAL,
    longitude: DataTypes.DECIMAL,
    imgs: DataTypes.ARRAY,
    amenitiesId: DataTypes.INTEGER,
    phoneNumber: DataTypes.STRING,
    categories: DataTypes.ARRAY,
    hours: {
      type: DataTypes.ARRAY,
      validate: {
        len: [7]
      }
    }
  }, {});
  Business.associate = function(models) {
    // associations can be defined here
  };
  return Business;
};
