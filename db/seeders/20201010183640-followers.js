'use strict';

const { query } = require("express");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Followers', [
      { followeeId: 6, followerId: 4, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 2, followerId: 1, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 7, followerId: 2, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 1, followerId: 2, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 6, followerId: 1, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 5, followerId: 1, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 2, followerId: 4, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 6, followerId: 2, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 5, followerId: 2, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 1, followerId: 6, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 2, followerId: 6, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 3, followerId: 6, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 7, followerId: 6, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 8, followerId: 6, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 4, followerId: 6, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 5, followerId: 6, createdAt: new Date(), updatedAt: new Date() },
      { followeeId: 9, followerId: 6, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Followers', null, {});
  }
};
