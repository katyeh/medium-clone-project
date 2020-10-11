'use strict';

const { query } = require("express");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Followers', [
      { followeeId: 2, followerId: 1, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 3, followerId: 1, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 4, followerId: 1, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 5, followerId: 1, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 6, followerId: 1, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 7, followerId: 1, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 8, followerId: 1, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 9, followerId: 1, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 10, followerId: 1, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 11, followerId: 1, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 12, followerId: 1, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 1, followerId: 2, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 3, followerId: 2, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 4, followerId: 2, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 5, followerId: 2, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 6, followerId: 2, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 7, followerId: 2, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 8, followerId: 2, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 9, followerId: 2, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 10, followerId: 2, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 11, followerId: 2, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 12, followerId: 2, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 1, followerId: 3, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 2, followerId: 3, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 4, followerId: 3, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 5, followerId: 3, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 6, followerId: 3, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 7, followerId: 3, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 8, followerId: 3, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 9, followerId: 3, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 10, followerId: 3, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 11, followerId: 3, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 12, followerId: 3, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 1, followerId: 4, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 2, followerId: 4, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 3, followerId: 4, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 5, followerId: 4, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 6, followerId: 4, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 7, followerId: 4, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 8, followerId: 4, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 9, followerId: 4, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 10, followerId: 4, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 11, followerId: 4, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 12, followerId: 4, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Followers', null, {});
  }
};
