"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "type_Trains",
      [
        {
          name: "eksekutif",
        },
        {
          name: "bisnis",
        },
        {
          name: "eksekutif",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("type_Trains", null, {});
  },
};
