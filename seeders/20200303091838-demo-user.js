"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          name: "ibra",
          username: "ibra",
          email: "ibra@gmail.com",
          password: "ibra",
          gender: "male",
          phone: "0580349534",
          addres: "jl belimbing indah",
          status: "0",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
