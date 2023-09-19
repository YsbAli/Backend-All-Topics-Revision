const express = require("express");

const {
  upload,
  uploadSingle,
  uploadMultiple,
} = require("../middlewares/file-upload");

const User = require("../models/user.model");

const router = express.Router();

router.post("", uploadSingle("profile_pic"), async (req, res) => {
  try {
    const user = await User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      profile_pic: req.file.path,
    });

    return res.send(user);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("/gallery", uploadMultiple("pictures"), async (req, res) => {
  try {
    const filePaths = req.files.map((file) => file.path);
    const user = await User.create({
      pictures: filePaths,
      user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
      },
    });

    return res.send(user);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

// /users
router.get("", async (req, res) => {
  try {
    const users = await User.find().lean().exec();

    return res.send({ users });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id);
    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
