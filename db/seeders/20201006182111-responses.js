'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Responses', [
      { body: "Great post! Great tips, thanks for sharing.", storyId: 1, userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { body: "Commenting again because I really enjoyed this.", storyId: 1, userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { body: "Very cool. Enjoyed reading.", storyId: 2, userId: 2, createdAt: new Date(), updatedAt: new Date() },
      { body: "Nice.", storyId: 1, userId: 3, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Responses', null, {});
  }
};
