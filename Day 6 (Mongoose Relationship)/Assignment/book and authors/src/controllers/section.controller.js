const express = require("express");
const Book = require("../models/book.model");
const Checkout = require("../models/checkout.model");

const Section = require("../models/section.model");

const router = express.Router()


router.post("", async (req, res) => {
  try {
    const section = await Section.create(req.body)
    return res.status(201).send(section)
  } catch (e) {
    return res.status(500).send(e.massage)
  }
})

router.get("", async (req, res) => {
  try {
    const checked = await Checkout.find().lean().exec();
    const book = await Book.find().populate("author_id").lean().exec();
    if (req.query.author) {
      const a = book.filter((ele) => {
        if(ele.author_id.first_name==req.query.author)
        return ele
      })
 return res.status(200).send(a)
      
    }
    const result = checked.filter((ele) => {
      if (ele.checkedInTime == null && ele.checkedOutTime == null) {
        return ele
      }
    })
    // console.log(result)
    
    const sections = await Section.find().lean().exec()
    return res.status(201).send(result)
  } catch (e) {
    return res.status(500).send(e.massage)
  }
})

router.patch("/:id", async (req, res) => {
  try {
    const section = await Section.findByIdAndUpdate(req.params.id,req.body,{new:true})
    return res.status(201).send(section)
  } catch (e) {
    return res.status(500).send(e.massage)
  }
})


router.delete("/:id", async (req, res) => {
  try {
    const section = await Section.findByIdAndDelete(req.params.id)
    return res.status(201).send(section)
  } catch (e) {
    return res.status(500).send(e.massage)
  }
})

module.exports = router;