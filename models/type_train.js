'use strict';
module.exports = (sequelize, DataTypes) => {
  const type_Train = sequelize.define('type_Train', {
    name: DataTypes.STRING
  }, {});
  type_Train.associate = function(models) {
    // associations can be defined here
  };
  return type_Train;
};