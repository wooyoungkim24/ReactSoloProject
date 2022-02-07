'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Businesses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ownerId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Users",
          },
        },
      },
      hours:{
        type:Sequelize.ARRAY,
        
      },
      description: {
        type: Sequelize.TEXT
      },
      webAddress: {
        unique:true,
        type: Sequelize.STRING
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING
      },
      latitude: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      longitude: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      imgs: {
        allowNull: false,
        type: Sequelize.ARRAY
      },
      amenitiesId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Amenities",
          },
        },
      },
      categories:{
        type: Sequelize.ARRAY
      },
      phoneNumber: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Businesses');
  }
};
