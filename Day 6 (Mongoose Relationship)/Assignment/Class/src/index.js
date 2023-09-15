const express = require("express");

const connect = require("./configs/db");

const userController = require("./controllers/user.controller");
const tagController = require("./controllers/tag.controller");
const postController = require("./controllers/post.controller");
const commentController = require("./controllers/comment.controller");

const app = express();

app.use(express.json());

app.use("/users", userController);
app.use("/posts", postController);
app.use("/tags", tagController); // /:id
app.use("/comments", commentController);

app.listen(2345, async function () {
  try {
    await connect();
    console.log("listening on port 2345");
  } catch (e) {
    console.log(e.message);
  }
});

// app.get("/user", logger1("admin"), (req, res) => {
//   res.send(req.role);
// });

// function logger1(role) {
//   return function (req, res, next) {
//     if (role == "admin") {
//       req.role = "admin";
//     } else {
//       req.role = "user";
//     }
//     next();
//   };
// }
