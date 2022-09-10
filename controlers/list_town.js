const models = require("../models");
const List_Town = models.list_town;

exports.get_list_town = async (req, res) => {
  try {
    const data = await List_Town.findAll();
    res.status(200).send({ message: "success to get list town ", data });
  } catch (err) {
    console.log(err);
  }
};
