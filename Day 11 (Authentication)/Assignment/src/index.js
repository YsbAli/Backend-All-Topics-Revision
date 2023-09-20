const express = require("express");
const connect = require("./configs/db");

const { login, register } = require("./controllers/auth.controller");
const productController = require("./controllers/product.controller");
const app = express();
app.use(express.json());

//register
app.post("/register", register);

//login
app.post("/login", login);

app.use("/products", productController);

app.listen(4011, async () => {
  try {
    await connect();
  } catch (e) {
    console.log(e.message);
  }
  console.log("Listening on port 4011");
});
