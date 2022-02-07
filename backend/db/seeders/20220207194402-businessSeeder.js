'use strict';
import descriptions from "../../utils/seedingData"
import images from '../../utils/seedingData'
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Businesses', [
      //Philly
      {
        name: 'The Dandelion',
        ownerId: null,
        description: descriptions["The Dandelion"],
        webAddress: "http://thedandelionpub.com",
        address: "124 S 18th St Philadelphia, PA 19103",
        latitude: 39.951000,
        longitude: 75.170700,
        imgs: images["The Dandelion"],
        amenitiesId: 1,
        phoneNumber: "(215) 558-2500",
        categories: ["Gastropubs", "British"],
        hours: ["11:30 AM - 10:00 PM", "11:30 AM - 10:00 PM","11:30 AM - 10:00 PM","11:30 AM - 10:00 PM","11:30 AM - 10:00 PM","10:00 AM - 11:00 PM", "10:00 AM - 10:00 PM"]
      },
      {
        name: "Talula's Garden",
        ownerId: null,
        description: descriptions["Talula's Garden"],
        webAddress: "http://www.talulasgarden.com",
        address: "210 W Washington Sq Philadelphia, PA 19106",
        latitude: 39.947220,
        longitude: 75.153600,
        imgs: images["Talula's Garden"],
        amenitiesId: 2,
        phoneNumber: "(215) 592-7787",
        categories: ["American (New)"],
        hours: ["5:00 PM - 9:00 PM","5:00 PM - 9:00 PM","5:00 PM - 9:00 PM","5:00 PM - 9:00 PM","4:00 PM - 10:00 PM", "4:00 PM - 10:00 PM","10:00 AM - 2:00 PM"]
      },
      {
        name: 'Butcher Bar',
        ownerId: null,
        description: descriptions["Butcher Bar"],
        webAddress: "http://www.butcherbarphilly.com",
        address: "2034 Chestnut St Philadelphia, PA 19103",
        latitude: 39.952050,
        longitude: 75.174910,
        imgs: images["Butcher Bar"],
        amenitiesId: 3,
        phoneNumber: "(215) 563-6328",
        categories: ["Steakhouses", "Bars", "Comfort Food"],
        hours: ["4:00 PM - 9:00 PM","4:00 PM - 9:00 PM","4:00 PM - 9:00 PM","4:00 PM - 9:00 PM","4:00 PM - 9:00 PM","4:00 PM - 9:00 PM","10:30 AM - 3:00 PM"]
      },
      {
        name: 'Maple Japanese Ramen',
        ownerId: null,
        description: null,
        webAddress: null,
        address: "2102 Chestnut St Philadelphia, PA 19103",
        latitude: 39.952230,
        longitude: 75.175710,
        imgs: images["Maple Japanese Ramen"],
        amenitiesId: 4,
        phoneNumber: "(215) 988-0788",
        categories: ["Ramen"],
        hours: ["11:00 AM - 9:30 PM","11:00 AM - 9:30 PM","11:00 AM - 9:30 PM","11:00 AM - 9:30 PM","11:00 AM - 10:00 PM","11:00 AM - 10:00 PM","11:30 AM - 9:30 PM"]
      },
      {
        name: 'Bao Nine',
        ownerId: null,
        description: descriptions["Bao Nine"],
        webAddress: "https://www.baoninephilly.com",
        address: "38 S 19th St Philadelphia, PA 19103",
        latitude: 39.952380,
        longitude: 75.172050,
        imgs: images["Bao Nine"],
        amenitiesId: 5,
        phoneNumber: "(215) 982-1738",
        categories: ["Taiwanese", "Asian Fusion"],
        hours: ["11:00 AM - 9:00 PM", "11:00 AM - 9:00 PM","11:00 AM - 9:00 PM","11:00 AM - 9:00 PM","11:00 AM - 9:00 PM","11:00 AM - 9:00 PM","11:00 AM - 8:00 PM",]
      },

      //Chicago
      {
        name: 'Wildberry Pancakes and Cafe',
        ownerId: null,
        description: descriptions['Wildberry Pancakes and Cafe'],
        webAddress: "http://www.wildberrycafe.com",
        address: "130 E Randolph St Chicago, IL 60601",
        latitude: 41.8848606,
        longitude: 87.6232397,
        imgs: images['Wildberry Pancakes and Cafe'],
        amenitiesId: 6,
        phoneNumber: "(312) 938-9777",
        categories: ["Pancakes", "Waffles", "Cafes"],
        hours: ["7:00 AM - 2:00 PM","7:00 AM - 2:00 PM","7:00 AM - 2:00 PM","7:00 AM - 2:00 PM","7:00 AM - 2:00 PM","7:00 AM - 2:00 PM","7:00 AM - 2:00 PM",]
      },
      {
        name: 'Au Cheval',
        ownerId: null,
        description: descriptions["Au Cheval"],
        webAddress: "http://auchevalchicago.com",
        address: "800 W Randolph St Chicago, IL 60607",
        latitude: 41.8847027,
        longitude: 87.6477509,
        imgs: images["Au Cheval"],
        amenitiesId: 7,
        phoneNumber: "(312) 929-4580",
        categories: ["Bars", "American (Traditional)"],
        hours: ["11:00 AM - 10:15 PM","11:00 AM - 10:15 PM","11:00 AM - 10:15 PM","11:00 AM - 10:15 PM","11:00 AM - 10:15 PM","11:00 AM - 10:15 PM","11:00 AM - 10:15 PM",]
      },
      {
        name: "Lou Malnati's Pizzeria",
        ownerId: null,
        description: descriptions["Lou Malnati's Pizzeria"],
        webAddress: "http://www.loumalnatis.com",
        address: "439 N Wells St Chicago, IL 60654",
        latitude: 41.89035,
        longitude: 87.6337441,
        imgs: images["Lou Malnati's Pizzeria"],
        amenitiesId: 8,
        phoneNumber: "(312) 828-9800",
        categories: ["Pizza", "Italian","Sandwhiches"],
        hours: ["11:00 AM - 10:00 PM","11:00 AM - 10:00 PM","11:00 AM - 10:00 PM","11:00 AM - 10:00 PM","11:00 AM - 11:00 PM","11:00 AM - 11:00 PM","11:00 AM - 10:00 PM",]
      },
      {
        name: 'Smoque BBQ',
        ownerId: null,
        description: descriptions['Smoque BBQ'],
        webAddress: "http://www.smoquebbq.com",
        address: "3800 N Pulaski Rd Ste 2 Chicago, IL 60641",
        latitude: 41.9502209,
        longitude: 87.72782,
        imgs: images['Smoque BBQ'],
        amenitiesId: 9,
        phoneNumber: "(773) 545-7427",
        categories: ["Barbecue"],
        hours: ["Closed","11:00 AM - 8:00 PM","11:00 AM - 8:00 PM","11:00 AM - 8:00 PM","11:00 AM - 9:00 PM","11:00 AM - 9:00 PM","11:00 AM - 8:00 PM"]
      },
      {
        name: "Joe's Seafood, Prime Steak & Stone Crab",
        ownerId: null,
        description: null,
        webAddress: "http://joes.net",
        address: "60 E Grand Ave Chicago, IL 60611",
        latitude: 41.8918497,
        longitude: 87.6255667,
        imgs: images["Joe's Seafood, Prime Steak & Stone Crab"],
        amenitiesId: 10,
        phoneNumber: "(312) 379-5637",
        categories: ["Seafood", "Steakhouses"],
        hours: ["11:30 AM - 9:00 PM","11:30 AM - 9:00 PM","11:30 AM - 9:00 PM","11:30 AM - 9:00 PM","11:30 AM - 10:00 PM","11:00 AM - 10:00 PM","11:00 AM - 9:00 PM",]
      },


      //New York City
      {
        name: 'Thursday Kitchen',
        ownerId: null,
        description: descriptions["Thursday Kitchen"],
        webAddress: "https://thursdaykitchen.com",
        address: "424 E 9th St New York, NY 10009",
        latitude: 40.7275724,
        longitude: 73.9837553,
        imgs: images["Thursday Kitchen"],
        amenitiesId: 11,
        phoneNumber: null,
        categories: ["Korean", "American (New)", "Tapas/Small Plates"],
        hours: ["6:00 PM - 11:00 PM","6:00 PM - 11:00 PM","6:00 PM - 11:00 PM","6:00 PM - 12:00 AM","5:00 PM - 12:00 AM","12:00 PM - 3:00 PM","12:00 PM - 3:00 PM",]
      },
      {
        name: "Joe's Shanghai",
        ownerId: null,
        description: null,
        webAddress: null,
        address: "46 Bowery St New York, NY 10013",
        latitude: 40.7157527,
        longitude: 73.9969166,
        imgs: images["Joe's Shanghai"],
        amenitiesId: 12,
        phoneNumber: "(212) 233-8888",
        categories: ["Shanghainese", "Seafood", "Noodles"],
        hours: ["11:00 AM - 11:00 PM","11:00 AM - 11:00 PM","11:00 AM - 11:00 PM","11:00 AM - 11:00 PM","11:00 AM - 11:00 PM","11:00 AM - 11:00 PM","11:00 AM - 11:00 PM"]
      },
      {
        name: 'Rubirosa',
        ownerId: null,
        description: descriptions["Rubirosa"],
        webAddress: "http://rubirosanyc.com",
        address: "235 Mulberry St New York, NY 10012",
        latitude: 40.7227467,
        longitude: 73.9961882,
        imgs: images["Rubirosa"],
        amenitiesId: 13,
        phoneNumber: "(212) 965-0500",
        categories: ["Italian", "Pizza"],
        hours: ["11:00 AM - 10:00 PM","11:00 AM - 10:00 PM","11:00 AM - 10:00 PM","11:00 AM - 10:00 PM","11:00 AM - 10:00 PM","11:00 AM - 10:00 PM","11:00 AM - 10:00 PM",]
      },
      {
        name: 'Jane Restaurant',
        ownerId: null,
        description: descriptions["Jane Restaurant"],
        webAddress: "http://janerestaurant.com",
        address: "100 W Houston St New York, NY 10012",
        latitude: 40.7273842,
        longitude: 74.000203,
        imgs: images["Jane Restaurant"],
        amenitiesId: 14,
        phoneNumber: "(212) 254-7000",
        categories: ["Breakfast & Brunch", "American (New)", "Bars"],
        hours: ["11:30 AM - 9:00 PM","11:30 AM - 9:00 PM","11:30 AM - 9:00 PM","11:30 AM - 9:00 PM","11:30 AM - 9:00 PM","9:00 AM - 9:00 PM","9:00 AM - 9:00 PM",]
      },
      {
        name: 'Kimura',
        ownerId: null,
        description: descriptions["Kimura"],
        webAddress: "https://www.hakatazen.com/menu",
        address: "31 St Marks Pl New York, NY 10003",
        latitude: 40.7290776,
        longitude: 73.9881831,
        imgs: images["Kimura"],
        amenitiesId: 15,
        phoneNumber: "(212) 598-1188",
        categories: ["Japanese", "Hot Pot"],
        hours: ["12:00 PM - 10:00 PM","12:00 PM - 10:00 PM","12:00 PM - 10:00 PM","12:00 PM - 10:00 PM","12:00 PM - 10:00 PM","12:00 PM - 10:00 PM","12:00 PM - 10:00 PM",]
      },
      {
        name: 'The Dandelion',
        ownerId: null,
        description: descriptions["The Dandelion"],
        webAddress: "http://thedandelionpub.com",
        address: "124 S 18th St Philadelphia, PA 19103",
        latitude: 39.951000,
        longitude: 75.170700,
        imgs: images["The Dandelion"],
        amenitiesId: 1,
        phoneNumber: "(215) 558-2500",
        categories: ["Gastropubs", "British"]
      },
      {
        name: 'The Dandelion',
        ownerId: null,
        description: descriptions["The Dandelion"],
        webAddress: "http://thedandelionpub.com",
        address: "124 S 18th St Philadelphia, PA 19103",
        latitude: 39.951000,
        longitude: 75.170700,
        imgs: images["The Dandelion"],
        amenitiesId: 1,
        phoneNumber: "(215) 558-2500",
        categories: ["Gastropubs", "British"]
      },
      {
        name: 'The Dandelion',
        ownerId: null,
        description: descriptions["The Dandelion"],
        webAddress: "http://thedandelionpub.com",
        address: "124 S 18th St Philadelphia, PA 19103",
        latitude: 39.951000,
        longitude: 75.170700,
        imgs: images["The Dandelion"],
        amenitiesId: 1,
        phoneNumber: "(215) 558-2500",
        categories: ["Gastropubs", "British"]
      },
      {
        name: 'The Dandelion',
        ownerId: null,
        description: descriptions["The Dandelion"],
        webAddress: "http://thedandelionpub.com",
        address: "124 S 18th St Philadelphia, PA 19103",
        latitude: 39.951000,
        longitude: 75.170700,
        imgs: images["The Dandelion"],
        amenitiesId: 1,
        phoneNumber: "(215) 558-2500",
        categories: ["Gastropubs", "British"]
      },
      {
        name: 'The Dandelion',
        ownerId: null,
        description: descriptions["The Dandelion"],
        webAddress: "http://thedandelionpub.com",
        address: "124 S 18th St Philadelphia, PA 19103",
        latitude: 39.951000,
        longitude: 75.170700,
        imgs: images["The Dandelion"],
        amenitiesId: 1,
        phoneNumber: "(215) 558-2500",
        categories: ["Gastropubs", "British"]
      },
      {
        name: 'The Dandelion',
        ownerId: null,
        description: descriptions["The Dandelion"],
        webAddress: "http://thedandelionpub.com",
        address: "124 S 18th St Philadelphia, PA 19103",
        latitude: 39.951000,
        longitude: 75.170700,
        imgs: images["The Dandelion"],
        amenitiesId: 1,
        phoneNumber: "(215) 558-2500",
        categories: ["Gastropubs", "British"]
      },
      {
        name: 'The Dandelion',
        ownerId: null,
        description: descriptions["The Dandelion"],
        webAddress: "http://thedandelionpub.com",
        address: "124 S 18th St Philadelphia, PA 19103",
        latitude: 39.951000,
        longitude: 75.170700,
        imgs: images["The Dandelion"],
        amenitiesId: 1,
        phoneNumber: "(215) 558-2500",
        categories: ["Gastropubs", "British"]
      },
      {
        name: 'The Dandelion',
        ownerId: null,
        description: descriptions["The Dandelion"],
        webAddress: "http://thedandelionpub.com",
        address: "124 S 18th St Philadelphia, PA 19103",
        latitude: 39.951000,
        longitude: 75.170700,
        imgs: images["The Dandelion"],
        amenitiesId: 1,
        phoneNumber: "(215) 558-2500",
        categories: ["Gastropubs", "British"]
      },
      {
        name: 'The Dandelion',
        ownerId: null,
        description: descriptions["The Dandelion"],
        webAddress: "http://thedandelionpub.com",
        address: "124 S 18th St Philadelphia, PA 19103",
        latitude: 39.951000,
        longitude: 75.170700,
        imgs: images["The Dandelion"],
        amenitiesId: 1,
        phoneNumber: "(215) 558-2500",
        categories: ["Gastropubs", "British"]
      },
      {
        name: 'The Dandelion',
        ownerId: null,
        description: descriptions["The Dandelion"],
        webAddress: "http://thedandelionpub.com",
        address: "124 S 18th St Philadelphia, PA 19103",
        latitude: 39.951000,
        longitude: 75.170700,
        imgs: images["The Dandelion"],
        amenitiesId: 1,
        phoneNumber: "(215) 558-2500",
        categories: ["Gastropubs", "British"]
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Businesses', null, {});
  }
};
