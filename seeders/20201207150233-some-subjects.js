"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "subjects",
      [
        {
          name: "Javascript Basics",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "React",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Redux",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Backend",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("subjects", null, {});
  },
};
