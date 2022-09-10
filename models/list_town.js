"use strict";
module.exports = (sequelize, DataTypes) => {
  const list_town = sequelize.define(
    "list_town",
    {
      name: DataTypes.STRING,
    },
    {}
  );
  list_town.associate = function (models) {
    // associations can be defined here
  };
  return list_town;
};
