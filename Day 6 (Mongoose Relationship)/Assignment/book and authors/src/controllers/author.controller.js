const express = require("express");
const Author = require("../models/author.modek");

const router = express.Router()

router.post("", async (req, res) => {
  try {
    const author = await Author.create(req.body)
    return res.status(201).send(author)
  } catch (e) {
    return res.status(500).send(e.massage)
  }
})

router.get("", async (req, res) => {
  try {
    const authors = await Author.find().lean().exec()
    return res.status(201).send(authors)
  } catch (e) {
    return res.status(500).send(e.massage)
  }
})

router.patch("/:id", async (req, res) => {
  try {
    const author = await Author.findByIdAndUpdate(req.params.id,req.body,{new:true})
    return res.status(201).send(author)
  } catch (e) {
    return res.status(500).send(e.massage)
  }
})


router.delete("/:id", async (req, res) => {
  try {
    const author = await Author.findByIdAndDelete(req.params.id)
    return res.status(201).send(author)
  } catch (e) {
    return res.status(500).send(e.massage)
  }
})

module.exports=router