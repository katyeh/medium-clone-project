'use strict';

const { query } = require("express");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Claps', [
      { userId: 6, storyId: 2, responseId: null, createdAt: new Date(), updatedAt: new Date() },
      { userId: 6, storyId: 1, responseId: null, createdAt: new Date(), updatedAt: new Date() },
      { userId: 6, storyId: 6, responseId: null, createdAt: new Date(), updatedAt: new Date() },
      { userId: 6, storyId: 2, responseId: null, createdAt: new Date(), updatedAt: new Date() },
      { userId: 6, storyId: 2, responseId: null, createdAt: new Date(), updatedAt: new Date() },
      { userId: 6, storyId: 2, responseId: null, createdAt: new Date(), updatedAt: new Date() },
      { userId: 6, storyId: 6, responseId: null, createdAt: new Date(), updatedAt: new Date() },
      { userId: 6, storyId: 3, responseId: null, createdAt: new Date(), updatedAt: new Date() },
      { userId: 6, storyId: 4, responseId: null, createdAt: new Date(), updatedAt: new Date() },
      { userId: 6, storyId: 1, responseId: null, createdAt: new Date(), updatedAt: new Date() },
      { userId: 6, storyId: 1, responseId: null, createdAt: new Date(), updatedAt: new Date() },
      { userId: 6, storyId: 1, responseId: null, createdAt: new Date(), updatedAt: new Date() },
      { userId: 6, storyId: 1, responseId: null, createdAt: new Date(), updatedAt: new Date() },
      { userId: 6, storyId: 1, responseId: null, createdAt: new Date(), updatedAt: new Date() },
      { userId: 6, storyId: 3, responseId: null, createdAt: new Date(), updatedAt: new Date() },
      { userId: 6, storyId: 1, responseId: null, createdAt: new Date(), updatedAt: new Date() },
      { userId: 6, storyId: 4, responseId: null, createdAt: new Date(), updatedAt: new Date() },
      { userId: 6, storyId: 1, responseId: null, createdAt: new Date(), updatedAt: new Date() },
      { userId: 6, storyId: 6, responseId: null, createdAt: new Date(), updatedAt: new Date() },
      { userId: 6, storyId: 1, responseId: null, createdAt: new Date(), updatedAt: new Date() },
      { userId: 6, storyId: 8, responseId: null, createdAt: new Date(), updatedAt: new Date() },
      { userId: 6, storyId: 1, responseId: null, createdAt: new Date(), updatedAt: new Date() },
      { userId: 6, storyId: 1, responseId: null, createdAt: new Date(), updatedAt: new Date() },
      { userId: 6, storyId: 1, responseId: null, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Claps', null, {});
  }
};
