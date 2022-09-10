"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "list_train_names",
      [
        {
          name: "BATAVIA 1",
        },
        {
          name: "BATAVIA 2",
        },
        {
          name: "BATAVIA 3",
        },
        {
          name: "BATAVIA 4",
        },
        {
          name: "BATAVIA 5",
        },
        {
          name: "BATAVIA 6",
        },
        {
          name: "BATAVIA 7",
        },
        {
          name: "BATAVIA 8",
        },
        {
          name: "BATAVIA 9",
        },
        {
          name: "BATAVIA 10",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("list_train_names", null, {});
  },
};
