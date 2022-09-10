'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    gender: DataTypes.ENUM("male", "female"),
    phone: DataTypes.STRING,
    addres: DataTypes.TEXT,
    status: DataTypes.ENUM("0", "1"),
  }, {});
  user.associate = function(models) {
  };
  return user;
};