"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "list_towns",
      [
        {
          name: "JAKARTA",
        },
        {
          name: "JEPARA",
        },
        {
          name: "BANDUNG",
        },
        {
          name: "AMBON",
        },
        {
          name: "BOGOR",
        },
        {
          name: "BEKASI",
        },
        {
          name: "TANGGERANG",
        },
        {
          name: "CIKAMPEK",
        },
        {
          name: "YOGYAKARTA",
        },
        {
          name: "SURABAYA",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("list_towns", null, {});
  },
};
