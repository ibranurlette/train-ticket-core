const jwt = require("jsonwebtoken");
const models = require("../models");
const User = models.user;
const bcrypt = require("bcrypt");
const saltRounds = 10;

// LOGOIN
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (user) {
      const result = await bcrypt.compare(password, user.password);
      if (result) {
        const token = jwt.sign(
          { user_id: user.id, status: user.status },
          process.env.SECRET_KEY
        );
        res.status(200).send({
          username,
          token,
          status: user.status,
          message: "success login",
        });
      } else {
        res.status(401).send({ message: "Your password is invalid" });
      }
    } else {
      res.status(401).send({ message: "Username and password must be match" });
    }
  } catch (err) {
    console.log(err);
  }
};

// REGISTER
exports.register = async (req, res) => {
  try {
    const { name, username, email, password, gender, phone, addres } = req.body;
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    const status = "0";

    const user1 = await User.findOne({ where: { username } });

    if (
      !name ||
      !username ||
      !email ||
      !password ||
      !gender ||
      !phone ||
      !addres
    ) {
      res.status(401).send({
        status: false,
        message: "Ada isian yang kosong",
      });
    } else if (user1) {
      res.status(401).send({ status: false, message: "Username sudah ada" });
    } else {
      const userKirim = await User.create({
        name,
        username,
        email,
        password: hash,
        gender,
        phone,
        addres,
        status,
      });
      const user = userKirim.dataValues.id;
      if (userKirim) {
        const token = jwt.sign(
          { user_id: userKirim.id },
          process.env.SECRET_KEY
        );
        res.status(200).send({ username, token, message: "success register" });
      } else {
        res.status(401).send({ status: false, message: "register gagal" });
      }
    }
  } catch (err) {
    console.log(err);
  }
};

exports.auth_reload = async (req, res) => {
  try {
    const id = req.user;
    const data = await User.findOne({
      where: { id },
      attributes: {
        exclude: ["password", "createdAt", "updatedAt"],
      },
    });
    if (data) {
      res.status(200).send({ status: true, message: "succes", data });
    } else {
      res
        .status(404)
        .send({ status: false, message: "user not found", data: {} });
    }
  } catch (err) {
    res
      .status(404)
      .send({ status: false, message: "Authorization not Allowed" });
  }
};
