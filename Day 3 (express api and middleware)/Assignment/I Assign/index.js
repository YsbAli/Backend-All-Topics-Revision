const express = require("express");
const app = express();


  app.get("/books", logger1, (req, res, next) => {
      return res.send("All Books");
      next();
    });


const logger1 = (req, res, next) => {
        console.log("Fetching all Books");
        next();
      };
    (req, res, next) => {
      res.status(404).send("not found");
    }

    app.listen(3003, function () {
        console.log("listen on port 2345");
      });
      