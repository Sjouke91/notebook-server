"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "notebooks",
      [
        {
          name: "JavaScript notebook",
          userId: 1,
          subjectId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Git and Github notes",
          userId: 1,
          subjectId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Node and NPM",
          userId: 1,
          subjectId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "React notes",
          userId: 1,
          subjectId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Redux notes",
          userId: 1,
          subjectId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Databases",
          userId: 1,
          subjectId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sequelize notes",
          userId: 1,
          subjectId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "REST API's",
          userId: 1,
          subjectId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("notebooks", null, {});
  },
};
