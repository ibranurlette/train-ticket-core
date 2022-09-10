'use strict';
module.exports = (sequelize, DataTypes) => {
  const payment = sequelize.define('payment', {
    Train_id: DataTypes.INTEGER,
    User_id: DataTypes.INTEGER,
    qty: DataTypes.STRING,
    Total_price: DataTypes.STRING,
    status: DataTypes.STRING,
    attachment: DataTypes.STRING
  }, {});
  payment.associate = function(models) {
    // associations can be defined here
    payment.belongsTo(models.train, {
      as: "train",
      foreignKey: "Train_id"
    });
    payment.belongsTo(models.user, {
      as: "user",
      foreignKey: "User_id"
    });
  };
  return payment;
};