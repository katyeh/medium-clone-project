'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          fullName: "John Doe",
          username: "johnd",
          email: "john@doe.com",
          hashedPassword:
            "$2b$10$lYAdho1ns2ChPIAzLfv/depkJjlCXbMy9a62VmiolZFb/TtibcudS",
          imageUrl: "https://img.icons8.com/color/48/000000/year-of-dog.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Billy Jean",
          username: "billyj",
          email: "billy@jean.com",
          imageUrl: "https://randomuser.me/api/portraits/men/47.jpg",
          hashedPassword:
            "$2b$10$lYAdho1ns2ChPIAzLfv/depkJjlCXbMy9a62VmiolZFb/TtibcudS",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "John Krasinski",
          username: "johnk",
          email: "john@krasinski.com",
          hashedPassword:
            "$2b$10$lYAdho1ns2ChPIAzLfv/depkJjlCXbMy9a62VmiolZFb/TtibcudS",
          imageUrl: "https://randomuser.me/api/portraits/men/18.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Ryan Black",
          username: "ryanb",
          email: "ryan@aa.com",
          hashedPassword:
            "$2b$10$lYAdho1ns2ChPIAzLfv/depkJjlCXbMy9a62VmiolZFb/TtibcudS",
          imageUrl:
            "https://img.icons8.com/color/48/000000/reading-unicorn.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Kathleen Yeh",
          username: "kitkat",
          email: "katheleen@aa.com",
          hashedPassword:
            "$2b$10$lYAdho1ns2ChPIAzLfv/depkJjlCXbMy9a62VmiolZFb/TtibcudS",
          imageUrl: "https://img.icons8.com/color/48/000000/library.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Yuka Moribe",
          username: "ym4444",
          email: "yuka@aa.com",
          hashedPassword:
            "$2b$10$lYAdho1ns2ChPIAzLfv/depkJjlCXbMy9a62VmiolZFb/TtibcudS",
          imageUrl: "https://img.icons8.com/color/48/000000/full-moon.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Cole McCoy",
          username: "colem1810",
          email: "cole@aa.com",
          hashedPassword:
            "$2b$10$lYAdho1ns2ChPIAzLfv/depkJjlCXbMy9a62VmiolZFb/TtibcudS",
          imageUrl: "https://img.icons8.com/color/48/000000/water-element.png",
            createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Anne Jackson",
          username: "annejackson",
          email: "anne@anne.com",
          hashedPassword:
            "$2b$10$lYAdho1ns2ChPIAzLfv/depkJjlCXbMy9a62VmiolZFb/TtibcudS",
          imageUrl: "https://randomuser.me/api/portraits/women/14.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "John Nelson",
          username: "johnnell67",
          email: "johnnel@gmail.com",
          hashedPassword:
            "$2b$10$lYAdho1ns2ChPIAzLfv/depkJjlCXbMy9a62VmiolZFb/TtibcudS",
          imageUrl: "https://randomuser.me/api/portraits/men/35.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
