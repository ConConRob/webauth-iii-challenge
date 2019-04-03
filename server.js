const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");

const server = express();

server.use(express.json());
server.use(cors());

module.exports = server;
