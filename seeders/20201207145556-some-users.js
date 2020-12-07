"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "Ad",
          lastName: "Min",
          username: "admin",
          email: "ad@min.com",
          password: "1234",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/1/1f/Woman_1.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
