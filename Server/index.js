const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const server = express();
server.use(cors());
server.use(bodyParser.json());

server.post("/demo", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

const port = 8080;

server.listen(port, () => {
  console.log("Server Started...");
});
