'use strict';
const sampleTexts =
  ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices dui sapien eget mi proin sed libero enim sed. Non pulvinar neque laoreet suspendisse interdum consectetur libero. Lacinia at quis risus sed vulputate odio ut. Semper quis lectus nulla at volutpat diam ut. Eget sit amet tellus cras. Pharetra diam sit amet nisl. Purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Malesuada pellentesque elit eget gravida cum. Egestas pretium aenean pharetra magna ac. Cursus euismod quis viverra nibh cras pulvinar. Eu lobortis elementum nibh tellus molestie nunc non blandit. Elit ut aliquam purus sit. Risus ultricies tristique nulla aliquet enim tortor at auctor. Lectus arcu bibendum at varius vel pharetra vel. Lacus vestibulum sed arcu non odio euismod. Orci ac auctor augue mauris augue neque gravida in fermentum. Tempus egestas sed sed risus.",
    "Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Eros in cursus turpis massa tincidunt dui ut. Ultrices gravida dictum fusce ut placerat orci. Nam at lectus urna duis convallis. Consequat nisl vel pretium lectus quam. Justo eget magna fermentum iaculis eu non diam. Pulvinar etiam non quam lacus suspendisse. Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Dui nunc mattis enim ut tellus elementum sagittis vitae et. Eget arcu dictum varius duis at. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Tempor commodo ullamcorper a lacus vestibulum. Quis lectus nulla at volutpat diam ut venenatis. Vitae nunc sed velit dignissim sodales ut eu sem.",
    "Urna molestie at elementum eu facilisis sed odio morbi quis. Nisi porta lorem mollis aliquam ut porttitor leo a diam. Tortor vitae purus faucibus ornare. Accumsan tortor posuere ac ut consequat semper viverra nam. Tristique et egestas quis ipsum suspendisse ultrices. Sit amet cursus sit amet dictum sit amet justo. Justo eget magna fermentum iaculis eu non. Adipiscing bibendum est ultricies integer quis auctor elit sed. Porttitor leo a diam sollicitudin tempor id eu nisl nunc. Id cursus metus aliquam eleifend mi in nulla. Lacus sed viverra tellus in hac habitasse platea dictumst vestibulum. Amet facilisis magna etiam tempor.",
    "Ut diam quam nulla porttitor massa. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Gravida arcu ac tortor dignissim convallis aenean et tortor at. Scelerisque eu ultrices vitae auctor eu augue ut lectus arcu. Et ligula ullamcorper malesuada proin libero nunc consequat. Velit egestas dui id ornare arcu. Sit amet dictum sit amet justo donec enim. Urna neque viverra justo nec ultrices. Aliquet nibh praesent tristique magna sit amet purus. Massa tincidunt nunc pulvinar sapien et. Eget magna fermentum iaculis eu non diam phasellus vestibulum lorem. Ut tristique et egestas quis ipsum suspendisse ultrices gravida. Morbi tincidunt augue interdum velit euismod in. Vitae purus faucibus ornare suspendisse sed. Urna id volutpat lacus laoreet non curabitur gravida arcu ac. Amet est placerat in egestas. Nisl purus in mollis nunc. Egestas erat imperdiet sed euismod nisi.",
    "Morbi leo urna molestie at elementum eu facilisis. Vel pharetra vel turpis nunc eget. Accumsan lacus vel facilisis volutpat est velit egestas dui. Libero nunc consequat interdum varius. Morbi tempus iaculis urna id volutpat lacus laoreet. Risus at ultrices mi tempus imperdiet nulla malesuada. Euismod in pellentesque massa placerat duis ultricies. Sociis natoque penatibus et magnis. Risus sed vulputate odio ut enim blandit. Purus ut faucibus pulvinar elementum integer enim. Eget mauris pharetra et ultrices neque ornare aenean euismod elementum. Felis donec et odio pellentesque diam volutpat commodo sed. Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque.",
    "In iaculis nunc sed augue. Justo donec enim diam vulputate ut. Id leo in vitae turpis massa sed. Porttitor lacus luctus accumsan tortor posuere ac. Integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Quam quisque id diam vel. Ullamcorper morbi tincidunt ornare massa eget egestas purus. Id neque aliquam vestibulum morbi blandit cursus. Duis at consectetur lorem donec massa sapien faucibus et. Eleifend mi in nulla posuere sollicitudin. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Eget velit aliquet sagittis id consectetur purus ut. Eget dolor morbi non arcu risus quis. Nisl pretium fusce id velit ut tortor pretium viverra. Aliquam ut porttitor leo a diam sollicitudin tempor id. Dignissim suspendisse in est ante in nibh mauris.",
    "Quisque non tellus orci ac. Sit amet consectetur adipiscing elit. Cursus eget nunc scelerisque viverra. Id velit ut tortor pretium viverra suspendisse potenti nullam. Tincidunt praesent semper feugiat nibh. Sit amet consectetur adipiscing elit ut aliquam purus sit amet. Morbi enim nunc faucibus a pellentesque. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Felis donec et odio pellentesque diam volutpat commodo sed. Eget duis at tellus at urna. Quis viverra nibh cras pulvinar mattis nunc sed. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est.",
    "Congue quisque egestas diam in. In hac habitasse platea dictumst vestibulum rhoncus est. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Diam maecenas sed enim ut. Magna ac placerat vestibulum lectus mauris ultrices eros in. Lobortis scelerisque fermentum dui faucibus in ornare. Gravida rutrum quisque non tellus orci. Sem et tortor consequat id porta nibh. Fringilla urna porttitor rhoncus dolor purus non enim. Sed arcu non odio euismod lacinia at quis. Odio tempor orci dapibus ultrices in. Convallis a cras semper auctor neque vitae tempus. Porta non pulvinar neque laoreet suspendisse interdum. Quis hendrerit dolor magna eget est lorem ipsum.",
    "Placerat vestibulum lectus mauris ultrices. Faucibus scelerisque eleifend donec pretium vulputate. Leo vel orci porta non pulvinar neque laoreet suspendisse interdum. Dolor magna eget est lorem ipsum dolor sit amet. Pretium lectus quam id leo in vitae turpis massa. Mauris rhoncus aenean vel elit scelerisque. Eu mi bibendum neque egestas congue quisque egestas diam in. Nulla at volutpat diam ut venenatis. Turpis tincidunt id aliquet risus feugiat. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Urna cursus eget nunc scelerisque viverra mauris in. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Massa massa ultricies mi quis hendrerit dolor. Egestas diam in arcu cursus euismod quis viverra nibh cras. Convallis convallis tellus id interdum velit. Pulvinar mattis nunc sed blandit libero volutpat sed cras ornare. Ultrices vitae auctor eu augue ut lectus arcu bibendum. Eros donec ac odio tempor orci dapibus."
  ]

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Reviews', [
      {
        title: 'Fantastic Place',
        reviewText: sampleTexts[getRandomInt(9)],
        rating: 5,
        businessId: 1,
        userId: 1
      },
      {
        title: 'Good Place',
        reviewText: sampleTexts[getRandomInt(9)],
        rating: 3,
        businessId: 1,
        userId: 2
      },
      {
        title: 'Great Place',
        reviewText: sampleTexts[getRandomInt(9)],
        rating: 4,
        businessId: 2,
        userId: 1
      },
      {
        title: 'OK Place',
        reviewText: sampleTexts[getRandomInt(9)],
        rating: 2,
        businessId: 2,
        userId: 3
      },
      {
        title: 'Not a Good Place',
        reviewText: sampleTexts[getRandomInt(9)],
        rating: 1,
        businessId: 3,
        userId: 2
      },
      {
        title: 'Fantastic Place',
        reviewText: sampleTexts[getRandomInt(9)],
        rating: 5,
        businessId: 3,
        userId: 3
      },
      {
        title: 'Good Place',
        reviewText: sampleTexts[getRandomInt(9)],
        rating: 3,
        businessId: 4,
        userId: 1
      },
      {
        title: 'Great Place',
        reviewText: sampleTexts[getRandomInt(9)],
        rating: 4,
        businessId: 4,
        userId: 3
      },
      {
        title: 'Great Place',
        reviewText: sampleTexts[getRandomInt(9)],
        rating: 4,
        businessId: 5,
        userId: 3
      },
      {
        title: 'Ok Place',
        reviewText: sampleTexts[getRandomInt(9)],
        rating: 2,
        businessId: 5,
        userId: 1
      },
      {
        title: 'Fantastic Place',
        reviewText: sampleTexts[getRandomInt(9)],
        rating: 5,
        businessId: 6,
        userId: 1
      },
      {
        title: 'Fantastic Place',
        reviewText: sampleTexts[getRandomInt(9)],
        rating: 5,
        businessId: 6,
        userId: 2
      },
      {
        title: 'Fantastic Place',
        reviewText: sampleTexts[getRandomInt(9)],
        rating: 5,
        businessId: 7,
        userId: 3
      },
      {
        title: 'Great Place',
        reviewText: sampleTexts[getRandomInt(9)],
        rating: 4,
        businessId: 7,
        userId: 1
      },
      {
        title: 'Good Place',
        reviewText: sampleTexts[getRandomInt(9)],
        rating: 3,
        businessId: 8,
        userId: 2
      },
      {
        title: 'Not a Good Place',
        reviewText: sampleTexts[getRandomInt(9)],
        rating: 1,
        businessId: 8,
        userId: 1
      },
      {
        title: 'Great Place',
        reviewText: sampleTexts[getRandomInt(9)],
        rating: 4,
        businessId: 9,
        userId: 1
      },
      {
        title: 'Ok Place',
        reviewText: sampleTexts[getRandomInt(9)],
        rating: 2,
        businessId: 9,
        userId: 3
      },
      {
        title: 'Great Place',
        reviewText: sampleTexts[getRandomInt(9)],
        rating: 4,
        businessId: 10,
        userId: 2
      },
      {
        title: 'Good Place',
        reviewText: sampleTexts[getRandomInt(9)],
        rating: 3,
        businessId: 10,
        userId: 3
      },
      {
        title: 'Fantastic Place',
        reviewText: sampleTexts[getRandomInt(9)],
        rating: 5,
        businessId: 11,
        userId: 1
      },
      {
        title: 'Fantastic Place',
        reviewText: sampleTexts[getRandomInt(9)],
        rating: 5,
        businessId: 11,
        userId: 3
      },
      {
        title: 'Not a good Place',
        reviewText: sampleTexts[getRandomInt(9)],
        rating: 1,
        businessId: 12,
        userId: 3
      },
      {
        title: 'Ok Place',
        reviewText: sampleTexts[getRandomInt(9)],
        rating: 2,
        businessId: 12,
        userId: 2
      },
      {
        title: 'Great Place',
        reviewText: sampleTexts[getRandomInt(9)],
        rating: 4,
        businessId: 13,
        userId: 1
      },
      {
        title: 'Good Place',
        reviewText: sampleTexts[getRandomInt(9)],
        rating: 3,
        businessId: 13,
        userId: 3
      },
      {
        title: 'Fantastic Place',
        reviewText: sampleTexts[getRandomInt(9)],
        rating: 5,
        businessId: 14,
        userId: 2
      },
      {
        title: 'Great Place',
        reviewText: sampleTexts[getRandomInt(9)],
        rating: 4,
        businessId: 14,
        userId: 1
      },
      {
        title: 'Fantastic Place',
        reviewText: sampleTexts[getRandomInt(9)],
        rating: 5,
        businessId: 15,
        userId: 2
      },
      {
        title: 'Great Place',
        reviewText: sampleTexts[getRandomInt(9)],
        rating: 4,
        businessId: 15,
        userId: 1
      },
      {
        title: 'Ok Place',
        reviewText: sampleTexts[getRandomInt(9)],
        rating: 2,
        businessId: 16,
        userId: 2
      },
      {
        title: 'Good Place',
        reviewText: sampleTexts[getRandomInt(9)],
        rating: 3,
        businessId: 16,
        userId: 3
      },
      {
        title: 'Ok Place',
        reviewText: sampleTexts[getRandomInt(9)],
        rating: 2,
        businessId: 17,
        userId: 2
      },
      {
        title: 'Good Place',
        reviewText: sampleTexts[getRandomInt(9)],
        rating: 3,
        businessId: 17,
        userId: 3
      },
      {
        title: 'Great Place',
        reviewText: sampleTexts[getRandomInt(9)],
        rating: 4,
        businessId: 18,
        userId: 1
      },
      {
        title: 'Good Place',
        reviewText: sampleTexts[getRandomInt(9)],
        rating: 3,
        businessId: 18,
        userId: 2
      },
      {
        title: 'Good Place',
        reviewText: sampleTexts[getRandomInt(9)],
        rating: 3,
        businessId: 19,
        userId: 2
      },
      {
        title: 'Good Place',
        reviewText: sampleTexts[getRandomInt(9)],
        rating: 3,
        businessId: 19,
        userId: 3
      },
      {
        title: 'Fantastic Place',
        reviewText: sampleTexts[getRandomInt(9)],
        rating: 5,
        businessId: 20,
        userId: 1
      },
      {
        title: 'Good Place',
        reviewText: sampleTexts[getRandomInt(9)],
        rating: 3,
        businessId: 20,
        userId: 3
      },
      {
        title: 'Good Place',
        reviewText: sampleTexts[getRandomInt(9)],
        rating: 3,
        businessId: 21,
        userId: 2
      },
      {
        title: 'Good Place',
        reviewText: sampleTexts[getRandomInt(9)],
        rating: 3,
        businessId: 21,
        userId: 3
      },
      {
        title: 'Great Place',
        reviewText: sampleTexts[getRandomInt(9)],
        rating: 4,
        businessId: 22,
        userId: 2
      },
      {
        title: 'Ok Place',
        reviewText: sampleTexts[getRandomInt(9)],
        rating: 2,
        businessId: 22,
        userId: 1
      },
      {
        title: 'Bad Place',
        reviewText: sampleTexts[getRandomInt(9)],
        rating: 1,
        businessId: 23,
        userId: 2
      },
      {
        title: 'Ok Place',
        reviewText: sampleTexts[getRandomInt(9)],
        rating: 2,
        businessId: 23,
        userId: 1
      },
      {
        title: 'Great Place',
        reviewText: sampleTexts[getRandomInt(9)],
        rating: 4,
        businessId: 24,
        userId: 1
      },
      {
        title: 'Good Place',
        reviewText: sampleTexts[getRandomInt(9)],
        rating: 3,
        businessId: 24,
        userId: 3
      },
      {
        title: 'Great Place',
        reviewText: sampleTexts[getRandomInt(9)],
        rating: 4,
        businessId: 25,
        userId: 1
      },
      {
        title: 'Fantastic Place',
        reviewText: sampleTexts[getRandomInt(9)],
        rating: 5,
        businessId: 25,
        userId: 2
      },


    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Reviews', null, {});
  }
};
