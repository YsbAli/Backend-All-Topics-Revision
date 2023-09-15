const express = require("express");
const res = require("express/lib/response");
const connect = require("./config/db");
// import controllers
const author_controller = require("../src/controllers/author.controller")
const book_controller = require("../src/controllers/book.controller")
const section_controller = require("../src/controllers/section.controller")
const checkout_controller = require("../src/controllers/checkout.controller")

const app = express()

app.use(express.json())

app.use("/authors",author_controller)
app.use("/books", book_controller)
app.use("/sections", section_controller)
app.use("/checkouts",checkout_controller)


app.listen(3030, async() => {
  try {
    await connect()
    console.log("server running on port 3030")
  } catch (e) {
    return res.status(500).send(e.massage)
  }
})