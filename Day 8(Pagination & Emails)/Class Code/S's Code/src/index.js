const express = require("express");

const connect = require("./configs/db");

const userController = require("./controllers/user.controller");

const app = express();

app.use(express.json());

app.use("/users", userController);

app.listen(2345, async () => {
  try {
    await connect();
  } catch (err) {
    console.error(err.message);
  }
  console.log("listening on port 2345");
});
