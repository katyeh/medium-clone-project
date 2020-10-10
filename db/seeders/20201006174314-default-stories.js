'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert(
        "Stories",
        [
          {
            title: "The Reading Rainbow",
            body: "I love reading on a rainbow!",
            userId: 1,
            imageUrl:
              "https://images.unsplash.com/photo-1530519362533-b36020711133?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: "The Phantom Menace",
            body: "Episode I",
            userId: 3,
            imageUrl:
              "https://images.unsplash.com/photo-1513001900722-370f803f498d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: "Attack of the Clones",
            body: "Episode II",
            userId: 1,
            imageUrl:
              "https://images.unsplash.com/photo-1560747570-846e8dbe919b?ixlib=rb-1.2.1&auto=format&fit=crop&w=925&q=80",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {}
      );
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Stories', null, {});
  }
};
