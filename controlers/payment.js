const jwt = require("jsonwebtoken");
const models = require("../models");
const Ticket = models.train;
const Type = models.type_Train;
const User = models.user;
const Payment = models.payment;
const List_Station = models.list_station_name;
const List_Train = models.list_train_name;
const sequelize = require("sequelize");

exports.geAll_payment = async (req, res) => {
  const { status } = req.query;
  try {
    const data = await Payment.findAll({
      where: {
        status: { [sequelize.Op.startsWith]: `%${status}` },
      },
      include: [
        {
          model: Ticket,
          as: "train",
          attributes: [
            "id",
            "nameTrain",
            "typeTrain_id",
            "dateStart",
            "startStation",
            "startTime",
            "destination",
            "arrivalTime",
            "price",
            "qty",
            "user_id",
          ],
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
    res.status(200).send(data);
  } catch (err) {
    console.log(err);
  }
};

exports.add_payment = async (req, res) => {
  const User_id = req.user;

  const { Train_id, qty, status, attachment } = req.body;
  const jumlah = qty;
  const total = qty - jumlah;
  // findOne tab;e Ticket
  const Tbl_ticket = await Ticket.findOne({
    where: { id: Train_id },
  });
  // findOne tbl payment
  const Total_price = await Payment.findOne({
    where: { id: Train_id },
  });
  // update qty tbl_ticket
  await Tbl_ticket.update({
    qty: Tbl_ticket.total,
  });
  // create tbl_payment
  try {
    const payment = await Payment.create({
      User_id,
      Train_id,
      qty,
      Total_price: jumlah * Tbl_ticket.price,
      status,
      attachment,
    });

    const paymentId = payment.id;

    const data = await Payment.findOne({
      where: { id: paymentId },
      // include: [
      //   {
      //     model: Ticket,
      //     as: "train",
      //     attributes: [
      //       "id",
      //       "nameTrain",
      //       "typeTrain_id",
      //       "dateStart",
      //       "startStation",
      //       "startTime",
      //       "destination",
      //       "arrivalTime",
      //       "price",
      //       "user_id",
      //       "qty",
      //     ],
      //   },
      //   {
      //     model: User,
      //     as: "user",
      //     attributes: [
      //       "id",
      //       "name",
      //       "username",
      //       "email",
      //       "password",
      //       "gender",
      //       "phone",
      //       "addres",
      //     ],
      //   },
      // ],
      // attributes: { exclude: ["createdAt", "updatedAt"] },
    });

    res.status(200).send({ message: "success to create data", data });
  } catch (err) {
    console.log(err);
  }
};

exports.getOne_payment = async (req, res) => {
  try {
    const { id } = req.params;
    const payment = await Payment.findOne({
      where: { id },
      include: [
        {
          model: Ticket,
          as: "train",
          attributes: [
            "id",
            "nameTrain",
            "typeTrain_id",
            "dateStart",
            "startStation",
            "startTime",
            "destination",
            "arrivalTime",
            "price",
            "qty",
            "user_id",
          ],
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
    res.status(200).send({ message: "success to find data", data: payment });
  } catch (err) {
    console.log(err);
  }
};

exports.edit_payment = async (req, res) => {
  const { status } = req.body;
  // const train = req.body.train_id;
  try {
    const id = req.params.id;
    const payment = await Payment.update(
      {
        status,
      },
      { where: { id } }
    );
    if (payment.length > 0 && payment[0]) {
      const data = await Payment.findOne({
        where: { id },
        include: [
          {
            model: Ticket,
            as: "train",
            attributes: [
              "id",
              "nameTrain",
              "typeTrain_id",
              "dateStart",
              "startStation",
              "startTime",
              "destination",
              "arrivalTime",
              "price",
              "user_id",
              "qty",
            ],
          },
        ],
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      res.status(200).send({ message: "succes to update data", data });
    } else {
      res.status(404).send({ message: "success" });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.delete_payment = async (req, res) => {
  try {
    const { id } = req.params;
    const payment = await Payment.destroy({ where: { id } });
    if (payment) {
      res.status(200).send({ message: "success", data: payment });
    } else {
      const data = await Payment.findAll();
      res.status(404).send({ message: "success", data });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.paymentProof = async (req, res) => {
  try {
    const { filename } = req.file;
    const { id } = req.params;
    if (!filename) {
      res.status(400).json({
        status: "failed",
        code: "400",
        message: "Please upload file",
      });
    } else {
      await Payment.update(
        {
          status: "pending",
          attachment: filename,
        },
        { where: { id } }
      );

      res.status(200).json({
        status: "success",
        code: "200",
        message: "file uploaded successfully",
        data: filename,
      });
    }
  } catch (err) {
    console.log(err);
  }
};
