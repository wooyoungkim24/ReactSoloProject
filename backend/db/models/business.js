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
    imgs: DataTypes.ARRAY(DataTypes.TEXT),
    amenitiesId: DataTypes.INTEGER,
    phoneNumber: DataTypes.STRING,
    categories: DataTypes.ARRAY(DataTypes.TEXT),
    hours: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      validate: {
        hoursLength(value){
          if(value.length !== 7){
            throw new Error("Must have 7 hours for a week")
          }
        }
      }
    }
  }, {});
  Business.associate = function(models) {
    // associations can be defined here
  };
  return Business;
};
