'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Cities', [
     {name: 'Philadelphia',latitude: 39.9526, longitude:75.1652},
     {name: 'Chicago',latitude:41.8781, longitude: 87.6298},
     {name: 'New York City',latitude:40.7128, longitude: 74.0060},
     {name: 'Los Angeles',latitude:34.0522, longitude: 118.2437},
     {name: 'Houston',latitude:29.7604, longitude: 95.3698},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Cities', null, {});
  }
};
