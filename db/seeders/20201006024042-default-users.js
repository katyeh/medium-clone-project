'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          fullName: "Yuka Moribe",
          username: "yukamoribe",
          email: "yuka@moribe.com",
          hashedPassword:
            "$2b$10$lYAdho1ns2ChPIAzLfv/depkJjlCXbMy9a62VmiolZFb/TtibcudS",
          githubUrl: "https://github.com/smilelk4",
          linkedinUrl: "https://www.linkedin.com/in/yuka-moribe-485962157/",
          picUrl:
            "https://drama-deets.s3.amazonaws.com/yuka.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Cole McCoy",
          username: "colemccoy",
          email: "cole@mccoy.com",
          hashedPassword:
            "$2b$10$lYAdho1ns2ChPIAzLfv/depkJjlCXbMy9a62VmiolZFb/TtibcudS",
          githubUrl: "https://github.com/cmccoy10",
          linkedinUrl: "https://www.linkedin.com/in/cole-mccoy-20665096/",
          picUrl: "https://drama-deets.s3.amazonaws.com/coleprofile.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Ryan Black",
          username: "ryanblack",
          email: "ryan@black.com",
          hashedPassword:
            "$2b$10$lYAdho1ns2ChPIAzLfv/depkJjlCXbMy9a62VmiolZFb/TtibcudS",
          githubUrl: "https://github.com/ryanblack045",
          linkedinUrl: "https://www.linkedin.com/in/ryan-black-b838932a/",
          picUrl:
          "https://drama-deets.s3.amazonaws.com/ryanprofile.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Kathleen Yeh",
          username: "katyeh",
          email: "kathleenyeh1@gmail.com",
          hashedPassword:
            "$2b$10$lYAdho1ns2ChPIAzLfv/depkJjlCXbMy9a62VmiolZFb/TtibcudS",
          githubUrl: "https://github.com/katyeh",
          linkedinUrl: "https://linkedin.com/in/katyeh",
          picUrl:
            "https://drama-deets.s3.amazonaws.com/kathleen.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "John Doe",
          username: "johnd",
          email: "john@doe.com",
          hashedPassword:
            "$2b$10$lYAdho1ns2ChPIAzLfv/depkJjlCXbMy9a62VmiolZFb/TtibcudS",
          picUrl: "https://www.flaticon.com/svg/static/icons/svg/3975/3975287.svg",
            createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Billy Jean",
          username: "billyj",
          email: "billy@jean.com",
          hashedPassword:
            "$2b$10$lYAdho1ns2ChPIAzLfv/depkJjlCXbMy9a62VmiolZFb/TtibcudS",
          picUrl: "https://randomuser.me/api/portraits/men/41.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "John Krasinski",
          username: "jo11hnk",
          email: "john@krasinski.com",
          hashedPassword:
            "$2b$10$lYAdho1ns2ChPIAzLfv/depkJjlCXbMy9a62VmiolZFb/TtibcudS",
          picUrl: "https://randomuser.me/api/portraits/men/73.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Mimi Takk",
          username: "mimi143",
          email: "mimi@wwkjf.com",
          hashedPassword:
            "$2b$10$lYAdho1ns2ChPIAzLfv/depkJjlCXbMy9a62VmiolZFb/TtibcudS",
          picUrl: "https://www.flaticon.com/svg/static/icons/svg/3069/3069172.svg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "George Patt",
          username: "gg3474_8hn",
          email: "gg638100@outlook.com",
          hashedPassword:
            "$2b$10$lYAdho1ns2ChPIAzLfv/depkJjlCXbMy9a62VmiolZFb/TtibcudS",
          picUrl: "https://www.flaticon.com/svg/static/icons/svg/3048/3048127.svg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Lynn Bohrin",
          username: "lynn777_1g",
          email: "lynn@bb.com",
          hashedPassword:
            "$2b$10$lYAdho1ns2ChPIAzLfv/depkJjlCXbMy9a62VmiolZFb/TtibcudS",
          picUrl: "https://www.flaticon.com/svg/static/icons/svg/3975/3975033.svg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Anne Jackson",
          username: "annejackson",
          email: "anne@anne.com",
          hashedPassword:
            "$2b$10$lYAdho1ns2ChPIAzLfv/depkJjlCXbMy9a62VmiolZFb/TtibcudS",
          picUrl: "https://randomuser.me/api/portraits/women/14.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "John Nelson",
          username: "johnnell67",
          email: "johnnel@gmail.com",
          hashedPassword:
            "$2b$10$lYAdho1ns2ChPIAzLfv/depkJjlCXbMy9a62VmiolZFb/TtibcudS",
          picUrl: "https://randomuser.me/api/portraits/men/35.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Demo User",
          username: "demouser",
          email: "demo@user.com",
          hashedPassword:
            "$2b$10$lYAdho1ns2ChPIAzLfv/depkJjlCXbMy9a62VmiolZFb/TtibcudS",
          githubUrl: "",
          linkedinUrl: "",
          picUrl:
          "https://media.fromthegrapevine.com/assets/images/2017/1/jeff-bridges-dude.jpg.839x0_q71_crop-scale.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
