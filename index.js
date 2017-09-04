require("dotenv").config();

const express = require("express");

const imageSearch = require("./services/googleImageSearch");

const app = express();

app.get("/search", function(req, res) {
  imageSearch(req.query.q).then(results => res.send(results));
});

app.listen(process.env.PORT, function() {
  console.log(`Example app listening on port ${process.env.PORT}!`);
});
