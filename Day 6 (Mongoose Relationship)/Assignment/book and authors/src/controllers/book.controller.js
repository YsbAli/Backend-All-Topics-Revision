const express = require("express");
const Book = require("../models/book.model");
const Checkout = require("../models/checkout.model");
const router = express.Router()

router.post("", async (req, res) => {
  try {
    const book = await Book.create(req.body)
    return res.status(201).send(book)
  } catch (e) {
    return res.status(500).send(e.massage)
  }
})

router.get("", async (req, res) => {
  try {
    const books = await Book.find().populate("author_id").populate("section_id").lean().exec()

    const checked = await Checkout.find().lean().exec()

    if (req.query.section) {
      let result = books.filter((ele) => {
        if (ele.section_id.section == req.query.section) {
          return ele
        }

      })
      return res.status(200).send(result)
    }
    if (req.query.chekedOut) {

      let result = checked.filter((ele) => {
        if (ele.checkedInTime != null && ele.checkedOutTime != null) {
          return ele
        }
      })
      return res.status(200).send(result)
    }


    return res.status(200).send(books)
  } catch (e) {
    return res.status(500).send(e.massage)
  }
})
router.get("/:id", async (req, res) => {
  try {
    const books = await Book.find({ author_id: req.params.id }).populate("author_id").populate("section_id").lean().exec()

    return res.status(201).send(books)
  } catch (e) {
    return res.status(500).send(e.massage)
  }
})



router.patch("/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true })
    return res.status(201).send(book)
  } catch (e) {
    return res.status(500).send(e.massage)
  }
})


router.delete("/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id)
    return res.status(201).send(book)
  } catch (e) {
    return res.status(500).send(e.massage)
  }
})

module.exports = router