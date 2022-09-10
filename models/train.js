"use strict";
module.exports = (sequelize, DataTypes) => {
  const train = sequelize.define(
    "train",
    {
      nameTrain: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      typeTrain_id: DataTypes.INTEGER,
      dateStart: DataTypes.STRING,
      dateEndTravel: DataTypes.STRING,
      startTown: DataTypes.STRING,
      endTown: DataTypes.STRING,
      startStation: DataTypes.STRING,
      startTime: DataTypes.TIME,
      destination: DataTypes.STRING,
      arrivalTime: DataTypes.TIME,
      price: DataTypes.STRING,
      qty: DataTypes.STRING,
      totalQty: DataTypes.STRING,
    },
    {}
  );
  train.associate = function (models) {
    train.belongsTo(models.type_Train, {
      as: "typeTrain",
      foreignKey: "typeTrain_id",
    });

    train.belongsTo(models.list_train_name, {
      as: "train_name",
      foreignKey: "nameTrain",
    });

    train.belongsTo(models.list_station_name, {
      as: "start_station",
      foreignKey: "startStation",
    });

    train.belongsTo(models.list_station_name, {
      as: "destina_tion",
      foreignKey: "destination",
    });

    train.belongsTo(models.user, {
      as: "user",
      foreignKey: "user_id",
    });

    train.belongsTo(models.list_town, {
      as: "start_town",
      foreignKey: "startTown",
    });

    train.belongsTo(models.list_town, {
      as: "end_town",
      foreignKey: "endTown",
    });
  };
  return train;
};
