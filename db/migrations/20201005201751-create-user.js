'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        allowNull: false,
        type: Sequelize.STRING(55)
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING(40),
        unique: true
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(55),
        unique: true
      },
      hashedPassword: {
        allowNull: false,
        type: Sequelize.STRING.BINARY
      },
      githubUrl: {
        type: Sequelize.STRING(500),
      },
      linkedinUrl: {
        type: Sequelize.STRING(500),
      },
      picUrl: {
        type: Sequelize.STRING(500),
      imageUrl: {
        type: Sequelize.STRING(500)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
