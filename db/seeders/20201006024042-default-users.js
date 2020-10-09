'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [
    {  fullName: 'John Doe', username: "johnd", email: "john@doe.com", hashedPassword: "password123", createdAt: new Date(), updatedAt: new Date() },
    {  fullName: 'Billy Jean', username: "billyj", email: "billy@jean.com", hashedPassword: "password123", createdAt: new Date(), updatedAt: new Date() },
    {  fullName: 'John Krasinski', username: "johnk", email: "john@krasinski.com", hashedPassword: "password123", createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
