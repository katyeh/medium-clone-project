'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Responses', [
      { body: "Great post! Great tips, thanks for sharing.", storyId: 1, userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { body: "Commenting again because I really enjoyed this.", storyId: 1, userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { body: "Very cool. Enjoyed reading.", storyId: 2, userId: 2, createdAt: new Date(), updatedAt: new Date() },
      { body: "Nice.", storyId: 1, userId: 3, createdAt: new Date(), updatedAt: new Date() },
      { body: "Amazing.", storyId: 1, userId: 3, createdAt: new Date(), updatedAt: new Date() },
      { body: "Thanks for writing!.", storyId: 1, userId: 13, createdAt: new Date(), updatedAt: new Date() },
      { body: "Keep it up.", storyId: 1, userId: 3, createdAt: new Date(), updatedAt: new Date() },
      { body: "Soooo interestinngg.", storyId: 4, userId: 13, createdAt: new Date(), updatedAt: new Date() },
      { body: "Woowowwww.", storyId: 2, userId: 13, createdAt: new Date(), updatedAt: new Date() },
      { body: "Gooood article.", storyId: 9, userId: 13, createdAt: new Date(), updatedAt: new Date() },
      { body: "Gotta read that book!", storyId: 5, userId: 13, createdAt: new Date(), updatedAt: new Date() },
      { body: "Super interesting.", storyId: 16, userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { body: "Yesssss.", storyId: 13, userId: 4, createdAt: new Date(), updatedAt: new Date() },
      { body: "Niceee. Good story.", storyId: 16, userId: 3, createdAt: new Date(), updatedAt: new Date() },
      { body: "Thanks for sharing.", storyId: 15, userId: 2, createdAt: new Date(), updatedAt: new Date() },
      { body: "Cooolioo.", storyId: 14, userId: 9, createdAt: new Date(), updatedAt: new Date() },
      { body: "Mind-blowing.", storyId: 14, userId: 5, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Responses', null, {});
  }
};
