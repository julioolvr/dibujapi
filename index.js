require("dotenv").config();

const express = require("express");
const cors = require("cors");

const imageSearch = require("./services/googleImageSearch");

const corsOptions = {
  origin: (origin, cb) => {
    const allowed = process.env.CORS_URL
      ? process.env.CORS_URL === origin
      : /^https?:\/\/localhost/.test(origin);

    cb(null, allowed);
  }
};

const app = express();
app.use(cors(corsOptions));

app.get("/search", function(req, res) {
  imageSearch(req.query.q).then(results => res.send(results));
});

app.listen(process.env.PORT, function() {
  console.log(`Example app listening on port ${process.env.PORT}!`);
});
