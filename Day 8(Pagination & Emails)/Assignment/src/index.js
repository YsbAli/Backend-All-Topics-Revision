const express = require("express");
const connect = require("./configs/db");
const userController = require("./controllers/user.controller");
const app = express();

app.use(express.json());

app.use("/register", userController);
let PORT = 9936;
app.listen(PORT, async () => {
  try {
    await connect();
    console.log(`Listening on ${PORT}`);
  } catch (err) {
    console.log(err.message);
  }
});
