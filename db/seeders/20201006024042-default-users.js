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
            "https://media-exp1.licdn.com/dms/image/C4E03AQFD36k5Wm-hZg/profile-displayphoto-shrink_400_400/0?e=1607558400&v=beta&t=dABjO199QQ0ywM9MwKSV2mxOY5ew9p_usTSjo7tTgsY",
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
          picUrl: "https://miro.medium.com/fit/c/256/256/1*hLKzSxjViHNOYdum_hkmwg.jpeg",
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
          "https://avatars0.githubusercontent.com/u/63464575?s=460&u=cbd7c6a4534590745e458d179898b2b9df802eb3&v=4",
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
            "https://miro.medium.com/fit/c/128/128/1*02N7QU6pjxuAZmBh-laQWA.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "John Doe",
          username: "johnd",
          email: "john@doe.com",
          hashedPassword:
            "$2b$10$lYAdho1ns2ChPIAzLfv/depkJjlCXbMy9a62VmiolZFb/TtibcudS",
          picUrl: "https://img.icons8.com/color/48/000000/year-of-goat.png",
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
          picUrl: "https://img.icons8.com/color/48/000000/library.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "George Patt",
          username: "gg3474_8hn",
          email: "gg638100@outlook.com",
          hashedPassword:
            "$2b$10$lYAdho1ns2ChPIAzLfv/depkJjlCXbMy9a62VmiolZFb/TtibcudS",
          picUrl: "https://img.icons8.com/color/48/000000/full-moon.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Lynn Bohrin",
          username: "lynn777_1g",
          email: "lynn@bb.com",
          hashedPassword:
            "$2b$10$lYAdho1ns2ChPIAzLfv/depkJjlCXbMy9a62VmiolZFb/TtibcudS",
          picUrl: "https://img.icons8.com/color/48/000000/water-element.png",
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
