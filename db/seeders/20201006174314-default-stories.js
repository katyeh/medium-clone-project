'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Stories', [
        { id: 1, title: 'The Reading Rainbow', body: "I love reading on a rainbow!", userId: 1, createdAt: new Date(), updatedAt: new Date() },
        { id: 2, title: 'The Phantom Menace', body: "Episode I", userId: 3, createdAt: new Date(), updatedAt: new Date() },
        { id: 3, title: 'Attack of the Clones', body: "Episode II", userId: 1, createdAt: new Date(), updatedAt: new Date() },
        { id: 4, title: 'Revenge of the Sith', body: "Episode III", userId: 2, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Stories', null, {});
  }
};
