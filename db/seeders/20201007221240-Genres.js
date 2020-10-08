'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Genres', [
        {title: 'Fiction', createdAt: new Date(), updatedAt: new Date()},
        {title: 'Non-fiction', createdAt: new Date(), updatedAt: new Date()},
        {title: 'Narrative', createdAt: new Date(), updatedAt: new Date()},
        {title: 'Science Fiction', createdAt: new Date(), updatedAt: new Date()},
        {title: 'Mystery', createdAt: new Date(), updatedAt: new Date()},
        {title: 'Thriller', createdAt: new Date(), updatedAt: new Date()},
        {title: 'Horror fiction', createdAt: new Date(), updatedAt: new Date()},
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Genres', null, {});

  }
};
