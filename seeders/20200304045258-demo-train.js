"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "trains",
      [
        {
          nameTrain: 1,
          user_id: 1,
          typeTrain_id: 1,
          dateStart: "2020-03-03",
          dateEndTravel: "2020-03-03",
          startStation: 1,
          startTown: 1,
          endTown: 2,
          startTime: " 07:00:00",
          destination: 2,
          arrivalTime: "19:00:00",
          price: "300000",
          qty: "1",
          totalQty: "100",
        },
        {
          nameTrain: 2,
          user_id: 1,
          typeTrain_id: 2,
          dateStart: "2020-03-03",
          dateEndTravel: "2020-03-03",
          startStation: 2,
          startTown: 1,
          endTown: 2,
          startTime: " 07:00:00",
          destination: 3,
          arrivalTime: "19:00:00",
          price: "300000",
          qty: "1",
          totalQty: "100",
        },
        {
          nameTrain: 3,
          user_id: 1,
          typeTrain_id: 3,
          dateStart: "2020-03-03",
          dateEndTravel: "2020-03-03",
          startStation: 3,
          startTown: 1,
          endTown: 2,
          startTime: " 07:00:00",
          destination: 4,
          arrivalTime: "19:00:00",
          price: "300000",
          qty: "1",
          totalQty: "100",
        },
        {
          nameTrain: 4,
          user_id: 1,
          typeTrain_id: 1,
          dateStart: "2020-03-03",
          dateEndTravel: "2020-03-03",
          startStation: 4,
          startTown: 1,
          endTown: 2,
          startTime: " 07:00:00",
          destination: 5,
          arrivalTime: "19:00:00",
          price: "300000",
          qty: "1",
          totalQty: "100",
        },
        {
          nameTrain: 5,
          user_id: 1,
          typeTrain_id: 2,
          dateStart: "2020-03-03",
          dateEndTravel: "2020-03-03",
          startStation: 5,
          startTown: 1,
          endTown: 2,
          startTime: " 07:00:00",
          destination: 6,
          arrivalTime: "19:00:00",
          price: "300000",
          qty: "1",
          totalQty: "100",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("trains", null, {});
  },
};
