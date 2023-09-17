const express = require("express");

const Comment = require("../models/comment.model");

const crudController = require("./crud.controller");

const router = express.Router();

router.post("", crudController(Comment).post);

router.get("", async (req, res) => {
  try {
    const comments = await Comment.find()
      .populate({
        path: "post_id",
        select: ["title", "body"],
        populate: [
          { path: "user_id", select: ["first_name", "last_name"] },
          { path: "tag_ids", select: ["name"] },
        ],
      })
      .lean()
      .exec();

    return res.send(comments);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id).lean().exec();

    return res.send(comment);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.send(comment);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id)
      .lean()
      .exec();

    return res.send(comment);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
