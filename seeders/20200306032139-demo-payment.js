"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "payments",
      [
        {
          train_id: "1",
          User_id: "1",
          qty: "2",
          Total_price: "300000",
          status: "pending",
          attachment: "1.jpg",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("payments", null, {});
  },
};
