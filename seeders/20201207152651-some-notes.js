"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "notes",
      [
        {
          notebookId: 1,
          title: "Object",
          content:
            "Container for data. Objects help you structure data to read later.",
          typeOfNote: "definition",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          notebookId: 1,
          title: "Properties",
          content:
            "An object can have many properties. Each property has a key and a value",
          typeOfNote: "definition",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          notebookId: 2,
          title: "Git",
          content: "Git helps you track and share your code.",
          typeOfNote: "definition",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          notebookId: 2,
          title: "Git commands",
          content:
            "git init - initialized a git repository, git add . let's you add changes to the staging area",
          typeOfNote: "definition",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("notes", null, {});
  },
};
