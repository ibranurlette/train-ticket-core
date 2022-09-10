const models = require("../models");
const List_Train = models.list_train_name;

exports.get_list_train_name = async (req, res) => {
  try {
    const data = await List_Train.findAll();
    res.status(200).send({ message: "success to get list train ", data });
  } catch (err) {
    console.log(err);
  }
};
