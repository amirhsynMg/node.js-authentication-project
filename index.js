const express = require("express");
const app = express();
const mongoose = require("mongoose");
const debug = require("debug")("app:main");
const config = require("config");
const { body, validationResult } = require("express-validator");
const router = require("./src/routs/index");
const winston = require("winston");

// middlewares
require("./startup/config")(app, express);

// connecting to db
require("./startup/db")();

// error handling for outside of the router :)
require("./startup/logging")();

// routing
app.use("/api", router);

// onlining the local server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("listening on port: " + port));
