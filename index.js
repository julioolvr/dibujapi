require("dotenv").config();

const express = require("express");
const cors = require("cors");

const imageSearch = require("./services/googleImageSearch");

// TODO: Get origins from config
const corsOptions = {
  origin: ["http://localhost:3000", "http://localhost:9009"]
};

const app = express();
app.use(cors(corsOptions));

app.get("/search", function(req, res) {
  imageSearch(req.query.q).then(results => res.send(results));
});

app.listen(process.env.PORT, function() {
  console.log(`Example app listening on port ${process.env.PORT}!`);
});
