'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    title: DataTypes.STRING,
    reviewText: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
    businessId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.Business, {foreignKey:"businessId"})
    Review.belongsTo(models.User, {foreignKey:"userId"})
  };
  return Review;
};
