const models = require("../models");
const Type_Train = models.type_Train;
exports.getTypetrain = async (req, res) => {
  try {
    const data = await Type_Train.findAll({
        attributes: { exclude: ["spesies","createdAt", "updatedAt"] }
         });
    res.send({ message: "success GetAll data spesies", data});
  } catch (err) {
    console.log(err);
  }
};