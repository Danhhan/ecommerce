const compression = require("compression");
const express = require("express");
const { default: helmet } = require("helmet");
const morgan = require("morgan");
const { config } = require("dotenv");

const routerApi = require("./routes");

config();
const app = express();

// init middlewares
app.use(
	morgan("dev", {
		color: true,
	})
);
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	})
);

// init database
require("./databases/init.mongodb");
// const { checkOverload } = require("./helpers/check.connect");
// checkOverload();
// init routes
app.use("/", routerApi);

// handling error

module.exports = app;
