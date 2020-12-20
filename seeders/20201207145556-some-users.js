"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "Sjouke",
          lastName: "Bosma",
          username: "Sjouke91",
          email: "ad@min.com",
          password: bcrypt.hashSync("test1", 10),
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/1/1f/Woman_1.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Matthijs",
          lastName: "Tiemens",
          username: "Mattie91",
          email: "m@t.com",
          password: bcrypt.hashSync("test2", 10),
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/1/1f/Woman_1.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Darth",
          lastName: "Vader",
          username: "Darty67",
          email: "d@v.com",
          password: bcrypt.hashSync("test3", 10),
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/1/1f/Woman_1.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Luke",
          lastName: "Skywalker",
          username: "LukeTheBest80",
          email: "l@s.com",
          password: bcrypt.hashSync("test4", 10),
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
