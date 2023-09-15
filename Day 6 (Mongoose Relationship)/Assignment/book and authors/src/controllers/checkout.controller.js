const express = require("express");
const Checkout = require("../models/checkout.model");

const router = express.Router()

// CheckedOut (one book can be checked out by 1 user at a time) ( Hint here is you will need book_id, checkedOutTime (default null) and checkedInTime (default null) and if checkedOutTime is not null and checkedInTime is null it means the book is checkedOut and not available and if both are not null or both are null then book is available for checkOut.


function midleware(req,res,next) {
  if (req.body.checkedInTime == null && req.body.checkedOutTime != null) {
    return res.status(404).send({massage:"book not avalibel for checkout"})
  } else {
    next()
  }
 
}

router.post("",midleware, async (req, res) => {
  try {
    const checkout = await Checkout.create(req.body)
    return res.status(201).send(checkout)
  } catch (e) {
    return res.status(500).send(e.massage)
  }
})

router.get("", async (req, res) => {
  try {
    const checkouts = await Checkout.find().lean().exec()
    return res.status(201).send(checkouts)
  } catch (e) {
    return res.status(500).send(e.massage)
  }
})

router.patch("/:id", async (req, res) => {
  try {
    const checkout = await Checkout.findByIdAndUpdate(req.params.id,req.body,{new:true})
    return res.status(201).send(checkout)
  } catch (e) {
    return res.status(500).send(e.massage)
  }
})


router.delete("/:id", async (req, res) => {
  try {
    const checkout = await Checkout.findByIdAndDelete(req.params.id)
    return res.status(201).send(checkout)
  } catch (e) {
    return res.status(500).send(e.massage)
  }
})

module.exports=router