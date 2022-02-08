'use strict';
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const booleans = [true,false]

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Amenities', [
      {
        reservations: booleans[getRandomInt(2)],
        takeout: booleans[getRandomInt(2)],
        delivery: booleans[getRandomInt(2)],
        vegetarianOptions:booleans[getRandomInt(2)],
        veganOptions:booleans[getRandomInt(2)],
        streetParking:booleans[getRandomInt(2)],
        acceptsCreditCards: booleans[getRandomInt(2)],
        noisy:booleans[getRandomInt(2)]
      },
      {
        reservations: booleans[getRandomInt(2)],
        takeout: booleans[getRandomInt(2)],
        delivery: booleans[getRandomInt(2)],
        vegetarianOptions:booleans[getRandomInt(2)],
        veganOptions:booleans[getRandomInt(2)],
        streetParking:booleans[getRandomInt(2)],
        acceptsCreditCards: booleans[getRandomInt(2)],
        noisy:booleans[getRandomInt(2)]
      },
      {
        reservations: booleans[getRandomInt(2)],
        takeout: booleans[getRandomInt(2)],
        delivery: booleans[getRandomInt(2)],
        vegetarianOptions:booleans[getRandomInt(2)],
        veganOptions:booleans[getRandomInt(2)],
        streetParking:booleans[getRandomInt(2)],
        acceptsCreditCards: booleans[getRandomInt(2)],
        noisy:booleans[getRandomInt(2)]
      },
      {
        reservations: booleans[getRandomInt(2)],
        takeout: booleans[getRandomInt(2)],
        delivery: booleans[getRandomInt(2)],
        vegetarianOptions:booleans[getRandomInt(2)],
        veganOptions:booleans[getRandomInt(2)],
        streetParking:booleans[getRandomInt(2)],
        acceptsCreditCards: booleans[getRandomInt(2)],
        noisy:booleans[getRandomInt(2)]
      },
      {
        reservations: booleans[getRandomInt(2)],
        takeout: booleans[getRandomInt(2)],
        delivery: booleans[getRandomInt(2)],
        vegetarianOptions:booleans[getRandomInt(2)],
        veganOptions:booleans[getRandomInt(2)],
        streetParking:booleans[getRandomInt(2)],
        acceptsCreditCards: booleans[getRandomInt(2)],
        noisy:booleans[getRandomInt(2)]
      },
      {
        reservations: booleans[getRandomInt(2)],
        takeout: booleans[getRandomInt(2)],
        delivery: booleans[getRandomInt(2)],
        vegetarianOptions:booleans[getRandomInt(2)],
        veganOptions:booleans[getRandomInt(2)],
        streetParking:booleans[getRandomInt(2)],
        acceptsCreditCards: booleans[getRandomInt(2)],
        noisy:booleans[getRandomInt(2)]
      },
      {
        reservations: booleans[getRandomInt(2)],
        takeout: booleans[getRandomInt(2)],
        delivery: booleans[getRandomInt(2)],
        vegetarianOptions:booleans[getRandomInt(2)],
        veganOptions:booleans[getRandomInt(2)],
        streetParking:booleans[getRandomInt(2)],
        acceptsCreditCards: booleans[getRandomInt(2)],
        noisy:booleans[getRandomInt(2)]
      },
      {
        reservations: booleans[getRandomInt(2)],
        takeout: booleans[getRandomInt(2)],
        delivery: booleans[getRandomInt(2)],
        vegetarianOptions:booleans[getRandomInt(2)],
        veganOptions:booleans[getRandomInt(2)],
        streetParking:booleans[getRandomInt(2)],
        acceptsCreditCards: booleans[getRandomInt(2)],
        noisy:booleans[getRandomInt(2)]
      },
      {
        reservations: booleans[getRandomInt(2)],
        takeout: booleans[getRandomInt(2)],
        delivery: booleans[getRandomInt(2)],
        vegetarianOptions:booleans[getRandomInt(2)],
        veganOptions:booleans[getRandomInt(2)],
        streetParking:booleans[getRandomInt(2)],
        acceptsCreditCards: booleans[getRandomInt(2)],
        noisy:booleans[getRandomInt(2)]
      },
      {
        reservations: booleans[getRandomInt(2)],
        takeout: booleans[getRandomInt(2)],
        delivery: booleans[getRandomInt(2)],
        vegetarianOptions:booleans[getRandomInt(2)],
        veganOptions:booleans[getRandomInt(2)],
        streetParking:booleans[getRandomInt(2)],
        acceptsCreditCards: booleans[getRandomInt(2)],
        noisy:booleans[getRandomInt(2)]
      },
      {
        reservations: booleans[getRandomInt(2)],
        takeout: booleans[getRandomInt(2)],
        delivery: booleans[getRandomInt(2)],
        vegetarianOptions:booleans[getRandomInt(2)],
        veganOptions:booleans[getRandomInt(2)],
        streetParking:booleans[getRandomInt(2)],
        acceptsCreditCards: booleans[getRandomInt(2)],
        noisy:booleans[getRandomInt(2)]
      },
      {
        reservations: booleans[getRandomInt(2)],
        takeout: booleans[getRandomInt(2)],
        delivery: booleans[getRandomInt(2)],
        vegetarianOptions:booleans[getRandomInt(2)],
        veganOptions:booleans[getRandomInt(2)],
        streetParking:booleans[getRandomInt(2)],
        acceptsCreditCards: booleans[getRandomInt(2)],
        noisy:booleans[getRandomInt(2)]
      },
      {
        reservations: booleans[getRandomInt(2)],
        takeout: booleans[getRandomInt(2)],
        delivery: booleans[getRandomInt(2)],
        vegetarianOptions:booleans[getRandomInt(2)],
        veganOptions:booleans[getRandomInt(2)],
        streetParking:booleans[getRandomInt(2)],
        acceptsCreditCards: booleans[getRandomInt(2)],
        noisy:booleans[getRandomInt(2)]
      },
      {
        reservations: booleans[getRandomInt(2)],
        takeout: booleans[getRandomInt(2)],
        delivery: booleans[getRandomInt(2)],
        vegetarianOptions:booleans[getRandomInt(2)],
        veganOptions:booleans[getRandomInt(2)],
        streetParking:booleans[getRandomInt(2)],
        acceptsCreditCards: booleans[getRandomInt(2)],
        noisy:booleans[getRandomInt(2)]
      },
      {
        reservations: booleans[getRandomInt(2)],
        takeout: booleans[getRandomInt(2)],
        delivery: booleans[getRandomInt(2)],
        vegetarianOptions:booleans[getRandomInt(2)],
        veganOptions:booleans[getRandomInt(2)],
        streetParking:booleans[getRandomInt(2)],
        acceptsCreditCards: booleans[getRandomInt(2)],
        noisy:booleans[getRandomInt(2)]
      },
      {
        reservations: booleans[getRandomInt(2)],
        takeout: booleans[getRandomInt(2)],
        delivery: booleans[getRandomInt(2)],
        vegetarianOptions:booleans[getRandomInt(2)],
        veganOptions:booleans[getRandomInt(2)],
        streetParking:booleans[getRandomInt(2)],
        acceptsCreditCards: booleans[getRandomInt(2)],
        noisy:booleans[getRandomInt(2)]
      },
      {
        reservations: booleans[getRandomInt(2)],
        takeout: booleans[getRandomInt(2)],
        delivery: booleans[getRandomInt(2)],
        vegetarianOptions:booleans[getRandomInt(2)],
        veganOptions:booleans[getRandomInt(2)],
        streetParking:booleans[getRandomInt(2)],
        acceptsCreditCards: booleans[getRandomInt(2)],
        noisy:booleans[getRandomInt(2)]
      },
      {
        reservations: booleans[getRandomInt(2)],
        takeout: booleans[getRandomInt(2)],
        delivery: booleans[getRandomInt(2)],
        vegetarianOptions:booleans[getRandomInt(2)],
        veganOptions:booleans[getRandomInt(2)],
        streetParking:booleans[getRandomInt(2)],
        acceptsCreditCards: booleans[getRandomInt(2)],
        noisy:booleans[getRandomInt(2)]
      },
      {
        reservations: booleans[getRandomInt(2)],
        takeout: booleans[getRandomInt(2)],
        delivery: booleans[getRandomInt(2)],
        vegetarianOptions:booleans[getRandomInt(2)],
        veganOptions:booleans[getRandomInt(2)],
        streetParking:booleans[getRandomInt(2)],
        acceptsCreditCards: booleans[getRandomInt(2)],
        noisy:booleans[getRandomInt(2)]
      },
      {
        reservations: booleans[getRandomInt(2)],
        takeout: booleans[getRandomInt(2)],
        delivery: booleans[getRandomInt(2)],
        vegetarianOptions:booleans[getRandomInt(2)],
        veganOptions:booleans[getRandomInt(2)],
        streetParking:booleans[getRandomInt(2)],
        acceptsCreditCards: booleans[getRandomInt(2)],
        noisy:booleans[getRandomInt(2)]
      },
      {
        reservations: booleans[getRandomInt(2)],
        takeout: booleans[getRandomInt(2)],
        delivery: booleans[getRandomInt(2)],
        vegetarianOptions:booleans[getRandomInt(2)],
        veganOptions:booleans[getRandomInt(2)],
        streetParking:booleans[getRandomInt(2)],
        acceptsCreditCards: booleans[getRandomInt(2)],
        noisy:booleans[getRandomInt(2)]
      },
      {
        reservations: booleans[getRandomInt(2)],
        takeout: booleans[getRandomInt(2)],
        delivery: booleans[getRandomInt(2)],
        vegetarianOptions:booleans[getRandomInt(2)],
        veganOptions:booleans[getRandomInt(2)],
        streetParking:booleans[getRandomInt(2)],
        acceptsCreditCards: booleans[getRandomInt(2)],
        noisy:booleans[getRandomInt(2)]
      },
      {
        reservations: booleans[getRandomInt(2)],
        takeout: booleans[getRandomInt(2)],
        delivery: booleans[getRandomInt(2)],
        vegetarianOptions:booleans[getRandomInt(2)],
        veganOptions:booleans[getRandomInt(2)],
        streetParking:booleans[getRandomInt(2)],
        acceptsCreditCards: booleans[getRandomInt(2)],
        noisy:booleans[getRandomInt(2)]
      },
      {
        reservations: booleans[getRandomInt(2)],
        takeout: booleans[getRandomInt(2)],
        delivery: booleans[getRandomInt(2)],
        vegetarianOptions:booleans[getRandomInt(2)],
        veganOptions:booleans[getRandomInt(2)],
        streetParking:booleans[getRandomInt(2)],
        acceptsCreditCards: booleans[getRandomInt(2)],
        noisy:booleans[getRandomInt(2)]
      },
      {
        reservations: booleans[getRandomInt(2)],
        takeout: booleans[getRandomInt(2)],
        delivery: booleans[getRandomInt(2)],
        vegetarianOptions:booleans[getRandomInt(2)],
        veganOptions:booleans[getRandomInt(2)],
        streetParking:booleans[getRandomInt(2)],
        acceptsCreditCards: booleans[getRandomInt(2)],
        noisy:booleans[getRandomInt(2)]
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Amenities', null, {});
  }
};
