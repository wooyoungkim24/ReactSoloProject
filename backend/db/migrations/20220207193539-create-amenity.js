'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Amenities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      reservations: {
        type: Sequelize.BOOLEAN
      },
      takeout: {
        type: Sequelize.BOOLEAN
      },
      delivery: {
        type: Sequelize.BOOLEAN
      },
      vegetarianOptions: {
        type: Sequelize.BOOLEAN
      },
      veganOptions: {
        type: Sequelize.BOOLEAN
      },
      streetParking: {
        type: Sequelize.BOOLEAN
      },
      acceptsCreditCards: {
        type: Sequelize.BOOLEAN
      },
      noisy: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Amenities');
  }
};
