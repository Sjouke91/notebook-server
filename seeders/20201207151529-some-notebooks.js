"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "notebooks",
      [
        {
          name: "JavaScript notebook",
          private: false,
          userId: 1,
          subjectId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Git and Github notes",
          private: false,
          userId: 1,
          subjectId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Node and NPM",
          private: false,
          userId: 1,
          subjectId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "React notes",
          private: false,
          userId: 1,
          subjectId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Redux notes",
          private: false,
          userId: 1,
          subjectId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Databases",
          private: false,
          userId: 1,
          subjectId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sequelize notes",
          private: false,
          userId: 1,
          subjectId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "REST API's",
          private: false,
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
