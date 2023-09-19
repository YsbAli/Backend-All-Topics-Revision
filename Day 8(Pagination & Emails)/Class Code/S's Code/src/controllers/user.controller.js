const { body, validationResult } = require("express-validator");

const express = require("express");

const User = require("../models/user.model");
const req = require("express/lib/request");

const router = express.Router();

router.post(
  "",
  body("id")
    .isNumeric()
    .withMessage("Id is not a number")
    .bail()
    .custom(async (value) => {
      const user = await User.findOne({ id: value });
      if (user) {
        throw new Error("Id already exists");
      }
      return true;
    }),
  body("first_name")
    .isString()
    .isLowercase()
    .isLength({ min: 3, max: 20 })
    .withMessage("First name should be 3 to 20 characters long"),
  body("last_name").isLowercase().isLength({ min: 3, max: 20 }),
  body("email")
    .isEmail()
    .custom(async (value) => {
      const user = await User.findOne({ email: value });
      if (user) {
        throw new Error("Email already exists");
      }
      return true;
    }),
  body("password")
    .isLength({ min: 8, max: 20 })
    .custom((value) => {
      let pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
      if (pattern.test(value)) {
        return true;
      }
      throw new Error("Password is not strong");
    }),
  body("ip_address").notEmpty().isIP(),
  body("age").isAlphanumeric(),
  body("birth_date").isDate(),
  // body("user_id").custom(async (value, {req}) => {
  //   const post = await Post.findById(req.params.id);
  //     if (! post) {
  //       throw new Error("Post does not exists");
  //     }
  //   if (post.user_id !== req.query.user_id) {
  //     throw new Error("User is not the same");
  //     }
  //     return true;
  // })
  async (req, res) => {
    try {
      const errors = validationResult(req);
      // errors = []
      if (!errors.isEmpty()) {
        let newErrors;
        newErrors = errors.array().map((err) => {
          console.log("err", err);
          return { key: err.param, message: err.msg };
        });
        return res.status(400).send({ errors: newErrors });
      }
      const user = await User.create(req.body);

      // when user registers
      // verification email is sent to user
      // eventEmitter.on("User Registered", verificationMail);
      // welcome email is sent to user

      return res.send(user);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  }
);

// /users
router.get("", async (req, res) => {
  try {
    const page = req.query.page || 1;
    const size = req.query.size || 15;

    // page=11&size=15 = query {page: 11, size: 15}
    // if page = 1 then return first 1-15 (size) results
    // if page = 2 then return 16-30 results

    // page = 1 then (page - 1) = 0 then skip 0 items limit (size) // 1 - 15 items
    // page = 2  then skip ( (page - 1) * size ) = 15 items and limit (size) // 16-30 items

    const query = { gender: "Female" };
    const users = await User.find(query) // 30 documents
      .skip((page - 1) * size) // page 1 first 15 documents
      .limit(size)
      .lean()
      .exec();

    const totalPages = Math.ceil(
      (await User.find(query).countDocuments()) / size
    );

    return res.send({ users, totalPages });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/:gender", async (req, res) => {
  try {
    const page = req.query.page || 1;
    const size = req.query.size || 15;

    // page=11&size=15 = query {page: 11, size: 15}
    // if page = 1 then return first 1-15 (size) results
    // if page = 2 then return 16-30 results

    // page = 1 then (page - 1) = 0 then skip 0 items limit (size) // 1 - 15 items
    // page = 2  then skip ( (page - 1) * size ) = 15 items and limit (size) // 16-30 items

    const query = { gender: req.params.gender };
    const users = await User.find(query) // 30 documents
      .skip((page - 1) * size) // page 1 first 15 documents
      .limit(size)
      .lean()
      .exec();

    const totalPages = Math.ceil(
      (await User.find(query).countDocuments()) / size
    );

    return res.send({ users, totalPages });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
