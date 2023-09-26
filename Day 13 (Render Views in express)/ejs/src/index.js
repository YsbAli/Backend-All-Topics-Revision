require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connect = require("./configs/db.js");

const usersController = require("./controllers/user.controller");

function updateRequestMethod(req, res, next) {
  if (req.body.method) {
    req.method = req.body.method; // req.method = "delete" route = /users/:id
    return next();
  }
  return next();
}

app.use(updateRequestMethod);

app.use("/users", usersController);

app.set("view engine", "ejs");
app.use(express.static("public"));

port = process.env.PORT || 2345;

app.listen(port, async () => {
  await connect();
  console.log(`Listing on port ${port}`);
});
