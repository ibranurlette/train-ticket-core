const jwt = require("jsonwebtoken");
const models = require("../models");
const Ticket = models.train;
const Type = models.type_Train;
const List_Station = models.list_station_name;
const List_Train = models.list_train_name;
const User = models.user;
const sequelize = require("sequelize");

exports.getAll_ticket = async (req, res) => {
  try {
    const { startStation, destination, dateStart } = req.query;
    const ticket = await Ticket.findAll({
      where: {
        startStation: { [sequelize.Op.startsWith]: `%${startStation}` },
        destination: { [sequelize.Op.startsWith]: `%${destination}` },
        dateStart: { [sequelize.Op.startsWith]: `%${dateStart}` },
      },
      include: [
        {
          model: Type,
          as: "typeTrain",
          attributes: ["id", "name"],
        },
        {
          model: List_Train,
          as: "train_name",
          attributes: ["id", "name"],
        },
        {
          model: List_Station,
          as: "start_station",
          attributes: ["id", "name"],
        },
        {
          model: List_Station,
          as: "destina_tion",
          attributes: ["id", "name"],
        },
        {
          model: User,
          as: "user",
          attributes: [
            "id",
            "name",
            "username",
            "email",
            "password",
            "gender",
            "phone",
            "addres",
          ],
        },
      ],
      attributes: {
        exclude: [
          "type_Train",
          "typeTrain_id",
          "user_id",
          "createdAt",
          "updatedAt",
        ],
      },
    });

    console.log("ticket", ticket);
    res.send(ticket);
  } catch (err) {
    console.log(err);
  }
};

exports.getMy_ticket = async (req, res) => {
  try {
    const data = await Ticket.findAll({
      include: [
        {
          model: Type,
          as: "typeTrain",
          attributes: ["id", "name"],
        },
        {
          model: List_Train,
          as: "train_name",
          attributes: ["id", "name"],
        },
        {
          model: List_Station,
          as: "start_station",
          attributes: ["id", "name"],
        },
        {
          model: List_Station,
          as: "destina_tion",
          attributes: ["id", "name"],
        },
        {
          model: User,
          as: "user",
          attributes: [
            "id",
            "name",
            "username",
            "email",
            "password",
            "gender",
            "phone",
            "addres",
          ],
        },
      ],
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.status(200).send({ message: "success to find data", data });
  } catch (err) {
    console.log(err);
  }
};

exports.add_ticket = async (req, res) => {
  const {
    nameTrain,
    dateStart,
    startStation,
    user_id,
    typeTrain_id,
    startTime,
    destination,
    arrivalTime,
    price,
    qty,
    totalQty,
  } = req.body;
  try {
    if (
      !nameTrain ||
      !dateStart ||
      !startStation ||
      !user_id ||
      !typeTrain_id ||
      !startTime ||
      !destination ||
      !arrivalTime ||
      !price ||
      !qty ||
      !totalQty
    ) {
      res.status(401).send({
        status: false,
        message: "Ada isian yang kosong",
      });
    } else {
      const ticket = await Ticket.create({
        nameTrain,
        typeTrain_id,
        user_id,
        dateStart,
        startStation,
        startTime,
        destination,
        arrivalTime,
        price,
        qty,
        totalQty,
      });
      const id = ticket.id;
      const data = await Ticket.findOne({
        where: { id },
        include: [
          {
            model: Type,
            as: "typeTrain",
            attributes: ["id", "name"],
          },
          {
            model: List_Train,
            as: "train_name",
            attributes: ["id", "name"],
          },
          {
            model: List_Station,
            as: "start_station",
            attributes: ["id", "name"],
          },
          {
            model: List_Station,
            as: "destina_tion",
            attributes: ["id", "name"],
          },
          {
            model: User,
            as: "user",
            attributes: [
              "id",
              "name",
              "username",
              "email",
              "password",
              "gender",
              "phone",
              "addres",
            ],
          },
        ],
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      res.status(200).send({ message: "success", data: data });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.getOne_ticket = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Ticket.findOne({
      where: { id },
      include: [
        {
          model: Type,
          as: "typeTrain",
          attributes: ["id", "name"],
        },
        {
          model: List_Train,
          as: "train_name",
          attributes: ["id", "name"],
        },
        {
          model: List_Station,
          as: "start_station",
          attributes: ["id", "name"],
        },
        {
          model: List_Station,
          as: "destina_tion",
          attributes: ["id", "name"],
        },
        {
          model: User,
          as: "user",
          attributes: [
            "name",
            "username",
            "email",
            "gender",
            "phone",
            "addres",
          ],
        },
      ],
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.status(200).send({ message: "success to find data", data });
  } catch (err) {
    console.log(err);
  }
};

exports.edit_ticket = async (req, res) => {
  const {
    nameTrain,
    dateStart,
    startStation,
    startTime,
    destination,
    arrivalTime,
    price,
    totalQty,
    typeTrain_id,
  } = req.body;

  console.log(
    "nameTrain : ",
    nameTrain,
    "startStation : ",
    startStation,
    "destination : ",
    destination,
    "typeTrain_id: ",
    typeTrain_id,
    "dateStart :",
    dateStart,
    "startTime: ",
    startTime,
    "arrivalTime: ",
    arrivalTime,
    "price: ",
    price,
    "totalQty: ",
    totalQty
  );
  try {
    const id = req.params.id;

    if (
      !nameTrain ||
      !dateStart ||
      !startStation ||
      !startTime ||
      !destination ||
      !arrivalTime ||
      !price ||
      !totalQty ||
      !typeTrain_id
    ) {
      res.status(401).send({
        status: false,
        message: "Ada isian yang kosong",
      });
    } else {
      const ticket = await Ticket.update(
        {
          nameTrain,
          dateStart,
          startStation,
          startTime,
          destination,
          arrivalTime,
          price,
          totalQty,
          typeTrain_id,
        },
        { where: { id } }
      );

      if (ticket.length > 0 && ticket[0]) {
        const data = await Ticket.findOne({
          where: { id },
          include: [
            {
              model: Type,
              as: "typeTrain",
              attributes: ["id", "name"],
            },
            {
              model: List_Train,
              as: "train_name",
              attributes: ["id", "name"],
            },
            {
              model: List_Station,
              as: "start_station",
              attributes: ["id", "name"],
            },
            {
              model: List_Station,
              as: "destina_tion",
              attributes: ["id", "name"],
            },
          ],
          attributes: { exclude: ["createdAt", "updatedAt"] },
        });

        res.status(200).send({ message: "Succes to Updated", data });
      } else {
        res.status(404).send({ message: "Failed to Updated" });
      }
    }
  } catch (err) {
    console.log(err);
  }
};

exports.delete_ticket = async (req, res) => {
  try {
    const { id } = req.params;
    const ticket = await Ticket.destroy({ where: { id } });
    if (ticket) {
      res.status(200).send({ message: "success deleted ticket", data: ticket });
    } else {
      const data = await Ticket.findAll();
      res.status(404).send({ message: "failed deleted ticket", data });
    }
  } catch (err) {
    console.log(err);
  }
};
