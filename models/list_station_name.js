"use strict";
module.exports = (sequelize, DataTypes) => {
  const list_station_name = sequelize.define(
    "list_station_name",
    {
      name: DataTypes.STRING,
      idTown: DataTypes.INTEGER,
    },
    {}
  );
  list_station_name.associate = function (models) {
    // associations can be defined here
    list_station_name.belongsTo(models.list_town, {
      as: "listTown",
      foreignKey: "idTown",
    });
  };
  return list_station_name;
};
