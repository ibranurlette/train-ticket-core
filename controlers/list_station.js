const models = require("../models");
const List_Station = models.list_station_name;

exports.get_list_station = async (req, res) => {
  try {
    const data = await List_Station.findAll();
    res.status(200).send({ message: "success to get list station ", data });
  } catch (err) {
    console.log("ERRORO LIST STATION", err);
  }
};
