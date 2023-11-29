const compression = require("compression");
const express = require("express");
const { default: helmet } = require("helmet");
const morgan = require("morgan");
const { config } = require("dotenv");

config();
const app = express();

// init middlewares
app.use(morgan('tiny'));
app.use(helmet());
app.use(compression());

// init database
require("./databases/init.mongodb");
const { checkOverload } = require("./helpers/check.connect");
checkOverload()
// init routes

// handling error

module.exports = app;
