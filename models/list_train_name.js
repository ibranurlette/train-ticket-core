"use strict";
module.exports = (sequelize, DataTypes) => {
  const list_train_name = sequelize.define(
    "list_train_name",
    {
      name: DataTypes.STRING,
    },
    {}
  );
  list_train_name.associate = function (models) {
    // associations can be defined here
  };
  return list_train_name;
};
