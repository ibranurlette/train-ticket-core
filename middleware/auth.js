const jwt = require('jsonwebtoken');
const models = require('../models');
const User = models.user;;
const Ticket = models.train;
const Type = models.type_Train;

exports.auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const data = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findOne({ where: { id: data.user_id } });
    if (!user) {
      // throw new Error();
      console.log("anda bukan user")
    }
    req.user = user.id;
    // req.user - data.user_id;
    req.token = token;
    next();
  } catch (err) {
    res.status(401).send({ error: "Not authorized to access this resource" });
  }
};

// exports.auth_Train = async (req, res, next) => {
//   try {
//     const token = req.header("Authorization").replace("Bearer ", " ");
//     const data = jwt.verify(token, process.env.SECRET_KEY);
//     const train = await Ticket.findOne({ where: { id: data.ticket_id } });
//     if (!train) {
//       // throw new Error();
//     }
//     req.train = train.id;
//     // req.ticket - data.user_id;
//     req.token = token;
//     next();
//   } catch (err) {
//     res.status(401).send({ error: "anda tidak berhak untuk mengakses init" });
//   }
// };