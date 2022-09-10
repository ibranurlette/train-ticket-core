"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "list_station_names",
      [
        {
          idTown: 1,
          name: "Stasiun Sakura",
        },
        {
          idTown: 1,
          name: "Stasiun Naruto",
        },
        {
          idTown: 1,
          name: "Stasiun Sasuke",
        },
        {
          idTown: 1,
          name: "Stasiun Kiba",
        },
        {
          idTown: 1,
          name: "Stasiun Akamaru",
        },
        {
          idTown: 2,
          name: "Stasiun Sarada",
        },
        {
          idTown: 2,
          name: "Stasiun Sakura",
        },
        {
          idTown: 2,
          name: "Stasiun Boruto",
        },
        {
          idTown: 2,
          name: "Stasiun Sikamaru",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("list_station_names", null, {});
  },
};
