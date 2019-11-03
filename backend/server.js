const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const routes = require("./router");

const app = express();

const url = "mongodb://localhost:27017/uniifce";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;

app.use(morgan("short"));
app.use(express.json());

app.use(routes);
app.listen(3333, () => {
  console.log("Server is On");
});
