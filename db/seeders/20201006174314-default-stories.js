'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Stories', [
        { title: 'The Reading Rainbow', body: "I love reading on a rainbow!", userId: 1, createdAt: new Date(), updatedAt: new Date() },
        { title: 'The Phantom Menace', body: "Episode I", userId: 3, createdAt: new Date(), updatedAt: new Date() },
        { title: 'Attack of the Clones', body: "Episode II", userId: 1, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Stories', null, {});
  }
};
