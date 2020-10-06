'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Responses', [
      { id: 1, body: "Great post! Great tips, thanks for sharing.", storyId: 1, userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { id: 2, body: "Commenting again because I really enjoyed this.", storyId: 1, userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { id: 3, body: "Very cool. Enjoyed reading.", storyId: 2, userId: 2, createdAt: new Date(), updatedAt: new Date() },
      { id: 4, body: "Nice.", storyId: 1, userId: 3, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Responses', null, {});
  }
};
