const express = require("express");
const EventEmitter = require("events");
const User = require("../models/user.model");

const { confirmationMail, adminMail } = require("../utils");
const router = express.Router();
const eventEmitter = new EventEmitter();

router.post("", async (req, res) => {
  try {
    const user = await User.create(req.body);
    eventEmitter.on("User Registered", confirmationMail);
    eventEmitter.on("User Registered2", adminMail);

    eventEmitter.emit("User Registered", {
      from: "admin@Shantech.com",
      to: user.email,
      user,
    });

    eventEmitter.emit("User Registered2", {
      from: "admin@Shantech.com",
      to: [
        "adm1@gmail.com",
        "adm12@gmail.com",
        "adm13@com",
        "adm14@com",
        "adm15@com",
      ],
      user,
    });

    res.send("Mail sent");
  } catch (err) {
    return res.send(err.message);
  }
});

router.get("", async (req, res) => {
  try {
    const page = req.query.page || 1;
    const size = req.query.size || 15;
    const users = await User.find()
      .skip((page - 1) * size)
      .limit(size)
      .lean.exec();

    // const totalPages = Math.ceil((await User.find().countDocuments()) / size);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});
module.exports = router;
