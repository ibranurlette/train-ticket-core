const jwt = require("jsonwebtoken");
const models = require("../models");
const User = models.user;

exports.get_user = async (req, res) => {
  const id = req.user;
  console.log("id", id);
  try {
    const data = await User.findOne({
      where: { id },
      attributes: { exclude: ["password", "createdAt", "updatedAt"] },
    });
    console.log("data", data);
    res.status(200).send(data);
  } catch (err) {
    console.log(err);
  }
};
